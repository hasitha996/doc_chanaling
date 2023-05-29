<?php

use App\Http\Controllers\AppointmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;


Route::post('login', [AccessTokenController::class, 'issueToken'])->middleware(['api-login', 'throttle']);

Route::get('appointment', [AppointmentController::class, 'index']);
Route::post('get_appointment_save', [AppointmentController::class, 'store'])->name('appointment_store');
Route::get('get_appointment_list/{id}', [AppointmentController::class, 'show'])->name('appointment_list');

