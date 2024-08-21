<?php declare(strict_types=1);

test('Plant.index is displayed', function () {
    $response = $this
        ->get('/plant');

    $response->assertOk();
});