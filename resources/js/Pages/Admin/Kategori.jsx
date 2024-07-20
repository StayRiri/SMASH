import Layout from "@/Layouts/Layout";
import { Head, useForm, Link, router } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";
import Pagination from "@/Components/Pagination";

export default function Kategori({ auth, kategoris, kategoriEdit, bawaData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const openModalEdit = () => setIsModalEditOpen(true);
    const closeModalEdit = () => setIsModalEditOpen(false);

    useEffect(() => {
        if (bawaData) {
            setIsModalEditOpen(true);
        } else {
            setIsModalEditOpen(false);
        }
    }, [kategoriEdit]);

    const deleteData = (kategoriHapus) => {
        if (!window.confirm("Hapus kategori ini?")) {
            return;
        }
        router.delete(
            route("Kategori.destroy", {
                kategori: kategoriHapus.id_kategori,
            })
        );
    };

    const editData = (dataEdit) => {
        router.get(route("Kategori.edit", { kategori: dataEdit.id_kategori }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("Kategori.store"), {
            onSuccess: () => {
                setIsModalOpen(false);
                setData(["nama_kategori", ""]);
            },
            onError: () => {
                setIsModalOpen(true);
            },
        });
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        post(route("Kategori.update", kategoriEdit.data.id_kategori), {
            onSuccess: () => {
                setIsModalEditOpen(false);
                setData(["nama_kategori", ""]);
            },
            onError: () => {
                setIsModalEditOpen(true);
            },
        });
    };

    const { data, setData, post, errors } = useForm({
        nama_kategori: kategoriEdit ? kategoriEdit.data.nama_kategori : "",
        _method: kategoriEdit ? "PUT" : "POST",
    });

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
                                        Daftar kategori Selva House
                                    </h2>
                                    <button
                                        class="btn btn-success text-white"
                                        onClick={openModal}
                                    >
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
                                                <form onSubmit={onSubmit}>
                                                    <h2 className="text-2xl font-bold">
                                                        Tambah Kategori Selva
                                                        House
                                                    </h2>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="nama_kategori"
                                                            value="Nama Kategori"
                                                        />
                                                        <TextInput
                                                            id="nama_kategori"
                                                            type="text"
                                                            name="nama kategori"
                                                            value={
                                                                data.nama_kategori
                                                            }
                                                            className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "nama_kategori",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Nama Kategori..."
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.nama_kategori
                                                            }
                                                            className="mt-2"
                                                        />
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
                                                <th>ID Kategori</th>
                                                <th>Nama Kategori</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            {kategoris.data.map((kategori) => (
                                                <tr>
                                                    <td>
                                                        {kategori.id_kategori}
                                                    </td>
                                                    <td>
                                                        {kategori.nama_kategori}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-square btn-ghost"
                                                            onClick={() =>
                                                                editData(
                                                                    kategori
                                                                )
                                                            }
                                                        >
                                                            <PencilIcon className="h-6 w-6 text-gray-500" />
                                                        </button>
                                                        {/* Modal untuk Form */}
                                                        {isModalEditOpen && (
                                                            <div className="modal modal-open">
                                                                <div className="modal-box relative">
                                                                    <Link
                                                                        href={route(
                                                                            "Kategori.index"
                                                                        )}
                                                                    >
                                                                        <button
                                                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                                                            onClick={
                                                                                closeModalEdit
                                                                            }
                                                                        >
                                                                            ✕
                                                                        </button>
                                                                    </Link>
                                                                    <form
                                                                        onSubmit={
                                                                            submitUpdate
                                                                        }
                                                                    >
                                                                        <h2 className="text-2xl font-bold">
                                                                            Edit
                                                                            Kategori
                                                                            Selva
                                                                            House
                                                                        </h2>
                                                                        <div className="mb-4">
                                                                            <InputLabel
                                                                                htmlFor="nama_kategori"
                                                                                value="Nama Kategori"
                                                                            />
                                                                            <TextInput
                                                                                id="nama_kategori"
                                                                                type="text"
                                                                                name="nama kategori"
                                                                                value={
                                                                                    data.nama_kategori
                                                                                }
                                                                                className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "nama_kategori",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                placeholder="Nama Kategori..."
                                                                            />
                                                                            <InputError
                                                                                message={
                                                                                    errors.nama_kategori
                                                                                }
                                                                                className="mt-2"
                                                                            />
                                                                        </div>
                                                                        <div className="flex justify-end">
                                                                            <Link
                                                                                href={route(
                                                                                    "Kategori.index"
                                                                                )}
                                                                            >
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-outline mr-2"
                                                                                >
                                                                                    Cancel
                                                                                </button>
                                                                            </Link>
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-success text-white"
                                                                            >
                                                                                Save
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                        <button
                                                            className="btn btn-square btn-ghost"
                                                            onClick={() =>
                                                                deleteData(
                                                                    kategori
                                                                )
                                                            }
                                                        >
                                                            <TrashIcon className="h-6 w-6 text-red-500" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {/* Produk 1*/}
                                        </tbody>
                                    </table>
                                    <Pagination links={kategoris.meta.links} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
