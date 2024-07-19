<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProdukResource;
use Illuminate\Http\Request;
use App\Models\Produk;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $query = Produk::query();
        $produks = $query->paginate(10);
        return Inertia::render('Customer/Index', [
            "produks" => ProdukResource::collection($produks),
        ]);
    }
}
