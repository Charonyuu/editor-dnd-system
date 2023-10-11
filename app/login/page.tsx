"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import useLogin from './useLogin'

export default function Login() {
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const { login, loading, error } = useLogin()

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>loading...</div>
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='bg-black border-white border border-solid rounded-xl p-10 flex flex-col items-center'>
                <h1 className='text-2xl'>Draggie Login</h1>
                <p>login with your projectId or account </p>
                <Input className='w-[200px] my-2' type='text' placeholder="Account or ProjectId" value={account} onChange={(e) => setAccount(e.target.value)} />
                <Input className='w-[200px] my-2' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button size="sm" onClick={() => login(account, password)}>Sign In</Button>

            </div>
        </div>
    )
}

