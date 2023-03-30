import NextAuth from "next-auth/next";

export default NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
