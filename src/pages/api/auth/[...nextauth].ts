// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers here if needed
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Save the user's ID in the session
      return session;
    },
  },
});
