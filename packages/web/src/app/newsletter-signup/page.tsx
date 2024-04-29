import SizeIndicator from "@/utils/size-indicator";
import Image from "next/image";
import mobileIllustration from 'public/newsletter-signup/illustration-sign-up-mobile.svg'
import DynamicImage from "./dynamic-image";
import NewletterDescription from "./newsletter-description";
import { roboto } from "../font";
const NewletterPage = () => {
    return (
        <div className="md:bg-charcoal-grey flex items-center justify-center h-screen">
            <div className={`${roboto.className} bg-white flex flex-col      xl:w-8/12  lg:gap-16 lg:w-9/12    md:px-8 md:py-6 md:p-4 md:w-11/12 md:rounded-lg md:flex-row-reverse  gap-8 justify-end items-center px-8`}>
                <SizeIndicator />
                <DynamicImage />
                <NewletterDescription />
            </div>

        </div>
    );
}


export default NewletterPage;