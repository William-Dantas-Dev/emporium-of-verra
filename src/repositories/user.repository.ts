import { User } from "@/interfaces";
import { CreateUserProps } from '@/typesProps';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (user: CreateUserProps) => {
  try {
    const response = await fetch(`${apiUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        nick: user.nick,
        email: user.email,
        password: user.password
      }),
    });
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    return error;
  }
};
