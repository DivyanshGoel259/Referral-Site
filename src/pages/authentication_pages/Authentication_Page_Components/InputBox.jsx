import {motion} from 'framer-motion'
export const InputBox = ({type,placeholder,onchange})=>{
    return <motion.div whileTap={{ scale: 0.95 }} className="py-1"> 
        <input onChange={onchange} type={type} className="w-full px-5 py-3 rounded-lg font-medium  border  border-gray-300 placeholder-black text-sm focus:outline-none focus:border-blue-500 focus:bg-white  "  placeholder={placeholder}/>
    </motion.div>
}