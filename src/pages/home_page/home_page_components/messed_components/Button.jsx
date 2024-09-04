import { motion } from 'framer-motion'
export const Button = ({ Label, onTap }) => {
    return <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="flex flex-col md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-4"
  >
    <button onClick={onTap} className="animate-bounce  hover:animate-none focus:animate-none bg-[#1E201E] text-white px-8 py-2 rounded-full hover:bg-[#021526] transition-colors text-lg font-semibold shadow-lg hover:shadow-xl  md:w-auto">
      {Label}
    </button>
  </motion.div>
}