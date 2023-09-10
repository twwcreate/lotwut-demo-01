import './globals.css';
import { Inter } from 'next/font/google';
//import Navbar from './components/Navbar';
import AuthProvider from './context/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning={true} className="h-full">
        <AuthProvider>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
};
