import React, { useState } from "react";
import "../../../css/detailProduk.css";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { Head, Link } from "@inertiajs/react";

export default function DetailProduk({ produkDetail }) {
    const url = new URL("https://wa.me/6282391526920");
    url.searchParams.set(
        "text",
        `Halo Admin, saya ingin bertanya mengenai produk ${produkDetail.data.nama_produk}`
    );

    return (
        <CustomerLayout>
            <Head title="Detail Produk" />
            <div className="product-container">
                <nav className="breadcrumb">
                    <Link href={route("dashboardcustomer")}>Kembali</Link>
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
            <a
                href={url.href}
                target="_blank"
                className="btn btn-success float-right"
                style={{ borderRadius: "50px" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                </svg>
                Hubungi Admin
            </a>
        </CustomerLayout>
    );
}
