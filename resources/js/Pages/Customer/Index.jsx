import CustomerLayout from "@/Layouts/CustomerLayout";
import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function DashboardCustomer({ produks, kategoris }) {
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

    const DetailProduk = (dataDetail) => {
        router.get(route("Customer.show", { produk: dataDetail.id_produk }));
    };
    return (
        <CustomerLayout>
            <Head title="Dashboard Customer" />

            <div className="flex flex-wrap items-center w-full">
                <div className="max-w-10xl mx-auto mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                                        <button
                                            className="btn btn-warning w-24"
                                            onClick={() => DetailProduk(produk)}
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <a
                href="https://wa.me/6282391526920?text=Halo+Admin,+saya+ingin+bertanya+mengenai+produk+Selva+House"
                target="_blank"
                class="btn btn-success float-right"
                style={{ borderRadius: '50px' }}
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
