<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Http\Requests\StoreProdukRequest;
use App\Http\Requests\UpdateProdukRequest;
use App\Http\Resources\KategoriResource;
use App\Http\Resources\ProdukResource;
use App\Models\Kategori;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use function Psy\debug;

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
            "bawaData" => false,
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
        $lastId = Produk::latest('id_produk')->value('id_produk');
        $lastId += 1;
        if ($image) {
            $data['gambar_produk'] = $image->storeAs('Produk/' . $lastId, $lastId, 'public');
        }
        Produk::create($data);

        return to_route('Produk.index');
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
    public function edit($produkEdit)
    {
        $query = Produk::query();
        $query2 = Kategori::query();
        $kategoris = $query2->paginate(10);
        $produks = $query->paginate(10);
        $dataEdit = Produk::where('id_produk', $produkEdit)->first();
        return Inertia::render('Admin/Produk', [
            "produks" => ProdukResource::collection($produks),
            "kategoris" => KategoriResource::collection($kategoris),
            "produkEdit" => new ProdukResource($dataEdit),
            "bawaData" => true,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProdukRequest $request, Produk $produk)
    {
        $data = $request->validated();
        $data['id_produk'] = $produk->id_produk;
        $image = $data['gambar_produk'] ?? null;
        // dd($data);
        if ($image) {
            if ($produk->gambar_produk) {
                Storage::disk('public')->delete($produk->gambar_produk);
            }
            $data['gambar_produk'] = $image->storeAs('Produk/' . $data['id_produk'], $data['id_produk'], 'public');
        } else {
            $data['gambar_produk'] = $produk->gambar_produk;
        }
        $produk->where('id_produk', $produk->id_produk)->update($data);

        //BALIK
        return to_route('Produk.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produk $produk)
    {
        $nama = $produk->nama_produk;
        Storage::disk('public')->delete($produk->gambar_produk);
        $produk->where('id_produk', $produk->id_produk)->delete();
        return to_route('Produk.index')
            ->with('success', "Produk \"$nama\" berhasil dihapus");
    }
}
