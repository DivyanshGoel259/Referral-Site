import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { Checkbox } from "@material-tailwind/react"
export const ForgotPassCompo = ({ buttontext, to }) => {
    return <div className='w-full flex justify-between '>
        <div>
            <div  className="p-2 flex items-center">
                <motion.input whileTap={{ scale: 0.85 }} className="items-center h-4 w-4" type="checkbox" name="terms" value="agree" />
                <div className="ml-2">
                    Remember me
                </div>
            </div>

        </div>

        <div className='p-2 text-blue-500'>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
        </div>

    </div>
}