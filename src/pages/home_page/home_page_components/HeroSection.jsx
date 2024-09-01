import animationData from './Animation.json';
import Lottie from 'lottie-react';
import AnimatedTitle from './Title';
import { SubTitle } from './SubTitle';

export const HeroSection = () => {
    return (
        <div className='grid grid-cols-10 min-h-screen'>
            <div className='col-span-5 flex flex-col justify-center p-2'>
                <div className='p-1'>
                    <AnimatedTitle Title={"We Connect Talent To Opportunity"} /> 
                </div>
                <div className='px-8'>
                    <SubTitle words={`At Humara Easy Jobs, your skills meet the right platforms. Get referred to leading MNCs and startups while benefiting from our community’s courses and resources. Your journey to a dream job starts here.`} />
                </div>
            </div>
            <div className='col-span-5 flex items-center justify-center'>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full max-w-lg"
                />
            </div>
        </div>
    );
}
