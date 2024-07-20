import { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Dashboard({ auth, produks, kategoris }) {
    const [searchNama, setSearchNama] = useState("");
    const [searchKategori, setSearchKategori] = useState("");

    const handleSearch = (event) => {
        setSearchNama(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSearchKategori(event.target.value);
    };

    const filteredProduks = produks.data.filter((produk) => {
        const matchNama = produk.nama_produk
            .toLowerCase()
            .includes(searchNama.toLowerCase());
        const matchKategori = produk.kategoriBy.nama_kategori
            .toLowerCase()
            .includes(searchKategori.toLowerCase());
        return matchNama && matchKategori;
    });

    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />

            <div className="flex flex-col items-center w-full">
                <div className="w-full max-w-10xl mx-auto mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-w-1xl">
                        <thead className="flex flex-col items-center w-full">
                            <tr className="text-nowrap">
                                <th className="px-3 py-3"></th>
                                <th className="px-3 py-3"></th>
                                <th className="px-3 py-3">
                                    <TextInput
                                        className="w-full"
                                        style={{ width: "500px" }} // Menetapkan lebar kotak pencarian lebih panjang
                                        value={searchNama}
                                        placeholder="Nama Produk"
                                        onChange={handleSearch}
                                    />
                                </th>
                                <th className="px-3 py-3">
                                    <SelectInput
                                        className="w-full"
                                        value={searchKategori}
                                        onChange={handleStatusChange}
                                    >
                                        <option value="">Kategori</option>
                                        {kategoris.data.map((kategori) => (
                                            <option
                                                value={kategori.nama_kategori}
                                            >
                                                {kategori.nama_kategori}
                                            </option>
                                        ))}
                                    </SelectInput>
                                </th>
                                <th className="px-3 py-3"></th>
                                <th className="px-3 py-3"></th>
                                <th className="px-3 py-3"></th>
                                <th className="px-3 py-3"></th>
                            </tr>
                        </thead>
                    </table>
                    <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-4 mt-4">
                        {filteredProduks.map((produk) => (
                            <div
                                className="card bg-base-100 w-60 sm:w-28 md:w-36 lg:w-64 shadow-xl"
                                key={produk.id}
                            >
                                <figure className="flex justify-center items-center mt-5">
                                    <img
                                        src={produk.gambar_produk}
                                        alt={produk.nama_produk}
                                        className="rounded-xl w-32 h-32"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        {produk.nama_produk}
                                    </h2>
                                    <div className="card-actions">
                                        <button className="btn btn-warning w-24">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
