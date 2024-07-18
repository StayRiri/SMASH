<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProdukRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_produk' => ['required', 'max:255'],
            'harga_produk' => ['required', 'Integer'],
            'warna_produk' => ['required', 'string'],
            'jumlah_produk' => ['required', 'Integer'],
            'gambar_produk' => ['required', 'image'],
            'id_kategori' => ['required', Rule::in([
                '1', '2', '3', '4'
            ])]
        ];
    }
}
