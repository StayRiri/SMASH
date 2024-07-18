<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Http\Requests\StoreProdukRequest;
use App\Http\Requests\UpdateProdukRequest;
use App\Http\Resources\KategoriResource;
use App\Http\Resources\ProdukResource;
use App\Models\Kategori;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Produk::query();
        $query2 = Kategori::query();
        $kategoris = $query2->paginate(10);
        $produks = $query->paginate(10);
        return Inertia::render('Admin/Produk', [
            "produks" => ProdukResource::collection($produks),
            "kategoris" => KategoriResource::collection($kategoris),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProdukRequest $request)
    {
        $data = $request->validated();
        $image = $data['gambar_produk'] ?? null;
        if ($image) {
            $data['gambar_produk'] = $image->store('Produk/' . Str::random(), 'public');
        }
        Produk::create($data);

        return to_route('Produk.index')
            ->with('success', 'Project was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produk $produk)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produk $produk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProdukRequest $request, Produk $produk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produk $produk)
    {
        //
    }
}
