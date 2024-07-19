<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;

    protected $table = 'transaksi';

    public function getRouteKeyName()
    {
        return 'id_transaksi';
    }

    public $timestamps = false;

    protected $fillable = [
        'id_produk',
        'jumlah_produk',
        'total_transaksi',
        'tanggal_transaksi',
    ];

    public function produkBy()
    {
        return $this->belongsTo(Produk::class, 'id_produk', 'id_produk');
    }
}
