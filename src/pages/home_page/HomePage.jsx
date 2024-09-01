import { HeroSection } from "./home_page_components/HeroSection";
import { TopBar } from "./home_page_components/TopBar";

export const HomePage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="px-4">
                <TopBar />
            </div>
            <div className="flex flex-col justify-center items-center min-h-[calc(90vh-4rem)]"> {/* Adjust the height to account for the TopBar */}
                <HeroSection />
            </div>
        </div>
    );
};
