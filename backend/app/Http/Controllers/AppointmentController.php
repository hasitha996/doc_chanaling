<?php

namespace App\Http\Controllers;

use App\Models\AppointmentModel;
use App\Models\DoctorModel;
use App\Models\HospitalModel;
use Illuminate\Http\Request;
use \Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Mail\SendConfomMail;
use Illuminate\Support\Facades\Mail;

class AppointmentController extends Controller
{
    public function __construct()
    {

        $this->module_name = 'AppointmentModel';
        $this->model_obj = new AppointmentModel();

        // Response messages
        $this->save_success_msg = ucfirst(' saved successfully!');
        $this->save_error_msg = ucfirst('Failed to save !');
        $this->update_success_msg = ucfirst(' updated successfully!');
        $this->update_error_msg = ucfirst('Failed to update !');
        $this->delete_success_msg = ucfirst(' deleted successfully!');
        $this->delete_error_msg = ucfirst('Failed to delete !');

        // Http status codes
        $this->ok = 200;
        $this->created = 201;
        $this->process_pending = 202;
        $this->bad_request = 400;
        $this->unauthorized = 401;
        $this->not_found = 404;
        $this->error = 500;
    }
    public function index()
    {
        try {
            $hospitel_list = HospitalModel::all();
            $doc_list = DoctorModel::all();

            $entities = array(
                'hospitel_list' => $hospitel_list,
                'doctor_list' => $doc_list
            );

            return response()->json($entities, $this->ok);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json($th, $this->error);
        }
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $rules = [
                'name' => 'required|string|min:3|max:255',
                'email' => 'required|string|email|max:255'
            ];
            $validator = Validator::make($request->all(), $rules);

            if ($validator->fails()) {
                return response()->json( $this->error);
            } else {
                $this->model_obj['des'] = $request['des'];
                $this->model_obj['contact_person'] = $request['contact_person'];
                $this->model_obj['contact_number'] = $request['contact_number'];
                $this->model_obj['email'] = $request['email'];

                $this->model_obj->save();

                $this->sendmail($request['mail']);
            }



            DB::commit();

            return response()->json($this->save_success_msg, $this->created);
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
            return response()->json($this->save_error_msg . ' >>> ' . $th, $this->error);
        }
    }

    public function show($id)
    {
        try {
            $appointment = AppointmentModel::findOrFail($id);

            $entities = array(
                'appointmentdeta' => $appointment
            );

            return response()->json($entities, $this->ok);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json($th, $this->bad_request);
        }
    }

    public function sendmail($send_email){

        $details = [
            'title' => 'Mail from doc Chanaling ',
            'body' => 'This is your Appointment Conformation'
        ];

        Mail::to($send_email)->send(new SendConfomMail($details));
        //dd('Mail Sent');
    }
}
