import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'HONDA ACCORD 7TH GEN (2003) — Engineering Archive & Technical Showcase',
  description:
    'Comprehensive technical documentation and mechanical analysis of the 2003 7th-generation Honda Accord (CM5/CM6). Body structure, 2.4L K24A4 i-VTEC and 3.0L J30A4 VTEC V6 powertrains, 4-wheel independent double-wishbone suspension, cabin acoustics, and verified engineering specifications.',
  keywords: [
    'Honda Accord 2003',
    '7th Generation Accord',
    'CM5',
    'CM6',
    'K24A4',
    'J30A4 V6',
    'i-VTEC',
    'VTEC Valvetrain',
    'Double Wishbone Suspension',
    'Automotive Engineering Archive',
    'Technical Specifications',
  ],
  authors: [{ name: 'Engineering Documentation Archive' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to technical documentation
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
