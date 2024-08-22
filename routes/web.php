<?php

use App\Http\Controllers\PlantController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/plant', function () {
    return Inertia::render('Plant/Index');
})->name('plant.index');
Route::get('/plant/create', [PlantController::class, 'create'])->name('plant.create');
Route::get('/plant/{plant}', [PlantController::class, 'show'])->name('plant.show');
Route::post('/plant', [PlantController::class, 'store'])->name('plant.store');
Route::get('/plant/{plant}/edit', [PlantController::class, 'edit'])->name('plant.edit');
Route::patch('/plant/{plant}', [PlantController::class, 'update'])->name('plant.update');

require __DIR__ . '/auth.php';
