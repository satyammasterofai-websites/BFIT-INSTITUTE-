import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'BFIT Institute of Computer Science | Best Computer Courses in Saharanpur',
  description: 'Join BFIT Institute of Computer Science for practical, career-oriented computer education. We offer CCC, Tally, Graphic Design, Python, Java, and more in Saharanpur.',
  keywords: ['Best Computer Institute in Saharanpur', 'Computer Course in Saharanpur', 'CCC Course in Saharanpur', 'Graphic Designing Course in Saharanpur', 'Tally Course in Saharanpur', 'Python Course in Saharanpur', 'Java Course in Saharanpur', 'BFIT Institute Saharanpur'],
  openGraph: {
    title: 'BFIT Institute of Computer Science',
    description: 'Empowering Students With Practical Computer Skills And Career-Focused Training.',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-slate-800" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
