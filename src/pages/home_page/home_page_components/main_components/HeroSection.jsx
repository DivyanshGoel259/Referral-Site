import animationData from '../messed_components/Animation.json';
import Lottie from 'lottie-react';
import AnimatedTitle from '../messed_components/Title';
import { SubTitle } from '../messed_components/SubTitle';
import { Button } from '../messed_components/Button';
import { useNavigate } from 'react-router-dom';
import '../../../../App.css';

export const HeroSection = () => {
    const navigation = useNavigate();
    const handleOnclick = () => {
        navigation("/signup");
    };

    return (
        <div className="flex flex-col lg:flex-row items-center md:items-stretch">
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start p-2">
                <div className="px-8 py-4 text-center lg:text-left">
                    <AnimatedTitle title={"We Connect Talent to Opportunities"} />
                </div>
                <div className="hidden md:block px-8 py-4 text-center lg:text-left">
                    <SubTitle words={`At Easy Jobs, your skills meet the right platform. Get referred to leading MNCs and startups while benefiting from our community’s courses and resources. Your journey to your dream job starts here.`} />
                </div>
                <div className="hidden lg:flex py-6 px-8 md:px-8 md:py-0 md:mt-4 md:text-left">
                    <Button Label={"Get Started"} onTap={handleOnclick} />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full max-w-sm md:max-w-lg"
                />
            </div>
            <div className="lg:hidden flex flex-col items-center pt-10 px-8 text-center">
                <Button Label={"Get Started"} onTap={handleOnclick} />
            </div>

        </div>
    );
};
