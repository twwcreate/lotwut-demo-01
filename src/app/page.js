'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  return (
    <div className="p-8">
      <div className='text-gray=900'>{session?.data?.user?.email }</div>
      <div className='text-gray=900'>{session?.data?.user?.image }</div>
      <button className='text-gray=900' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

Home.requireAuth = true