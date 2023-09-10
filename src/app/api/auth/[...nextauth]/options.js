import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from 'next-auth/providers/credentials';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../../../../firebase";

export const options = ({
    page: {
        signIn: "/login",
    },
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
              return await signInWithEmailAndPassword(auth, credentials?.email || '', credentials?.password || '')
                .then(userCredential => {
                  if (userCredential.user) {
                    return userCredential.user;
                  }
                  return null;
                })
                .catch(error => (console.log(error)))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
            }
          })
    ],
    secret: "8e1718109df6d2ac63cddde63a8f8070",
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token;
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session;
        },
    }
});