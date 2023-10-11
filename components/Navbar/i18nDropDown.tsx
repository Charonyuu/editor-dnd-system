"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function I18nDropDown() {
    const [lang, setLang] = useState('繁體中文')

    return (
        <div className='mx-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <p className=' whitespace-nowrap'>{lang}</p>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLang("繁體中文")}>
                        繁體中文
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLang("English")}>
                        English
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

