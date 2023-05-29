<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_appointment', function (Blueprint $table) {
            $table->id();
            $table->date('date_of_appointment');
            $table->string('name',60);
            $table->string('email_phone',40);
            $table->integer('doc_id');
            $table->integer('country_id');
            $table->integer('state_id');
            $table->integer('specility_id');
            $table->integer('is_self');
            $table->integer('is_someone');
          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_appointment');
    }
}
