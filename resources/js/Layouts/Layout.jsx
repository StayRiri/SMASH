import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Layout({ user, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className="h-screen"></div>
            {/* Navbar samping */}
            <nav
                className={`bg-orange-400 w-50 p-4 text-white ${isOpen ? "block" : "hidden"
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
                    <NavLink className="my-4"
                        href={route('dashboard')}
                        active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                    <br />
                    <NavLink className="my-4"
                        href={route('produk')}
                        active={route().current('produk')}>
                        Produk
                    </NavLink>
                    <br />
                    <NavLink className="my-4"
                        href={route('kategori')}
                        active={route().current('kategori')}>
                        Kategori
                    </NavLink>
                    <br />
                    <NavLink className="my-4"
                        href={route('transaksi')}
                        active={route().current('transaksi')}>
                        Transaksi
                    </NavLink>
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
