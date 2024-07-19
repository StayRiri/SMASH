<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;

    protected $table = 'produk';

    public function getRouteKeyName()
    {
        return 'id_produk';
    }

    public $timestamps = false;

    protected $fillable = [
        'nama_produk',
        'harga_produk',
        'warna_produk',
        'jumlah_produk',
        'gambar_produk',
        'id_kategori',
        'nama_kategori'
    ];

    public function kategoriBy()
    {
        return $this->belongsTo(Kategori::class, 'id_kategori', 'id_kategori');
    }
}
