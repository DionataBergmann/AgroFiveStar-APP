import { useLoginMutation } from "../../../../generated/graphql";

export default function useLogin() {
  const [loginMutation, { loading: loadingLogin, error }] = useLoginMutation({
    context: {
      enableErrorMessages: true,
    },
  });

  async function login(email: string, password: string) {
    try {
      const { data } = await loginMutation({
        variables: {
          data: {
            email,
            password,
          },
        },
      });
      
      return { data };
    } catch (e) {
      console.error("Error during login mutation:", e);
      throw e;
    }
  }

  return { login, loadingLogin, error };
}
