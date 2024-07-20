import { Link } from "@inertiajs/react";

function LandingIntro() {
    return (
        <div className="hero min-h-full rounded-l-xl bg-orange-500">
            <div className="hero-content py-12">
                <div className="max-w-md" align="center">
                    <h1 className="text-3xl text-center font-bold ">
                        <img
                            src="/LogoSelvaHouse.png"
                            className="w-500 inline-block mr-2 mask rounded-full"
                        />
                    </h1>
                    < Link href={route("dashboardcustomer")}>
                    <button className=" text-2xl font-semibold mb-2 text-white font-bold py-2 px-4 rounded mt-4">
                        Masuk Sebagai Customer...
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingIntro;
