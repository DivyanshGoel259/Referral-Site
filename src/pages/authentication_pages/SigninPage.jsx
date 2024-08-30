import { AuthbuttonFaceBook, AuthbuttonGoogle } from "./Authentication_Page_Components/Authbutton"
import { Button } from "./Authentication_Page_Components/Button"
import { ForgotPassCompo } from "./Authentication_Page_Components/ForgotPassCompo"
import { Heading } from "./Authentication_Page_Components/Heading"
import { InputBox } from "./Authentication_Page_Components/InputBox"
import { SubHeading } from "./Authentication_Page_Components/SubHeading"
import { WarningButton } from "./Authentication_Page_Components/WarningButton"
import { Animation } from './Authentication_Page_Components/Animation'


export const SigninPage = () => {

    return <div className="bg-[#E7FBE6] lg:grid lg:grid-cols-10">
        <div className=" h-screen flex justify-center lg:col-span-4 ">
            <div className="flex flex-col justify-center ">

                <div className="p-2  ">
                    <div className="pb-2 text-center">
                        <Heading Title={"Log in to your Account"} />
                    </div>
                    <div className="py-2 text-center">
                        <SubHeading Title={"Welcome Back! Choose a Method to Log in"} />
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


                    
                    <InputBox placeholder={"Enter Your Email"} type={"email"} />
                    <InputBox placeholder={"Enter Your Password"} type={"password"} />

                    <ForgotPassCompo to={"/signin"} buttontext={"Forgot Password?"} />

                    <Button Label={"Log in"} />
                    <WarningButton buttontext={"Sign up"} to={"/signup"} label={"Create New Account?"} />


                </div>
            </div>

        </div>
        <div className="hidden lg:flex  lg:col-span-6 h-screen flex items-center justify-center">
            <Animation />
        </div>

    </div>


}