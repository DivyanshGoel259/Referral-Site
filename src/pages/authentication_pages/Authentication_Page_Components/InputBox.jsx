export const InputBox = ({type,placeholder})=>{
    return <div  className="py-1"> 
        <input type={type} className="w-full px-5 py-3 rounded-lg font-medium  border  border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white  "  placeholder={placeholder}/>
    </div>
}