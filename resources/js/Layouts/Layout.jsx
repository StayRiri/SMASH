import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Layout({ user, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Navbar samping */}
            <nav
                className={`bg-orange-400 w-50 h-screen p-4 text-white ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex items-center justify-center h-16 bg-orange-400 text-white">
                    <img
                        src="/LogoSelvaHouse.png"
                        alt="Logo Selva House"
                        className="h-12 w-auto rounded-full"
                    />
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
                    <div className="max-w-10xl mx-auto flex items-center justify-between">
                        <button
                            className="btn btn-square btn-ghost"
                            onClick={toggleNavbar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                            {isOpen ? "" : ""}
                        </button>
                        <h1 className="text-xl font-bold">Selva House</h1>
                    </div>
                </header>

                {/* Konten */}
                <main className="flex-1 bg-gray-100 p-4">{children}</main>

                {/* Footer */}
                <footer className="bg-orange-600 text-white p-6">
                    <div className="max-w-10xl mx-auto">
                        <p>&copy; 2024 Selva House</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
