import { Unbounded } from 'next/font/google';
import { EntryWrapper } from '../components/EntryWrapper';
import './globals.css';

// Load Unbounded font
const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Normal, Bold, Black
  display: 'swap',
});

export const metadata = {
  title: 'Singularity Student Lab | SRMAP',
  description: 'The Singularity Student Lab at SRM University AP ( SRMAP ) is a cutting-edge research hub where students explore the frontiers of technology and innovation. The lab focuses on AI/ML, Quantum Computing, and more, fostering creativity and collaboration to shape the future of science and technology. It is SRMAP second Student-Led Initiative',
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
          {children}
        </EntryWrapper>
      </body>
    </html>
  );
}