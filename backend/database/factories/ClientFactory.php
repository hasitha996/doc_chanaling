<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ClientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'des' => $this->faker->company,
            'contact_person' => $this->faker->name,
            'contact_number' => $this->faker->numberBetween($min = 100000000, $max = 9999999999),
            'email' => $this->faker->unique()->safeEmail,
        ];
    }
}
