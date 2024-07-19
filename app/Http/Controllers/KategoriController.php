<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Http\Requests\StoreKategoriRequest;
use App\Http\Requests\UpdateKategoriRequest;
use App\Http\Resources\KategoriResource;
use Inertia\Inertia;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Kategori::query();
        $kategoris = $query->paginate(10);
        return Inertia::render('Admin/Kategori', [
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
    public function store(StoreKategoriRequest $request)
    {
        $data = $request->validated();
        Kategori::create($data);
        return to_route('Kategori.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($kategoriEdit)
    {
        $query = Kategori::query();
        $kategoris = $query->paginate(10);
        $dataEdit = Kategori::where('id_kategori', $kategoriEdit)->first();
        return Inertia::render('Admin/Kategori', [
            "kategoris" => KategoriResource::collection($kategoris),
            "kategoriEdit" => new KategoriResource($dataEdit),
            "bawaData" => true,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKategoriRequest $request, Kategori $kategori)
    {
        $data = $request->validated();
        $data['id_kategori'] = $kategori->id_kategori;
        $kategori->where('id_kategori', $kategori->id_kategori)->update($data);
        return to_route('Kategori.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kategori $kategori)
    {
        $kategori->where('id_kategori', $kategori->id_kategori)->delete();
        return to_route('Kategori.index')
            ->with('success', "Kategori berhasil dihapus");
    }
}
