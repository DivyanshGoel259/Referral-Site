import { Link } from 'react-router-dom'
export const ForgotPassCompo = ({ buttontext, to }) => {
    return <div className='w-full flex justify-between '>
        <div>
            <div className="p-2 flex items-center">
                <input className="items-center h-4 w-4" type="checkbox" name="terms" value="agree" />
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