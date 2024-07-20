import React, { useState } from "react";
import "../../../css/detailProduk.css";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { Head, Link } from "@inertiajs/react";

export default function DetailProduk({ produkDetail }) {
    return (
        <CustomerLayout>
            <Head title="Detail Produk" />
            <div className="product-container">
                <nav className="breadcrumb">
                    <Link href={route('dashboardcustomer')}>Kembali</Link>
                </nav>
                <div className="product-header">
                    <h1>{produkDetail.data.nama_produk}</h1>
                </div>
                <div className="product-body">
                    <div className="product-images">
                        <img
                            src={produkDetail.data.gambar_produk}
                            alt={produkDetail.data.nama_produk}
                        />
                    </div>
                    <div className="product-details">
                        <div className="product-price">
                            <span>
                                Harga Rp. {produkDetail.data.harga_produk},-
                            </span>
                        </div>
                        <div className="product-variations">
                            <label>Kategori</label>
                            <span>
                                {produkDetail.data.kategoriBy.nama_kategori}
                            </span>
                        </div>
                        <div className="product-sizes">
                            <label>Jumlah Stok</label>
                            <span>{produkDetail.data.jumlah_produk}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
