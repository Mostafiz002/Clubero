
import React from "react";
import { Link } from "react-router";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full lg:flex-row gap-[30px] lg:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl min-h-screen">

            <div className="w-[60%] lg:w-[30%]">
                <img src="https://i.ibb.co/HdHH4Pb/Frame-6.png" alt="illustration"
                     className="w-full"/>
            </div>

            <div className="w-full lg:w-[30%] text-center lg:text-start">
                <h1 className="text-[2.5rem] font-[Neusans-medium] sm:text-[4rem] text-[#566FA7] leading-20">OOPS!</h1>

                <h3 className="text-[#8093B8] text-[0.9rem] sm:text-[1.2rem]">Looks like big foot has broken the link</h3>

                <Link to='/' className="button_primary mt-8">Back to
                    homepage
                </Link>
            </div>
        </div>
    );
};

export default Page404;
                    