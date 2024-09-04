import {motion} from 'framer-motion'
export const Bio = ({ bio }) => {
    const bounceTransition = {
        y: {
          duration: 0.6,
          yoyo: Infinity, // repeat the animation
          ease: 'easeOut',
        },
      };
    return <div className="border border-2  border-slate-600 rounded-[18px]">
        <div className="px-4 pt-3 pb-3 text-xl text-slate-600 flex justify-between">
            <div>
                Bio
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '80px' }}>

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="red"
                    className="size-10"
                    style={{ width: '24px', height: '24px' }}
                    whileHover={{ y: [-5, 0], transition: bounceTransition }}
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </motion.svg>

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="green"
                    className="size-10"
                    style={{ width: '24px', height: '24px' }}
                    whileHover={{ y: [-10, 0], transition: bounceTransition }}
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </motion.svg>

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="blue"
                    className="size-10"
                    style={{ width: '24px', height: '24px' }}
                    whileHover={{ y: [-15, 0], transition: bounceTransition }}
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </motion.svg>

            </div>
            <div className="px-4 pb-6">
                {bio}
            </div>
        </div>
        </div>
}