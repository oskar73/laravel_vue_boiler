<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::get('/', [\App\Http\Controllers\AuthController::class, 'home'])->name('home');
Route::get('/login', [\App\Http\Controllers\AuthController::class, 'home'])->name('home');
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');

Route::get('/Dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('Dashboard');
