import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./Routesh";
import { TopBarProfileComponent } from "./ProfilePic";


export const ProfileDropDown = ({ profile }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const handleOnClick = () => {
    setOpen(!isOpen)
  }

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} >
      <motion.button  whleTap={{ scale: 0.35 }} onClick={handleOnClick}>
        <TopBarProfileComponent profile={profile} />
      </motion.button>
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 shadow-sm shadow-gray-300 fixed right-0 shadow-4xl right-0 rounded-[26px] bg-white top-[3.5rem] p-4 absolute z-50  "
          >
            <div className="flex py-2">
              <div>
                <img className="p-2 rounded-full w-16 h-16" src={profile[0]} alt="ProfilePic" />
              </div>
              <div className="p-2 px-2 ">
                <div className="font-semibold">
                  {profile[1]}
                </div>
                <div className="font-md text-sm">
                  {profile[2]}
                </div>
              </div>

            </div>
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li

                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-[20rem] p-[0.08rem] rounded-xl  "
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className="hover:bg-slate-200 flex  text-center justify-left w-full p-2 rounded-xl  text-black"
                      href={route.href}
                    >
                      {Icon}
                      <span className="flex px-4 gap-1 text-sm font-md">{route.title}</span>

                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
