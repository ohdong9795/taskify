import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'modern-normalize/modern-normalize.css';
import './globals.css';
import QueryProvider from '@/components/common/QueryProvider';
import ToastProvider from '@/components/common/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
  pageProps?: {
    dehydratedState: unknown;
  };
}

export default function RootLayout({ children, pageProps }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <QueryProvider dehydratedState={pageProps?.dehydratedState}>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
