import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function Transaksi({ auth }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const openModalEdit = () => setIsModalEditOpen(true);
    const closeModalEdit = () => setIsModalEditOpen(false);



    return (
        <Layout user={auth.user}>
            <Head title="Produk" />

            <div className="flex w-full">
                <div className="container mx-auto p-4">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="container mx-auto p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">Daftar Transaksi Selva House</h2>
                                    <button class="btn btn-success text-white" onClick={openModal}>
                                        Tambah Transaksi
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
                                                    <h2 className="text-2xl font-bold">Tambah Transaksi Selva House</h2>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            ID Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Nama Produk" className="input input-bordered w-full" placeholder="ID Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            ID Kategori
                                                        </label>
                                                        <input
                                                            type="text" id="Jenis Produk" className="input input-bordered w-full" placeholder="ID Kategori..."
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
                                                            Harga Produk
                                                        </label>
                                                        <input
                                                            type="text" id="Nama Produk" className="input input-bordered w-full" placeholder="Harga Produk..."
                                                        />
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
                                                <th>ID Transaksi</th>
                                                <th>ID Produk</th>
                                                <th>ID Kategori</th>
                                                <th>Jumlah Produk</th>
                                                <th>Harga Produk</th>
                                                <th>Tanggal Transaksi</th>
                                                <th >Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            {/* Produk 1*/}
                                            <tr>
                                                <td>1</td>
                                                <td>4</td>
                                                <td>2</td>
                                                <td align="center">5</td>
                                                <td>Rp. 319.000</td>
                                                <td>08/07/2024</td>
                                                <td>
                                                    <button className="btn btn-square btn-ghost" onClick={openModalEdit}>
                                                        <PencilIcon className="h-6 w-6 text-gray-500" />
                                                    </button>
                                                    {/* Modal untuk Form */}
                                                    {isModalEditOpen && (
                                                        <div className="modal modal-open">
                                                            <div className="modal-box relative">
                                                                <button
                                                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                                                    onClick={closeModalEdit}
                                                                >
                                                                    ✕
                                                                </button>
                                                                <form align="left">
                                                                    <h2 className="text-2xl font-bold">Edit Transaksi Selva House</h2>
                                                                    <div className="mb-4">
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                                            ID Produk
                                                                        </label>
                                                                        <input
                                                                            type="text" id="Nama Produk" className="input input-bordered w-full" value="4"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                                            ID Kategori
                                                                        </label>
                                                                        <input
                                                                            type="text" id="Jenis Produk" className="input input-bordered w-full" value="2"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                                            Jumlah Produk
                                                                        </label>
                                                                        <input
                                                                            type="number" id="Nama Produk" className="input input-bordered w-full" value="5"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                                            Harga Produk
                                                                        </label>
                                                                        <input
                                                                            type="text" id="Nama Produk" className="input input-bordered w-full" value="Rp. 319.000"
                                                                        />
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <button type="button" className="btn btn-outline mr-2" onClick={closeModalEdit}>
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
                                                    <button className="btn btn-square btn-ghost">
                                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Produk 2*/}
                                            <tr>
                                                <td>2</td>
                                                <td>4</td>
                                                <td>2</td>
                                                <td align="center">5</td>
                                                <td>Rp. 319.000</td>
                                                <td>08/07/2024</td>
                                                <td>
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
                                                <td>4</td>
                                                <td>2</td>
                                                <td align="center">5</td>
                                                <td>Rp. 319.000</td>
                                                <td>08/07/2024</td>
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
                                                <td>4</td>
                                                <td>2</td>
                                                <td align="center">5</td>
                                                <td>Rp. 319.000</td>
                                                <td>08/07/2024</td>
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
