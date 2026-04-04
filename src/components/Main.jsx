import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./Preloader";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const originalTitle = document.title;
        document.title = "Loading Portfolio...";

        // Fixed 4-second timeout to match the Preloader simulation
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.title = originalTitle;
        }, 4500); // 4.5s total to ensure the fade-out completes before navbar is interactive

        return () => {
            document.title = originalTitle;
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="bg-primaryBg min-h-screen font-outfit">
            <Preloader />
            <Navbar />
            <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;