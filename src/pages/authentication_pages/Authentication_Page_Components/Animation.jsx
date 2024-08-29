import Lottie from 'lottie-react'
import animationData from './Animation - 1724945148840.json'
import {motion} from 'framer-motion'
export const Animation = () => {
    const text = "Easy Jobs".split(" ");

    return <div>
        <div className='text-6xl text-center font-bold text-blue-500'>
        {text.map((el, i) => (
            
            <motion.span
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    delay: i / 10,
                }}
                key={i}
            >
                {el}{" "}
            </motion.span>
        ))}
        </div>

        <div>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    </div>
}