<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProdukResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_produk' => $this->id_produk,
            'nama_produk' => $this->nama_produk,
            'harga_produk' => $this->harga_produk,
            'warna_produk' => $this->warna_produk,
            'jumlah_produk' => $this->jumlah_produk,
            'gambar_produk' => $this->gambar_produk && !(str_starts_with($this->gambar_produk, 'http')) ?
                Storage::url($this->gambar_produk) : $this->gambar_produk,
            'kategoriBy'  => new KategoriResource($this->kategoriBy),
        ];
    }
}
