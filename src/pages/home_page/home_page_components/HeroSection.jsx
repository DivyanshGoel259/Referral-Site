import animationData from './Animation.json';
import Lottie from 'lottie-react';
import AnimatedTitle from './Title';
import { SubTitle } from './SubTitle';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

export const HeroSection = () => {
    const navigation = useNavigate();
    const handleOnclick = () => {
        navigation("/signup");
    };

    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="flex-1 flex flex-col justify-center p-2">
                <div className="px-8 py-4">
                    <AnimatedTitle title={"We Connect Talent to Opportunity"} />
                </div>
                <div className="px-8 py-4">
                    <SubTitle words={`At Easy Jobs, your skills meet the right platforms. Get referred to leading MNCs and startups while benefiting from our community’s courses and resources. Your journey to a dream job starts here.`} />
                </div>
                <div className="py-6 px-8">
                    <Button Label={"Get Started"} onTap={handleOnclick} />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full max-w-lg fixed-size-animation"
                />
            </div>
        </div>
    );
};
