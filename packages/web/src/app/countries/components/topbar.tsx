"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

// This component is designed to provide a top bar with a dark/light theme toggle.
// It utilizes the `useTheme` hook from next-themes for theming support in Next.js applications.
const Topbar = () => {
    // The `useTheme` hook provides `theme` (current theme) and `setTheme` (function to set theme).
    const { theme, setTheme } = useTheme();

    // `mounted` state is used to track if the component has mounted in the client.
    // This is necessary to ensure we perform certain actions (like setting theme) only client-side.
    const [mounted, setMounted] = useState(false);

    // `useEffect` with an empty dependency array runs once after the initial render on client side.
    useEffect(() => {
        setMounted(true);  // Mark the component as mounted.
    }, []);

    // Function to toggle the theme between 'dark' and 'light'.
    const toggleTheme = () => {
        if (mounted) { // Ensure that the theme is toggled only if the component is mounted.
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };

    // If the component is not yet mounted, return null to avoid rendering.
    // This prevents a flash of unstyled content or incorrect theme from being displayed initially.
    if (!mounted) return null;

    // Render the top bar UI with a toggle button for the theme.
    return (
        <div className="px-8 py-6 flex justify-between items-center shadow-md transition-colors duration-500 shadow-bottom bg-white dark:bg-geo-blue">
            <h1 className="font-bold text-lg">Where in the world?</h1>
            <div className='flex gap-2 items-center font-semibold'>
                {theme === 'dark' ? (
                    // SVG for the dark mode icon, which toggles to light mode on click.
                    <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                ) : (
                    // SVG for the light mode icon, which toggles to dark mode on click.
                    <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                )}
                <span>{theme === 'dark' ? 'Dark Mode': 'Light Mode'}</span>  {/* Label for the toggle button. */}
            </div>
        </div>
    );
}

export default Topbar;
