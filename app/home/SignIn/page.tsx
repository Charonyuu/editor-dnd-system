"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import useLogin from './useSignIn'
import { AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
export default function SignIn() {
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const { login, loading, error } = useLogin()

    if (loading) return <div>loading...</div>
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='bg-black text-white border-white border border-solid rounded-xl p-10 flex flex-col items-center'>
                <h1 className='text-2xl'>Draggie Login</h1>
                <p>login with your projectId or account </p>
                <Input className='w-full my-2 text-black' type='text' placeholder="Account or ProjectId" value={account} onChange={(e) => setAccount(e.target.value)} />
                <Input className='w-full my-2 text-black' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='text-red-500'>{error}</p>
                <Button size="sm" className='my-4 w-full' onClick={() => login(account, password)}>Sign In</Button>
                <div className='my-2'>-- 其他登入方法 --</div>
                <div className='flex items-center justify-between w-full text-white mb-4'>
                    <button className='flex items-center border border-white border-solid py-1 px-2 rounded-md hover:bg-white hover:text-black'><AiOutlineGoogle className='text-xl' />Google登入</button>
                    <button className='flex items-center border border-white border-solid py-1 px-2 rounded-md hover:bg-white hover:text-black'><AiOutlineUser className='text-xl' />訪客快速登入</button>
                </div>
                <div className='text-sm'>註冊新帳號？<span className='text-red-200 cursor-pointer' onClick={() => router.push("/SignUp")}>SignUp Here</span></div>
            </div>
        </div>
    )
};
