import { Bio } from "../profile_page_components/Bio"
import { Name } from "../profile_page_components/Name"
import { ProfilePic } from "../profile_page_components/Profile_pic"
import { ProfileType } from "../profile_page_components/ProfileType"
import { SocialHandleBox } from "../profile_page_components/SocialHandleBox"

export const ProfileCard = () => {
    return (
        
            <div className="backdrop-blur-md h-full w-full border border-2 border-gray-200 rounded-[20px] p-2 ">
                <div className="pt-2 pb-1 flex flex-col justify-center items-center">
                    <ProfilePic ImageUrl={"https://res.cloudinary.com/dchdr0k6p/image/upload/v1722268618/samples/woman-on-a-football-field.jpg"} />
                </div>

                <div className="pb-1 pt-2 text-center">
                    <Name candidateName={"Marry Jonas"} />
                </div>

                <div className="pb-2 pt-1 text-center">
                    <ProfileType type={"Frontend Developer"} />
                </div>

                <div className="p-2 flex flex-col justify-center items-center">
                    <Bio bio={"Passionate Frontend Developer with a keen eye for design and a love for creating intuitive, user-friendly interfaces. Skilled in HTML, CSS, JavaScript, and React, I enjoy turning complex problems into simple, beautiful web experiences."} />
                </div>

                <div className="p-1 flex flex-col justify-center items-center">
                    <SocialHandleBox title={"Github"} />
                </div>

                <div className="p-1 flex flex-col justify-center items-center">
                    <SocialHandleBox title={"Linkedin"} />
                </div>
            </div>
    );
};
