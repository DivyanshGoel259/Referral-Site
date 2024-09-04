export const ProfilePic = ({ImageUrl,altText})=>{
    return <div >
        <img  className="rounded-full w-full border-2 border-white  " src={ImageUrl} alt={altText} />
    </div>
}