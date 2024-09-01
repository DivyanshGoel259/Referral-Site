import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const TopBar = () => {
    const navigation = useNavigate()
    const text = "Easy Jobs".split(" ");
    return <div>

        <div className="flex justify-between">
            <div className='text-3xl p-2 font-bold text-white'>
                {text.map((el, i) => (

                    <motion.span

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.35,
                            delay: i / 10,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-between ">
                <div className="flex justify-between p-2">
                    <div className="p-2">
                        <button
                            className=" relative group p-2 w-full text-white font-medium transition-all duration-300 ease-in-out "
                        >
                            <span className="relative inline-block transition-all duration-300 ease-in-out ">
                                Blogs
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </span>
                        </button>
                    </div>
                    <div className="p-2">
                        <button
                            className=" relative group p-2 w-full text-white font-medium transition-all duration-300 ease-in-out "
                        >
                            <span className="relative inline-block transition-all duration-300 ease-in-out ">
                                About us
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </span>
                        </button>
                    </div>
                    <div className="p-2">
                        <button
                            className=" relative group p-2 w-full text-white font-medium transition-all duration-300 ease-in-out"
                        >
                            <span className="relative inline-block transition-all duration-300 ease-in-out ">
                                Courses
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </span>
                        </button>
                    </div>

                </div>
                <div className="p-4">
                    <motion.button onClick={()=>{
                        navigation("/signin")
                    }} whileTap={{ scale: 0.85 }} className="px-8 py-2  bg-[#1E201E] w-full text-white rounded-[20px] ">
                        Log in
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
}