import { motion } from 'framer-motion'
export const SocialHandleBox = ({ title, onCLick }) => {
    return <motion.button onCLick={onCLick} className="flex justify-between bg-[#1E201E] border rounded-[18px] w-full ">
        <div onCLick={onCLick} className="text-white py-3 font-semibold text-md px-4 py-4">
            {title}
        </div>
        <div className='py-4 px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

        </div>
    </motion.button>
}