import { Stepper } from "@material-tailwind/react"
import { DetailedProfile } from "./profile_page_main_components/DetailedProfile"
import { ProfileCard } from "./profile_page_main_components/ProfileCard"
import { StepperforProfile } from "./profile_page_components/Stepper"
import { TopBar } from "../home_page/home_page_components/main_components/TopBar"

export const Profile = () => {
    const profilePic = "https://res.cloudinary.com/dchdr0k6p/image/upload/v1724865603/Design_triangle_tech_modern_logo_element_tkcam4.png"
    const candidateName="Himanshu"
    const candidateEmail="Himanshu@gmail.com"
    return <div className=" h-screen">
        <div className="">
            <TopBar Profile={[
                profilePic,
                candidateName,
                candidateEmail
            ]}></TopBar>
        </div>
    </div>
}