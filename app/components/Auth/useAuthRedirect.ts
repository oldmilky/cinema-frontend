import { redirect, useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const router = useRouter();

  const redirecting = String(redirect) || "/";

  useEffect(() => {
    if (user) router.push('/');
    // if (user) router.push(redirecting);
  }, [user, router, redirecting]);
};
