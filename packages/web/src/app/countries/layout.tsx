import { ThemeProvider } from "@/components/theme-provider"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { nunito_sans as font } from "../font"
import SizeIndicator from "@/utils/size-indicator"
import Topbar from "./components/topbar"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={cn(
                font.className,
                "bg-white dark:bg-geo-dark"
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={true}
                    disableTransitionOnChange={false}
                    >
                    <Topbar/>
                    
                    {children}
                </ThemeProvider>
            </div>
        </>
    )
}
