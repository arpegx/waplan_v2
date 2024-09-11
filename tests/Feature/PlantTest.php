<?php declare(strict_types=1);
use App\Models\Plant;
use Illuminate\Http\UploadedFile;

test('plant.index is displayed', function () {
    $response = $this
        ->get('/plant');

    $response->assertOk();
});

test('plant.create is displayed', function () {
    $response = $this
        ->get('/plant/create');

    $response->assertOk();
});

test('plant.store creates new plant', function () {
    $nick_name = fake()->name();
    $file = UploadedFile::fake()->image('image.png');

    $response = $this->post('/plant', [
        'nick_name' => $nick_name,
        'watered_at' => now(),
        'picture' => $file,
    ]);

    $plant = Plant::where('nick_name', $nick_name)->first();

    $response
        ->assertStatus(302)
        ->assertRedirect(route('plant.show', $plant));

    $plant->delete();
});

test('plant.show is displayed', function () {
    $plant = Plant::factory()->create();

    $response = $this
        ->get('/plant/', compact('plant'));

    $response->assertOk();

    $plant->delete();
});

test('plant.edit is displayeable', function () {
    $plant = Plant::factory()->create(['nick_name' => fake()->name()]);

    $response = $this->get(route('plant.edit', $plant))
        ->assertOk();

    $plant->delete();
});

test('plant.update', function () {
    $plant = Plant::factory()->create(['nick_name' => fake()->name()]);

    $response = $this->patch(route('plant.update', ['plant' => $plant, 'nick_name' => 'Jane']))
        ->assertStatus(302);

    expect((Plant::find($plant)->first())->nick_name)->toEqual('Jane');

    $plant->delete();
});

test('plant.delete', function () {
    $plant = Plant::factory()->create();

    $response = $this
        ->delete(route('plant.destroy', compact('plant')))
        ->assertStatus(302)
        ->assertRedirect(route('plant.index'));

    expect(Plant::find($plant)?->first())->toBeNull();
});

test('plant.water', function () {
    $plant = Plant::create([
        'nick_name' => 'test_plant',
        'watered_at' => '1960-01-01',
    ]);

    $response = $this
        ->post(route('plant.water'), ['plants' => [$plant]])
        ->assertStatus(302)
        ->assertRedirect(route('plant.index'));

    $plant = Plant::find($plant->id);
    expect($plant->watered_at)->tobe(date(format: 'Y-m-d'));

    $plant->delete();
});