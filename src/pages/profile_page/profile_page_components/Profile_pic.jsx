export const ProfilePic = ({ImageUrl,altText})=>{
    return <div >
        <img  className=" w-32 h-32 rounded-full border-2 border-white  " src={ImageUrl} alt={altText} />
    </div>
}