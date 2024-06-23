import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const apiUrl = "http://localhost:3001";
const secretToken = "dadc8086593318c700e35e91c8b66b25122fc07e";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        name: { label: 'Name', type: 'text' },
        nick: { label: 'Nick', type: 'text' },
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        type: { label: 'type', type: 'text' },
      },
      async authorize(credentials, req) {
          const typeUrl = credentials?.type ? credentials?.type : 'login';
          console.log(typeUrl);
          const response = await fetch(`${apiUrl}/${typeUrl}`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
            name: credentials?.name,
            nick: credentials?.nick,
						email: credentials?.email,
						password: credentials?.password
					})
				})
				const user = await response.json()
				if (user && response.ok) {
					return user
				}else{
          console.log(user.meta.target);
          throw new Error(user.meta.target); 
        }          
      }
    })
  ],
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  callbacks: {
    async jwt({ token, user}){
      user && (token.user = user);
      return token;
    },
    async session({ session, token }){
      session = token.user as any;
      return session;
    }
  },
  secret: secretToken,
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions};
