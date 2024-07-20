import { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Dashboard({ auth, produks }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const filteredProduks = produks.data.filter((produk) => {
        const matchesSearchTerm = produk.nama_produk.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatusFilter = statusFilter ? produk.status.toLowerCase() === statusFilter.toLowerCase() : true;
        return matchesSearchTerm && matchesStatusFilter;
    });

    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />

            <div className="flex flex-col items-center w-full">
                <div className="w-full max-w-10xl mx-auto mt-4">
                    <div className="dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="flex flex-col items-center w-full">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                style={{ width: '500px' }} // Menetapkan lebar kotak pencarian lebih panjang
                                                value={searchTerm}
                                                placeholder="Nama Produk"
                                                onChange={handleSearch}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput
                                                className="w-full"
                                                value={statusFilter}
                                                onChange={handleStatusChange}
                                            >
                                                <option value="">Kategori</option>
                                                <option value="pending">Pakaian</option>
                                                <option value="in_progress">Celana</option>
                                                
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 mt-4">
                            {filteredProduks.map((produk) => (
                                <div className="card bg-base-100 w-60 sm:w-28 md:w-36 lg:w-64 shadow-xl" key={produk.id}>
                                    <figure className="px-5 pt-2 w-32 h-32">
                                        <img
                                            src={produk.gambar_produk}
                                            alt={produk.nama_produk}
                                            className="rounded-xl"
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
            </div>
        </Layout>
    );
}
