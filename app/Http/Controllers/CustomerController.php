<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProdukResource;
use App\Http\Resources\KategoriResource;
use Illuminate\Http\Request;
use App\Models\Produk;
use App\Models\Kategori;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $query = Produk::query();
        $produks = $query->paginate(500);
        $query2 = Kategori::query();
        $kategoris = $query2->paginate(500);
        return Inertia::render('Customer/Index', [
            "produks" => ProdukResource::collection($produks),
            "kategoris" => KategoriResource::collection($kategoris),
        ]);
    }
    
    public function show($produkDetail)
    {
        $produkDetail = Produk::where('id_produk', $produkDetail)->first();
        return Inertia::render('Customer/DetailProduk', [
            "produkDetail" => new ProdukResource(($produkDetail)),
        ]);
    }
}
