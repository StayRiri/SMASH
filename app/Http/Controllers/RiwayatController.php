<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Produk;
use App\Models\Transaksi;
use App\Http\Resources\ProdukResource;
use App\Http\Resources\TransaksiResource;

class RiwayatController extends Controller
{
    public function index()
    {
        $query = Transaksi::query();
        $query2 = Produk::query();
        $transaksis = $query->paginate(500);
        $produks = $query2->paginate(500);
        return Inertia::render('Admin/Riwayat', [
            "transaksis" => TransaksiResource::collection($transaksis),
            "produks" => ProdukResource::collection($produks),
        ]);
    }
}
