import Layout from "@/Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Produk({ auth, produks, kategoris }) {
    const [isModalGambarOpen, setIsModalGambarOpen] = useState(false);

    const openModalGambar = () => setIsModalGambarOpen(true);
    const closeModalGambar = () => setIsModalGambarOpen(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { data, setData, post, errors } = useForm({
        nama_produk: "",
        harga_produk: "",
        warna_produk: "",
        jumlah_produk: "",
        gambar_produk: "",
        id_kategori: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("Produk.store"));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Produk" />

            <div className="flex w-full">
                <div className="container mx-auto p-4">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="container mx-auto p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold">
                                        Daftar Produk Selva House
                                    </h2>
                                    <button
                                        class="btn btn-success text-white"
                                        onClick={openModal}
                                    >
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
                                                <form onSubmit={onSubmit}>
                                                    <h2 className="text-2xl font-bold">
                                                        Tambah Produk Selva
                                                        House
                                                    </h2>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="gambar_produk"
                                                            value="Gambar Produk"
                                                        />
                                                        <TextInput
                                                            id="gambar_produk"
                                                            type="file"
                                                            name="gambar produk"
                                                            className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "gambar_produk",
                                                                    e.target
                                                                        .files[0]
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="nama_produk"
                                                            value="Nama Produk"
                                                        />
                                                        <TextInput
                                                            id="nama_produk"
                                                            type="text"
                                                            name="nama produk"
                                                            value={
                                                                data.nama_produk
                                                            }
                                                            className="input input-bordered w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "nama_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Nama Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="warna_produk"
                                                            value="Warna Produk"
                                                        />
                                                        <TextInput
                                                            id="warna_produk"
                                                            type="text"
                                                            name="warna produk"
                                                            value={
                                                                data.warna_produk
                                                            }
                                                            className="input input-bordered w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "warna_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Warna Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="harga_produk"
                                                            value="Harga Produk"
                                                        />
                                                        <TextInput
                                                            id="harga_produk"
                                                            type="text"
                                                            name="harga produk"
                                                            value={
                                                                data.harga_produk
                                                            }
                                                            className="input input-bordered w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "harga_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Harga Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="jumlah_produk"
                                                            value="Jumlah Produk"
                                                        />
                                                        <TextInput
                                                            id="jumlah_produk"
                                                            type="text"
                                                            name="jumlah produk"
                                                            value={
                                                                data.jumlah_produk
                                                            }
                                                            className="input input-bordered w-full"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "jumlah_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Jumlah Produk..."
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="kategori_produk"
                                                            value="Kategori Produk"
                                                        />
                                                        <SelectInput
                                                            id="id_kategori"
                                                            name="kategori"
                                                            className="select select-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "id_kategori",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option value=""></option>
                                                            {kategoris.data.map(
                                                                (kategori) => (
                                                                    <option
                                                                        value={
                                                                            kategori.id_kategori
                                                                        }
                                                                    >
                                                                        {
                                                                            kategori.nama_kategori
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </SelectInput>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline mr-2"
                                                            onClick={closeModal}
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success text-white"
                                                            onClick={closeModal}
                                                        >
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
                                                <th>Warna</th>
                                                <th>Harga</th>
                                                <th>Jumlah</th>
                                                <th>Kategori</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {produks.data.map((produk) => (
                                                <tr align="center">
                                                    <td>{produk.id_produk}</td>
                                                    <td className="flex items-center justify-center space-x-3">
                                                        <div
                                                            className="avatar"
                                                            onClick={
                                                                openModalGambar
                                                            }
                                                        >
                                                            <div className="w-10 rounded cursor-pointer">
                                                                <img
                                                                    src={
                                                                        produk.gambar_produk
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Modal untuk Gambar Besar */}
                                                        {isModalGambarOpen && (
                                                            <div className="modal modal-open">
                                                                <div className="modal-box relative">
                                                                    <button
                                                                        className="btn btn-sm btn-circle absolute right-2 top-2"
                                                                        onClick={
                                                                            closeModalGambar
                                                                        }
                                                                    >
                                                                        ✕
                                                                    </button>
                                                                    <img
                                                                        src={
                                                                            produk.gambar_produk
                                                                        }
                                                                        className="rounded-box w-full"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {produk.nama_produk}
                                                    </td>
                                                    <td>
                                                        {produk.warna_produk}
                                                    </td>
                                                    <td>
                                                        Rp.{" "}
                                                        {produk.harga_produk}
                                                    </td>
                                                    <td align="center">
                                                        {produk.jumlah_produk}
                                                    </td>
                                                    <td>
                                                        {
                                                            produk.kategoriBy
                                                                .nama_kategori
                                                        }
                                                    </td>
                                                    <td align="center">
                                                        <button className="btn btn-square btn-ghost">
                                                            <PencilIcon className="h-6 w-6 text-gray-500" />
                                                        </button>
                                                        <button className="btn btn-square btn-ghost">
                                                            <TrashIcon className="h-6 w-6 text-red-500" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
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
