import Lottie from 'lottie-react'
import animationData from './Animation - 1724945148840.json'
import {motion} from 'framer-motion'
export const Animation = () => {

    return <div>
        

        <div>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    </div>
}