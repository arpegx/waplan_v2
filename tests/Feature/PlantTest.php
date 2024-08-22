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

test('Plant.Show is displayed', function () {
    $plant = Plant::factory()->create();

    $response = $this
        ->get('/plant/', compact('plant'));

    $response->assertOk();
});