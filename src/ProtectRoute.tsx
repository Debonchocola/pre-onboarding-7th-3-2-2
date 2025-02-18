/* eslint-disable react/jsx-no-useless-fragment */
import { useRouter } from 'next/router';
import { path } from './utils/constants/common';

interface ProtectRouteProps {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const router = useRouter();
  const token = typeof window !== 'undefined' && localStorage.getItem('token');

  if (
    !token &&
    typeof window !== 'undefined' &&
    router.pathname !== path.login
  ) {
    router.push(path.login);
  }

  return <>{children}</>;
}
