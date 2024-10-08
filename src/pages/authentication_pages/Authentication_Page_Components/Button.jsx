import {motion} from 'framer-motion'
export const  Button = ({Label, onClick})=>{
    return <div className="pt-4">
        <motion.button onClick={onClick} whileTap={{ scale: 0.85 }} className="p-2 w-full  text-white bg-[#1E201E]    rounded-[10px]">
            {Label}
        </motion.button>
    </div>
}