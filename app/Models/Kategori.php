<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;

    protected $table = 'kategori';

    public function getRouteKeyName()
    {
        return 'id_kategori';
    }

    public $timestamps = false;

    protected $fillable = [
        'nama_kategori',
    ];
}
