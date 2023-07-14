import { useMutation } from "react-query";
import { api, bearerToken, baseURL } from "@/services/api";

const signIn = async (body: any): Promise<any> => {
  return api.post<any>(`/auth/sign-in`, body);
};

export function useMutateUserSignIn() {
  const mutate = useMutation({
    mutationFn: signIn,
    onSuccess: () => {},
  });

  return mutate;
}

const signUp = async (body: any): Promise<any> => {
  return api.post<any>(`/auth/sign-up`, body);
};

export function useMutateUserSignUp() {
  const mutate = useMutation({
    mutationFn: signUp,
    onSuccess: () => {},
  });

  return mutate;
}
