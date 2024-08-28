export const  Button = ({Label, onClick})=>{
    return <div className="pt-4">
        <button className="p-2 w-full bg-blue-700 text-white border rounded-[10px]">
            {Label}
        </button>
    </div>
}