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
            $table->integer('doc_id')->nullable()->default(0);
            $table->integer('country_id')->nullable()->default(0);
            $table->integer('state_id')->nullable()->default(0);
            $table->integer('specility_id')->nullable()->default(0);
            $table->integer('is_self')->nullable()->default(0);
            $table->integer('is_someone')->nullable()->default(0);
          
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
