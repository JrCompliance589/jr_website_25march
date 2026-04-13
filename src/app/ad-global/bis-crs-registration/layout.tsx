import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIS CRS Registration – Electronics Certification | JR Compliance',
  description: 'Get BIS CRS Registration for electronic & IT products. Expert guidance for Compulsory Registration Scheme with fast processing & complete support.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.jrcompliance.com/ad-global/bis-crs-registration',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
