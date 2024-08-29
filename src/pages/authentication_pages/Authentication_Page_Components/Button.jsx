import {motion} from 'framer-motion'
export const  Button = ({Label, onClick})=>{
    return <div className="pt-4">
        <motion.button whileTap={{ scale: 0.85 }} className="p-2 w-full bg-blue-700 text-white border rounded-[10px]">
            {Label}
        </motion.button>
    </div>
}