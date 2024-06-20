import { AuthUserProps } from '@/typesProps';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const authUser = async (user: AuthUserProps) => {
  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
    });
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    return error;
  }
};
