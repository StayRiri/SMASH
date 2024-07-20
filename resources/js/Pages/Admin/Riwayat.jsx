import Layout from "@/Layouts/Layout";
import { Head, useForm, Link, router } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";

export default function Riwayat({ auth, transaksis }) {
    const [searchKategori, setSearchKategori] = useState("");

    const handleSearch = (event) => {
        setSearchKategori(event.target.value);
    };

    const filteredTransaksi = transaksis.data.filter((transaksi) => {
        const matchesSearchTerm = transaksi.tanggal_transaksi
            .toLowerCase()
            .includes(searchKategori);
        return matchesSearchTerm;
    });

    return (
        <Layout user={auth.user}>
            <Head title="Riwayat Transaksi" />

            <div className="flex w-full">
                <div className="container mx-auto p-4">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="container mx-auto p-4">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="flex flex-col items-center w-full">
                                            <tr className="text-nowrap">
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3">
                                                    <TextInput
                                                        className="w-full"
                                                        style={{
                                                            width: "500px",
                                                        }} // Menetapkan lebar kotak pencarian lebih panjang
                                                        type="date"
                                                        value={searchKategori}
                                                        placeholder="Tanggal Transaksi"
                                                        onChange={handleSearch}
                                                    />
                                                </th>
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3"></th>
                                                <th className="px-3 py-3"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <table className="table w-full">
                                        <thead>
                                            <tr align="center">
                                                <th>ID Transaksi</th>
                                                <th>Nama Produk</th>
                                                <th>Jumlah Produk</th>
                                                <th>Harga Produk</th>
                                                <th>Total Transaksi</th>
                                                <th>Tanggal Transaksi</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            {filteredTransaksi.map(
                                                (transaksi) => (
                                                    <tr>
                                                        <td>
                                                            {
                                                                transaksi.id_transaksi
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                transaksi.namaBy
                                                                    .nama_produk
                                                            }
                                                        </td>
                                                        <td align="center">
                                                            {
                                                                transaksi.jumlah_produk
                                                            }
                                                        </td>
                                                        <td>
                                                            Rp.{" "}
                                                            {
                                                                transaksi
                                                                    .hargaBy
                                                                    .harga_produk
                                                            }
                                                        </td>
                                                        <td>
                                                            Rp.{" "}
                                                            {
                                                                transaksi.total_transaksi
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                transaksi.tanggal_transaksi
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
