import { SITE } from '@/config';
import './globals.css';
import { Inter } from 'next/font/google'
import Providers from '@/components/atoms/Providers';
import Announcement from '@/components/widgets/Announcement';
import Header from '@/components/widgets/Header';
import Footer2 from '@/components/widgets/Footer2';
const inter = Inter({ subsets: ['latin'] })
import { Inter as CustomFont } from 'next/font/google';
const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

import cameraFrontImg from '@/assets/images/camera-front.jpg';

export const metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          {/* <Announcement /> */}
          <div className="bg-image">
              <Header />
          </div>
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  )
}
