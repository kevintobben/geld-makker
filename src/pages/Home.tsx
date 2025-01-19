import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Inkomsten & Uitgaven Tracker</h1>
                <p className="text-gray-600 mt-2">
                    Beheer je financiën op een eenvoudige en efficiënte manier.
                </p>
            </header>

            <div className="flex flex-col space-y-4">
                <Link to="/transactions">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                        Bekijk Transacties
                    </button>
                </Link>
                <Link to="/add">
                    <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
                        Voeg Nieuwe Transactie Toe
                    </button>
                </Link>
                <Link to="/settings">
                    <button className="px-6 py-3 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700">
                        Instellingen
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
