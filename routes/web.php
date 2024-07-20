<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RiwayatController;
use App\Http\Controllers\TransaksiController;
use App\Models\Produk;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/customer/dashboard', [CustomerController::class, 'index'])->name('dashboardcustomer');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');

    Route::resource('Produk', ProdukController::class);
    Route::resource('Kategori', KategoriController::class);
    Route::resource('Transaksi', TransaksiController::class);
    Route::resource('Riwayat', RiwayatController::class);
});

// CRUD PRODUK
Route::middleware('auth')->group(function () {
    Route::get('/Produk/{produk}', [ProdukController::class, 'show'])->name('Produk.show');
    Route::get('/produk/{produk}/edit', [ProdukController::class, 'edit'])->name('Produk.edit');
    Route::put('produk/{produk}', [ProdukController::class, 'update'])->name('Produk.update');
    Route::delete('/produk/{produk}', [ProdukController::class, 'destroy'])->name('Produk.destroy');
});

// CRUD KATEGORI
Route::middleware('auth')->group(function () {
    Route::get('/kategori/{kategori}/edit', [KategoriController::class, 'edit'])->name('Kategori.edit');
    Route::put('kategori/{kategori}', [KategoriController::class, 'update'])->name('Kategori.update');
    Route::delete('/kategori/{kategori}', [KategoriController::class, 'destroy'])->name('Kategori.destroy');
});

// CRUD TRANSAKSI
Route::middleware('auth')->group(function () {
    Route::get('/transaksi/{transaksi}/edit', [TransaksiController::class, 'edit'])->name('Transaksi.edit');
    Route::put('transaksi/{transaksi}', [TransaksiController::class, 'update'])->name('Transaksi.update');
    Route::delete('/transaksi/{transaksi}', [TransaksiController::class, 'destroy'])->name('Transaksi.destroy');
});

require __DIR__ . '/auth.php';

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Admin/Index');   
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/produk', function () {
//     return Inertia::render('Admin/Produk');
// })->middleware(['auth', 'verified'])->name('produk');

// Route::get('/kategori', function () {
//     return Inertia::render('Admin/Kategori');
// })->middleware(['auth', 'verified'])->name('kategori');

// Route::get('/transaksi', function () {
//     return Inertia::render('Admin/Transaksi');
// })->middleware(['auth', 'verified'])->name('transaksi');

// Route::get('/riwayat', function () {
//     return Inertia::render('Admin/Riwayat');
// })->middleware(['auth', 'verified'])->name('riwayat');