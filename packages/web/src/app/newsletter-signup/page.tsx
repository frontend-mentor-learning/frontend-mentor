'use client'
import { motion, AnimatePresence } from "framer-motion";
import SizeIndicator from "@/utils/size-indicator";
import DynamicImage from "./dynamic-image";
import NewletterDescription from "./newsletter-description";
import { roboto } from "../font";
import { useState } from "react";
import SuccessCard from "./success-card";
const NewletterPage = () => {
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);


    const scaleIn = {
        initial: {
            scale: 0.9,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        },
        exit: {
            scale: 0.95,
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: 'easeInOut'
            }
        }
    };


    return (
        <div>
            <AnimatePresence mode="wait">
                {success ? (
                    <motion.div key="success" {...scaleIn} className="absolute w-full">
                        <SuccessCard email={email} setSuccess={setSuccess} setEmail={setEmail} success={success} />
                    </motion.div>
                ) : (
                    <motion.div key="success" {...scaleIn} className="absolute w-full">
                        <div className="flex items-center justify-center h-screen md:bg-charcoal-grey">
                            <div className={`${roboto.className} bg-white flex flex-col xl:w-7/12 lg:gap-16 lg:w-9/12 md:px-8 md:pl-16 md:py-6 md:p-4 md:w-11/12 md:rounded-3xl md:flex-row-reverse gap-8 justify-end items-center px-8`}>
                                <DynamicImage />
                                <NewletterDescription email={email} setEmail={setEmail} error={error} setError={setError} success={success} setSuccess={setSuccess} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


export default NewletterPage;