<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
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

        DB::table('tb_hospital')->insert([
            'name' =>'Aloka private hospital'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Asiri hospital Matara'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Arogya hospitals pvt. Ltd. Gampaha'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Arogya hospital Batticoloa'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Asiri surgical hospital'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Asiri hospital Narahenpita'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Ave maria hospital Negombo'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Apeksha fertilitycare'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Ceylinco Healthcare services'
            ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Co Op hospital Galle'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Ceymed Health services Nugegoda'
        ]);    
        DB::table('tb_hospital')->insert([
            'name' =>'Central nursing home Jaffna'
        ]);
        DB::table('tb_hospital')->insert([
            'name' =>'Durdans hospital Colombo'
        ]);
    }
}
