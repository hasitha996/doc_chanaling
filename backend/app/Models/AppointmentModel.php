<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentModel extends Model
{
    use HasFactory;
    protected $table = 'tb_appointment';

    public $fillable = [
        'id',
        'date_of_appointment',
        'name',
        'email_phone',
        'doc_id',
        'country_id',
        'specility_id',
      
      
    ];

    public function doc()   {
        
        return $this->hasOne(DoctorModel::class, 'id', 'doc_id');
    }
}
