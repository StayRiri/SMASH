import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <Layout user={auth.user}>
            <Head title="Dashboard" />

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
                                <button className="btn btn-warning">
                                    Buy Now
                                </button>
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
                                <button className="btn btn-warning">
                                    Buy Now
                                </button>
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
                                <button className="btn btn-warning">
                                    Buy Now
                                </button>
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
                                <button className="btn btn-warning">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
