'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../../../firebase';

export default function AdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  
  return (
    <>
     <section className="h-screen h-full">
    <div className="bg-[url('/img/login-background.jpg')] bg-repeat-y bg-cover">
      <div className="container h-full px-6 py-24 drop-shadow-lg">
        <div className="g-6 flex flex-col h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="bg-white md:w-auto lg:ml-6 p-6">
            <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up
            </h2>
            </div>

             <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-full py-2 px-4 block w-full border-2 border-teal-600 bg-white text-gray-900 shadow ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
                  />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-full py-2 px-4 block w-full border-2 border-teal-600 bg-white text-gray-900 shadow ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
                  />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Password Again
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    id="passwordAgain"
                    name="passwordAgain"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    required
                    className="rounded-full py-2 px-4 block w-full border-2 border-teal-600 bg-white text-gray-900 shadow ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
                  />
              </div>
              </div>
              <button
                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                onClick={() => signup()}
                className="disabled:opacity-40 inline-block w-full rounded-full py-2 px-4 bg-teal-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                註冊
              </button>
          </div>
        </div>
       </div>
      </div>
    </section>
  </>
  )
}

