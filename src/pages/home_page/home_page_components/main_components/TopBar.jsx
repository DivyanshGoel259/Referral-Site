import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavMobile } from "../messed_components/NavBarMobile";
import { useState } from "react";
export const TopBar = () => {
    const [navbarClicked, setMenuBarClick] = useState(false)
    const navigation = useNavigate()
    const text = "Easy Jobs".split(" ");
    const handleClick = () => {
        setMenuBarClick(!navbarClicked)
    }
    return <div>

        <div className="flex justify-between ">
            <div className={`text-2xl md:text-3xl py-4 px-4 font-bold text-white transition-all duration-300 ease-in-out `}
            >
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
                <div className="md:flex justify-between p-2 hidden md:block ">
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
                    <motion.button onClick={() => {
                        navigation("/signin")
                    }} whileTap={{ scale: 0.85 }} className="hidden md:block px-8 py-2  bg-[#1E201E] w-full text-white rounded-[20px] ">
                        Log in
                    </motion.button>

                </div>
                <div className="p-4 md:hidden px-2 py-1   w-full ">
                    <button onClick={handleClick}>
                        <NavMobile />
                    </button>

                </div>
            </div>

        </div>
    </div>
}