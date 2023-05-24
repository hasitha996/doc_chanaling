<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoctorModel extends Model
{
    use HasFactory;
    protected $table = 'tb_doctor';

    public $fillable = [
        'id',
        'name',
    ];

    public function has_appoiment()
    {
        return $this->hasMany(AppointmentModel::class);
    }
}
