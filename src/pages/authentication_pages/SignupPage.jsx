import { AuthbuttonFaceBook, AuthbuttonGoogle } from "./Authentication_Page_Components/Authbutton"
import { Button } from "./Authentication_Page_Components/Button"
import { ForgotPassCompo } from "./Authentication_Page_Components/ForgotPassCompo"
import { Heading } from "./Authentication_Page_Components/Heading"
import { InputBox } from "./Authentication_Page_Components/InputBox"
import { SubHeading } from "./Authentication_Page_Components/SubHeading"
import { WarningButton } from "./Authentication_Page_Components/WarningButton"


export const SignupPage = () => {

    return <div className="grid grid-cols-10">
    <div className=" h-screen flex justify-center col-span-5 ">
        <div className="flex flex-col justify-center ">

            <div className="p-2  ">
                <div className="pb-2">
                    <Heading Title={"Register your Account"} />
                </div>
                <div className="py-2 text-center">
                    <SubHeading Title={"Enter Your Details to Start Your Journey With us"} />
                </div>
                <div className="flex justify-center pt-6 pb-1">
                    <div className="px-4">
                        <AuthbuttonGoogle />
                    </div>
                    <div className="px-4">
                        <AuthbuttonFaceBook />
                    </div>
                </div>

                <div className="flex items-center justify-center py-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-sm px-4 text-gray-500">or continue with email</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>


                <InputBox placeholder={"Enter Your First Name"} type={"text"} />
                <InputBox placeholder={"Enter Your Last Name"} type={"text"} />
                <InputBox placeholder={"Enter Your Email"} type={"email"} />
                <InputBox placeholder={"Enter Your Password"} type={"password"} />

                <ForgotPassCompo to={"/signin"} buttontext={"Forgot Password?"} />

                <Button Label={"Log in"} />
                <WarningButton buttontext={"Sign in"} to={"/signup"} label={"Already Have an Account?"} />

            </div>
        </div>
        
    </div>
    <div className="col-span-5 h-screen w-full">
    <img className="w-full h-screen" src="https://res.cloudinary.com/dchdr0k6p/image/upload/v1724865603/Design_triangle_tech_modern_logo_element_tkcam4.png" alt="EasyJobs" />
    </div>
    </div>


}