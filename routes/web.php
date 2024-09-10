<?php

use App\Http\Controllers\PlantController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/plant');
Route::resource('/plant', PlantController::class);
Route::post('plant/water', [PlantController::class, 'water'])->name('plant.water');

require __DIR__ . '/auth.php';
