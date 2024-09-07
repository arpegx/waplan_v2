<?php

use App\Http\Controllers\PlantController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/plant');
Route::resource('/plant', PlantController::class);

require __DIR__ . '/auth.php';
