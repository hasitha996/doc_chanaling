<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class doctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_doctor')->insert([
            'name' => 'Damayanthi Pieris'                      
        ]);
        DB::table('tb_doctor')->insert([
            'name' => 'Kanthi Perera'                      
        ]);
        DB::table('tb_doctor')->insert([
            'name' => 'Mahendra Perera'                      
        ]);
        DB::table('tb_doctor')->insert([
            'name' => 'Lakshmen Obeysekara'                      
        ]);
        DB::table('tb_doctor')->insert([
            'name' => 'Priyantha Madawala'                      
        ]);
      
    }
}
