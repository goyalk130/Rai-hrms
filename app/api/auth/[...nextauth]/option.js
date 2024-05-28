import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/databse/db";
import User from "@/models/User";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.email },
              { username: credentials.email },
            ],
          });

          if (!user) {
            throw new Error("no user found with this email");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            delete user.password;
            return user;
          } else {
            throw new Error("Wrong password");
          }
        } catch (error) {}
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session._id = token._id;
        session.email = token.email;
        session.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};

export default authOptions 