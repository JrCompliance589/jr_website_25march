import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/bis-crs-registration',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
