
export const Heading = ({Title})=>{
    const text = Title.split(" ");

    return <div className="w-full text-2xl xl:text-4xl font-bold text-black">
        {Title}
    </div>
}

