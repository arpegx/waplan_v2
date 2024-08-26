<?php declare(strict_types=1);
use App\Models\Plant;
use Illuminate\Http\UploadedFile;

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
    $file = UploadedFile::fake()->image('image.png');

    $response = $this->post('/plant', [
        'nick_name' => $nick_name,
        'picture' => $file,
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

test('plant.edit is displayeable', function () {
    $plant = Plant::factory()->create(['nick_name' => fake()->name()]);

    $response = $this->get(route('plant.edit', $plant))
        ->assertOk();
});

test('plant.update', function () {
    $plant = Plant::factory()->create(['nick_name' => fake()->name()]);

    $response = $this->patch(route('plant.update', ['plant' => $plant, 'nick_name' => 'Jane']))
        ->assertStatus(302);

    expect((Plant::find($plant)->first())->nick_name)->toEqual('Jane');
});

test('plant.delete', function () {
    $plant = Plant::factory()->create();

    $response = $this
        ->delete(route('plant.destroy', compact('plant')))
        ->assertStatus(302)
        ->assertRedirect(route('plant.index'));

    expect(Plant::find($plant)?->first())->toBeNull();
});