import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function CustomerLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className="h-screen"></div>
            {/* Area konten utama */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-orange-600 text-white p-4">
                    <div className="max-w-10xl mx-auto flex items-center justify-between">
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
