<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => $this->faker->randomNumber($nbDigits = 3, $strict = false),
            'name' => $this->faker->name,
            'contact_number' => $this->faker->numberBetween($min = 100000000, $max = 9999999999),
            'email' => $this->faker->unique()->safeEmail,
            'is_active' => 1,
        ];
    }
}
