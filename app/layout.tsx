import './ui/global.css';
import Navbar from './Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
        </body>
    </html>
  );
}
