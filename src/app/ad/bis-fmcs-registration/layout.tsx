import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/fmcs-certification',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
