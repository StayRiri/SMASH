<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use App\Models\Produk;
use App\Http\Requests\StoreTransaksiRequest;
use App\Http\Requests\UpdateTransaksiRequest;
use App\Http\Resources\ProdukResource;
use App\Http\Resources\TransaksiResource;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Transaksi::query();
        $query2 = Produk::query();
        $transaksis = $query->paginate(10);
        $produks = $query2->paginate(10);
        return Inertia::render('Admin/Transaksi', [
            "transaksis" => TransaksiResource::collection($transaksis),
            "produks" => ProdukResource::collection($produks),
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
    public function store(StoreTransaksiRequest $request)
    {
        $data = $request->validated();
        Transaksi::create($data);
        return to_route('Transaksi.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaksi $transaksi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($transaksiEdit)
    {
        $query = Transaksi::query();
        $query2 = Produk::query();
        $transaksis = $query->paginate(10);
        $produks = $query2->paginate(10);
        $dataEdit = Transaksi::where('id_transaksi', $transaksiEdit)->first();
        return Inertia::render('Admin/Transaksi', [
            "transaksis" => TransaksiResource::collection($transaksis),
            "produks" => ProdukResource::collection($produks),
            "transaksiEdit" => new TransaksiResource($dataEdit),
            "bawaData" => true,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransaksiRequest $request, Transaksi $transaksi)
    {
        $data = $request->validated();
        $data['id_transaksi'] = $transaksi->id_transaksi;
        $transaksi->where('id_transaksi', $transaksi->id_transaksi)->update($data);
        return to_route('Transaksi.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaksi $transaksi)
    {
        $transaksi->where('id_transaksi', $transaksi->id_transaksi)->delete();
        return to_route('Transaksi.index')
            ->with('success', "Transaksi berhasil dihapus");
    }
}
