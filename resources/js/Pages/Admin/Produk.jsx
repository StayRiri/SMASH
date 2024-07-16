import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function Produk({ auth }) {
    const [isModalGambarOpen, setIsModalGambarOpen] = useState(false);

    const openModalGambar = () => setIsModalGambarOpen(true);
    const closeModalGambar = () => setIsModalGambarOpen(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



    return (
        <Layout user={auth.user}>
            <Head title="Produk" />

            <div className="flex w-full">
                <div className="container mx-auto p-4">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="container mx-auto p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">Daftar Produk Selva House</h2>
                                    <button class="btn btn-success text-white" onClick={openModal}>
                                        Tambah Produk
                                    </button>
                                    {/* Modal untuk Form */}
                                    {isModalOpen && (
                                        <div className="modal modal-open">
                                            <div className="modal-box relative">
                                                <button
                                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                                    onClick={closeModal}
                                                >
                                                    ✕
                                                </button>
                                                <form>
                                                    <h2 className="text-2xl font-bold">Tambah Produk Selva House</h2>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                                            Gambar
                                                        </label>
                                                        <input type="file" className="file-input file-input-outline input-bordered w-full max-w-xs" />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Nama Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Nama Produk" className="input input-bordered w-full" placeholder="Nama Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Jenis Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Jenis Produk" className="input input-bordered w-full" placeholder="Jenis Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Warna Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Warna Produk" className="input input-bordered w-full" placeholder="Warna Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Harga Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Nama Produk" className="input input-bordered w-full" placeholder="Harga Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Jumlah Produk
                                                        </label>
                                                        <input
                                                            type="number" id="Nama Produk" className="input input-bordered w-full" placeholder="Jumlah Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Kategori Produk
                                                        </label>
                                                        <select className="select select-bordered w-full max-w-xs">
                                                            <option disabled selected>Pilih</option>
                                                            <option>Pakaian Dewasa Wanita</option>
                                                            <option>Pakaian Dewasa Laki</option>
                                                            <option>Pakaian Anak Laki</option>
                                                            <option>Mukena Dewasa</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <button type="button" className="btn btn-outline mr-2" onClick={closeModal}>
                                                            Cancel
                                                        </button>
                                                        <button type="submit" className="btn btn-success text-white">
                                                            Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}


                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table w-full">
                                        <thead>
                                            <tr align="center">
                                                <th>ID</th>
                                                <th>Gambar</th>
                                                <th>Nama</th>
                                                <th>Jenis</th>
                                                <th>Warna</th>
                                                <th>Harga</th>
                                                <th>Jumlah</th>
                                                <th>Kategori</th>
                                                <th >Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Produk 1*/}
                                            <tr>
                                                <td>1</td>
                                                <td className="flex items-center space-x-3">
                                                    <div className="avatar" onClick={openModalGambar}>
                                                        <div className="w-10 rounded cursor-pointer">
                                                            <img src="/granada sh.png" alt="granada" />
                                                        </div>
                                                    </div>
                                                    {/* Modal untuk Gambar Besar */}
                                                    {isModalGambarOpen && (
                                                        <div className="modal modal-open">
                                                            <div className="modal-box relative">
                                                                <button
                                                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                                                    onClick={closeModalGambar}
                                                                >
                                                                    ✕
                                                                </button>
                                                                <img
                                                                    src="/granada sh.png"
                                                                    alt="granada"
                                                                    className="rounded-box w-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                                <td>Gamis Granada Sarimbit Series</td>
                                                <td>Yasmeera X El-Rasheed</td>
                                                <td>Dark Green</td>
                                                <td>Rp. 319.000</td>
                                                <td align="center">5</td>
                                                <td>Pakaian Dewasa Wanita</td>
                                                <td align="center">
                                                    <button className="btn btn-square btn-ghost">
                                                        <PencilIcon className="h-6 w-6 text-gray-500" />
                                                    </button>
                                                    <button className="btn btn-square btn-ghost">
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Produk 2*/}
                                            <tr>
                                                <td>2</td>
                                                <td className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="w-10 rounded cursor-pointer">
                                                            <img src="/Granda Koko Anak.png" alt="granada" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Kemeja Lengan Pendek Granada</td>
                                                <td>Yasmeera X El-Rasheed</td>
                                                <td>Navy Blazer</td>
                                                <td>Rp. 209.000</td>
                                                <td align="center">9</td>
                                                <td>Pakaian Anak Laki</td>
                                                <td align="center">
                                                    <button className="btn btn-square btn-ghost">
                                                        <PencilIcon className="h-6 w-6 text-gray-500" />
                                                    </button>
                                                    <button className="btn btn-square btn-ghost">
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Produk 3*/}
                                            <tr>
                                                <td>3</td>
                                                <td className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="w-10 rounded cursor-pointer">
                                                            <img src="/Hafna Prayer.png" alt="granada" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Hafna Prayer Set</td>
                                                <td>Yasmeera</td>
                                                <td>Shadow Green</td>
                                                <td>Rp. 269.000</td>
                                                <td align="center">2</td>
                                                <td>Mukena Dewasa</td>
                                                <td>
                                                    <button className="btn btn-square btn-ghost">
                                                        <PencilIcon className="h-6 w-6 text-gray-500" />
                                                    </button>
                                                    <button className="btn btn-square btn-ghost">
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Produk 4*/}
                                            <tr>
                                                <td>4</td>
                                                <td className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="w-10 rounded cursor-pointer">
                                                            <img src="/Aghnia Dress.png" alt="granada" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Aghnia Dress</td>
                                                <td>Yasmeera</td>
                                                <td>Purple Dove</td>
                                                <td>Rp. 249.000</td>
                                                <td align="center">8</td>
                                                <td>Pakaian Wanita Dewasa</td>
                                                <td>
                                                    <button className="btn btn-square btn-ghost">
                                                        <PencilIcon className="h-6 w-6 text-gray-500" />
                                                    </button>
                                                    <button className="btn btn-square btn-ghost">
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
