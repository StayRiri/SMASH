import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, produks }) {
    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />

            <div className="flex w-full">
                <div className="max-w-10xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4">
                    {produks.data.map((produk) => (
                        <div className="card bg-base-100 w-60 sm:w-28 md:w-36 lg:w-64 shadow-xl">
                            <figure className="px-5 pt-2 w-32 h-32">
                                <img
                                    src={produk.gambar_produk}
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
        </Layout>
    );
}
