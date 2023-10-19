"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsSun, BsMoonStars } from "react-icons/bs"

function ModeSwitch() {
    const { theme, setTheme } = useTheme()
    const [isChecked, setIsChecked] = useState(theme === "light");

    function changeMode() {
        if (isChecked) {
            setTheme('dark')
            setIsChecked(false)
        } else {
            setTheme('light')
            setIsChecked(true)
        }
    }
    return (
        <div className="relative">
            <input
                type="checkbox"
                className="hidden"
                id="myToggle"
                checked={isChecked}
                onChange={changeMode}
            />
            <label htmlFor="myToggle" className="flex items-center cursor-pointer">
                <div className="relative w-12 h-6 bg-gray-400 rounded-full shadow-inner">
                    <div className={`thumb-icon flex items-center justify-center absolute w-6 h-6  rounded-full shadow transition-transform duration-700 ${isChecked ? 'transform translate-x-full bg-white' : 'bg-gray-500'}`}>
                        {isChecked ? <BsSun color='orange' fontSize="14px" /> : <BsMoonStars fontSize="14px" />}
                    </div>
                </div>
            </label>
        </div>
    );
}

export default ModeSwitch;
