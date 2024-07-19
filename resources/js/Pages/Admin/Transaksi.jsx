import Layout from "@/Layouts/Layout";
import { Head, useForm, Link, router } from "@inertiajs/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";

export default function Transaksi({
    auth,
    transaksis,
    produks,
    transaksiEdit,
    bawaData,
}) {
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
    }, [transaksiEdit]);

    const deleteData = (transaksiHapus) => {
        if (!window.confirm("Hapus transaksi ini?")) {
            return;
        }
        router.delete(
            route("Transaksi.destroy", {
                transaksi: transaksiHapus.id_transaksi,
            })
        );
    };

    const editData = (dataEdit) => {
        router.get(
            route("Transaksi.edit", { transaksi: dataEdit.id_transaksi })
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("Transaksi.store"), {
            onSuccess: () => {
                setIsModalOpen(false);
                setData([
                    "id_produk",
                    "",
                    "jumlah_produk",
                    "",
                    "total_transaksi",
                    "",
                    "tanggal_transaksi",
                    "",
                ]);
            },
            onError: () => {
                setIsModalOpen(true);
            },
        });
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        post(route("Transaksi.update", transaksiEdit.data.id_transaksi), {
            onSuccess: () => {
                setIsModalEditOpen(false);
                setData([
                    "id_produk",
                    "",
                    "jumlah_produk",
                    "",
                    "total_transaksi",
                    "",
                    "tanggal_transaksi",
                    "",
                ]);
            },
            onError: () => {
                setIsModalEditOpen(true);
            },
        });
    };

    const { data, setData, post, errors } = useForm({
        id_transaksi: transaksiEdit ? transaksiEdit.data.id_transaksi : "",
        id_produk: transaksiEdit ? transaksiEdit.data.namaBy.id_produk : "",
        jumlah_produk: transaksiEdit ? transaksiEdit.data.jumlah_produk : "",
        total_transaksi: transaksiEdit
            ? transaksiEdit.data.total_transaksi
            : "",
        tanggal_transaksi: transaksiEdit
            ? transaksiEdit.data.tanggal_transaksi
            : "",
        _method: transaksiEdit ? "PUT" : "POST",
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
                                        Daftar Transaksi Selva House
                                    </h2>
                                    <button
                                        class="btn btn-success text-white"
                                        onClick={openModal}
                                    >
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
                                                <form onSubmit={onSubmit}>
                                                    <h2 className="text-2xl font-bold">
                                                        Tambah Transaksi Selva
                                                        House
                                                    </h2>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="id_produk"
                                                            value="Id Produk"
                                                        />
                                                        <SelectInput
                                                            id="id_produk"
                                                            name="id produk"
                                                            className="select select-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "id_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option value=""></option>
                                                            {produks.data.map(
                                                                (produk) => (
                                                                    <option
                                                                        value={
                                                                            produk.id_produk
                                                                        }
                                                                    >
                                                                        {
                                                                            produk.nama_produk
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </SelectInput>
                                                        <InputError
                                                            message={
                                                                errors.nama_produk
                                                            }
                                                            className="mt-2"
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
                                                            className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "jumlah_produk",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Jumlah Produk..."
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.jumlah_produk
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="total_transaksi"
                                                            value="Total Transaksi"
                                                        />
                                                        <TextInput
                                                            id="total_transaksi"
                                                            type="text"
                                                            name="total transaksi"
                                                            value={
                                                                data.total_transaksi
                                                            }
                                                            className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "total_transaksi",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Total Transaksi..."
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.total_transaksi
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <InputLabel
                                                            htmlFor="tanggal_transaksi"
                                                            value="Tanggal Transaksi"
                                                        />
                                                        <TextInput
                                                            id="tanggal_transaksi"
                                                            type="date"
                                                            name="tanggal transaksi"
                                                            value={
                                                                data.tanggal_transaksi
                                                            }
                                                            className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "tanggal_transaksi",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Tanggal Transaksi..."
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.tanggal_transaksi
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
                                                <th>ID Transaksi</th>
                                                <th>Nama Produk</th>
                                                <th>Jumlah Produk</th>
                                                <th>Harga Produk</th>
                                                <th>Tanggal Transaksi</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            {transaksis.data.map(
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
                                                            {
                                                                transaksi.tanggal_transaksi
                                                            }
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-square btn-ghost"
                                                                onClick={() =>
                                                                    editData(
                                                                        transaksi
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
                                                                                "Transaksi.index"
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
                                                                                Transaksi
                                                                                Selva
                                                                                House
                                                                            </h2>
                                                                            <div className="mb-4">
                                                                                <InputLabel
                                                                                    htmlFor="id_produk"
                                                                                    value="Id Produk"
                                                                                />
                                                                                <SelectInput
                                                                                    id="id_produk"
                                                                                    name="id produk"
                                                                                    className="select select-bordered w-full max-w-xs"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "id_produk",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <option
                                                                                        value={
                                                                                            data.id_produk
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            data.id_produk
                                                                                        }
                                                                                    </option>
                                                                                    {produks.data.map(
                                                                                        (
                                                                                            produk
                                                                                        ) => (
                                                                                            <option
                                                                                                value={
                                                                                                    produk.id_produk
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    produk.nama_produk
                                                                                                }
                                                                                            </option>
                                                                                        )
                                                                                    )}
                                                                                </SelectInput>
                                                                                <InputError
                                                                                    message={
                                                                                        errors.nama_produk
                                                                                    }
                                                                                    className="mt-2"
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
                                                                                    className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "jumlah_produk",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                    placeholder="Jumlah Produk..."
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.jumlah_produk
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                            <div className="mb-4">
                                                                                <InputLabel
                                                                                    htmlFor="total_transaksi"
                                                                                    value="Total Transaksi"
                                                                                />
                                                                                <TextInput
                                                                                    id="total_transaksi"
                                                                                    type="text"
                                                                                    name="total transaksi"
                                                                                    value={
                                                                                        data.total_transaksi
                                                                                    }
                                                                                    className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "total_transaksi",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                    placeholder="Total Transaksi..."
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.total_transaksi
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                            <div className="mb-4">
                                                                                <InputLabel
                                                                                    htmlFor="tanggal_transaksi"
                                                                                    value="Tanggal Transaksi"
                                                                                />
                                                                                <TextInput
                                                                                    id="tanggal_transaksi"
                                                                                    type="date"
                                                                                    name="tanggal transaksi"
                                                                                    value={
                                                                                        data.tanggal_transaksi
                                                                                    }
                                                                                    className="file-input file-input-outline input-bordered w-full max-w-xs"
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        setData(
                                                                                            "tanggal_transaksi",
                                                                                            e
                                                                                                .target
                                                                                                .value
                                                                                        )
                                                                                    }
                                                                                    placeholder="Tanggal Transaksi..."
                                                                                />
                                                                                <InputError
                                                                                    message={
                                                                                        errors.tanggal_transaksi
                                                                                    }
                                                                                    className="mt-2"
                                                                                />
                                                                            </div>
                                                                            <div className="flex justify-end">
                                                                                <Link
                                                                                    href={route(
                                                                                        "Transaksi.index"
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
                                                                        transaksi
                                                                    )
                                                                }
                                                            >
                                                                <TrashIcon className="h-6 w-6 text-red-500" />
                                                            </button>
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
