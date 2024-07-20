import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Layout({ user, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="min-h-screen flex">
            <nav
                className={`bg-orange-400 w-50 p-4 text-white ${
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
                    <NavLink
                        className="my-4"
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </NavLink>
                    <br />
                    <NavLink
                        className="my-4"
                        href={route("Produk.index")}
                        active={route().current("Produk.index")}
                    >
                        Produk
                    </NavLink>
                    <br />
                    <NavLink
                        className="my-4"
                        href={route("Kategori.index")}
                        active={route().current("Kategori.index")}
                    >
                        Kategori
                    </NavLink>
                    <br />
                    <NavLink
                        className="my-4"
                        href={route("Transaksi.index")}
                        active={route().current("Transaksi.index")}
                    >
                        Transaksi
                    </NavLink>
                    <br />
                    <NavLink
                        className="my-4"
                        href={route("Riwayat.index")}
                        active={route().current("Riwayat.index")}
                    >
                        Riwayat Transaksi
                    </NavLink>
                    <br />
                    <NavLink
                        className="my-4"
                        href={route("logout")}
                        method="post"
                    >
                        Log Out
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
