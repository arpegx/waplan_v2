<?php declare(strict_types=1);
use App\Models\Plant;

test('Plant.Index is displayed', function () {
    $response = $this
        ->get('/plant');

    $response->assertOk();
});

test('Plant.Create is displayed', function () {
    $response = $this
        ->get('/plant/create');

    $response->assertOk();
});

test('plant.store creates new plant', function () {
    $nick_name = fake()->name();

    $response = $this->post('/plant', [
        'nick_name' => $nick_name,
    ]);

    $plant = Plant::where('nick_name', $nick_name)->first();

    $response
        ->assertStatus(302)
        ->assertRedirect(route('plant.show', $plant));
});

test('Plant.Show is displayed', function () {
    $plant = Plant::factory()->create();

    $response = $this
        ->get('/plant/', compact('plant'));

    $response->assertOk();
});