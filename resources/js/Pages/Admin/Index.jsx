import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-screen">
                {/* Navbar samping */}
                <nav className={`bg-orange-400 w-50 h-screen p-4 text-white ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex items-center justify-center h-16 bg-orange-400 text-white">
                        <img src="/LogoSelvaHouse.png" alt="Logo Selva House" className="h-12 w-auto rounded-full" />
                    </div>
                    <ul>
                        <li className="my-4">
                            Dashboard
                            {/* <Link href={route('Admin.index')} className="text-white block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500">
                        Dashboard
                    </Link> */}
                        </li>
                        <li className="my-4">
                            Produk
                            {/* <Link href={route('Produk.index')} className="text-white block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500">
                        Produk
                    </Link> */}
                        </li>
                        <li className="my-4">
                            Kategori
                            {/* <Link href={route('Kategori.index')} className="text-white block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500">
                        Kategori
                    </Link> */}
                        </li>
                        <li className="my-4">
                            Transaksi
                            {/* <Link href={route('Transaksi.index')} className="text-white block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500">
                        Transaksi
                    </Link> */}
                        </li>
                    </ul>
                </nav>

                {/* Area konten utama */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <header className="bg-orange-600 text-white p-4">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                            <button className="btn btn-square btn-ghost" onClick={toggleNavbar}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                {isOpen ? '' : ''}
                            </button>
                            <h1 className="text-xl font-bold">Selva House</h1>
                        </div>

                    </header>

                    {/* Konten */}
                    <main className="flex-1 bg-gray-100 p-4">
                        <div className="flex w-full">
                            <div className="max-w-7xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
                                {/* Card 1 */}
                                <div className="card bg-base-100 w-24 sm:w-28 md:w-36 lg:w-64 shadow-xl">
                                    <figure className="px-8 pt-8">
                                        <img
                                            src="/granada sh.png"
                                            alt="baju"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">GAMIS GRANADA</h2>
                                        <p>by Yasmeera</p>
                                        <div className="card-actions">
                                            <button className="btn btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </div>


                                {/* Card 2 */}
                                <div className="card bg-base-100 w-24 sm:w-28 md:w-36 lg:w-64 shadow-xl">
                                    <figure className="px-8 pt-8">
                                        <img
                                            src="/Granda Koko Anak.png"
                                            alt="baju"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">KOKO ANAK GRANADA</h2>
                                        <p>by Yasmeera</p>
                                        <div className="card-actions">
                                            <button className="btn btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="card bg-base-100 w-24 sm:w-28 md:w-36 lg:w-64 shadow-xl">
                                    <figure className="px-8 pt-8">
                                        <img
                                            src="/Aghnia Dress.png"
                                            alt="baju"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">AGHNIA DRESS</h2>
                                        <p>by Yasmeera</p>
                                        <div className="card-actions">
                                            <button className="btn btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="card bg-base-100 w-24 sm:w-28 md:w-36 lg:w-64 shadow-xl">
                                    <figure className="px-8 pt-8">
                                        <img
                                            src="/Hafna Prayer.png"
                                            alt="baju"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Hafna Prayer Set</h2>
                                        <p>by Yasmeera</p>
                                        <div className="card-actions">
                                            <button className="btn btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </main>

                    {/* Footer */}
                    <footer className="bg-orange-600 text-white p-6">
                        <div className="max-w-7xl mx-auto">
                            <p>&copy; 2024 Selva House</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
