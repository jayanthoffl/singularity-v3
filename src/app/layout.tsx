import { Unbounded } from 'next/font/google';
import { EntryWrapper } from '../components/EntryWrapper';
import Navbar from '../components/Navbar'; 
// REMOVED: import Footer from '../components/Footer'; 
import './globals.css';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Singularity Student Lab | SRMAP',
  description: 'The Singularity Student Lab at SRM University AP...'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} bg-black min-h-screen text-white overflow-x-hidden`}>
        <EntryWrapper>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          {/* REMOVED: <Footer /> */}
        </EntryWrapper>
      </body>
    </html>
  );
}