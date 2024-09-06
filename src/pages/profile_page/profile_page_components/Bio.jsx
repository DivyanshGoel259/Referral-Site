export const Bio = ({ bio }) => {
    return <div className="border border-2  border-slate-600 rounded-[18px]">
        <div className="px-4 pt-3 pb-1 text-xl text-slate-600 flex justify-between">
            <div className="font-semibold">
                Bio
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-10">
                    
                    <path stroke="red" stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    
                    <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    
                    <path stroke="blue" stroke-linecap="round" stroke-linejoin="round" d="M18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>


            </div>
        </div>
        <div className="px-4 pb-4">
            {bio}
        </div>

    </div>
}