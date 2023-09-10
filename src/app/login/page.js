'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';    
import { useState } from 'react';
import Image from 'next/image';
import { BsFacebook } from "react-icons/Bs";
import { BsGoogle }from "react-icons/Bs";

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

     // Google Handler function
     async function handleGoogleSignin(){
        e.preventDefault();
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

    // Facebook Login 
    async function handleFacebookSignin(){
        e.preventDefault();
        signIn('facebook', { callbackUrl : "http://localhost:3000"})
    }

  return (
<>
  <section className="h-screen w-full h-full">
      
    <div className="bg-[url('/assets/login-background.jpg')] bg-repeat-y bg-cover">
      <div className="py-16">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div className="hidden lg:block lg:w-1/2 bg-[length:500px_380px] bg-no-repeat bg-top p-8
                bg-[url('/img/combined.png')]">
              </div>
              <div className="w-full p-8 lg:w-1/2 md:w-full sm:w-full">
                  <Image className="lg:hidden md: flex mx-auto"src={('/img/combined.png')} width={500} height={500} alt="" />
                  <button type='button' onClick={handleGoogleSignin} className="mb-3 flex w-full items-center justify-center rounded-full py-2 px-4 bg-sky-800 px-7 pb-2.5 pt-3 text-center text-white text-sm">
                      <BsGoogle size={15} /> <span className="p-1"></span> 以 Facebook 帳號繼續
                  </button>

                  <button type='button' onClick={handleFacebookSignin} className="mb-3 flex w-full items-center justify-center rounded-full py-2 px-4 bg-sky-600 px-7 pb-2.5 pt-3 text-center text-white text-sm">
                      <BsFacebook size={15} /> <span className="p-1"></span> 以 Google 帳號繼續
                  </button>

                  <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                      <a href="#" className="text-xs text-center text-gray-500 uppercase">Admin Only</a>
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                  </div>
                  <div className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">電郵地址</label>
                      <input 
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="你的電郵"
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="bg-white rounded-full py-2 px-4 text-gray-700 border-2 border-teal-600 focus:outline-none focus:shadow-outline border border-gray-300 block w-full appearance-none" />
                  </div>

                  <div className="mt-4">
                      <div className="flex justify-between">
                          <label className="block text-gray-700 text-sm font-bold mb-2">密碼</label>
                          <div onClick={() => router.push('/forgot-password')} className="cursor-pointer text-xs text-gray-500">忘記密碼?</div>
                      </div>
                      <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="你的密碼"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white rounded-full py-2 px-4 text-gray-700 border-2 border-teal-600 focus:outline-none focus:shadow-outline border border-gray-300 block w-full appearance-none" />
                  </div>
                  <div className="mt-8">
                      <button
                      type="submit"
                      onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                      disabled={!email || !password} 
                      className="disabled:opacity-40 bg-teal-600 rounded-full py-2 px-4 text-white font-bold w-full hover:bg-gray-600">登入</button>
                  </div>
                  {/* <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 md:w-1/4"></span>
                      <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                      <span className="border-b w-1/5 md:w-1/4"></span>
                  </div> */}
              </div>
          </div>
      </div>
    </div>
    </section>
  </>
  )
};