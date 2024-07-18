import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function Kategori({ auth }) {
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
                                    <h2 className="text-2xl font-bold">Daftar kategori Selva House</h2>
                                    <button class="btn btn-success text-white" onClick={openModal}>
                                        Tambah Kategori
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
                                                    <h2 className="text-2xl font-bold">Tambah Kategori Selva House</h2>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                            Nama Kategori
                                                        </label>
                                                        <input
                                                            type="text" id="Nama Produk" className="input input-bordered w-full" placeholder="Nama Kategori..."
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
                                                <th>ID Kategori</th>
                                                <th>Nama Kategori</th>
                                                <th >Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            {/* Produk 1*/}
                                            <tr>
                                                <td>1</td>
                                                <td>Pakaian Dewasa Wanita</td>
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
                                                                    <h2 className="text-2xl font-bold">Edit Kategori Selva House</h2>
                                                                    <div className="mb-4">
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                                                            Nama Kategori
                                                                        </label>
                                                                        <input
                                                                            type="text" id="Nama Produk" className="input input-bordered w-full" value={"Pakaian Dewasa Wanita"}
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
                                                <td>Pakaian Dewasa Pria</td>
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
                                                <td>Pakaian Anak Laki</td>
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
