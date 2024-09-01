import {Link} from 'react-router-dom'
export const WarningButton=({label,to,buttontext})=>{

    return <div className="pt-4 py-2 text-sm flex justify-center text-white">
        <div>
        {label}
        </div>
        <Link className=" text-white pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
    </div>
}