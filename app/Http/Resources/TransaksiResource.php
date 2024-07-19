<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransaksiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_transaksi' => $this->id_transaksi,
            'namaBy' => new ProdukResource($this->produkBy),
            'jumlah_produk' => $this->jumlah_produk,
            'hargaBy' => new ProdukResource($this->produkBy),
            'total_transaksi' => $this->total_transaksi,
            'tanggal_transaksi' => $this->tanggal_transaksi,
        ];
    }
}
