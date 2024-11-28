import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}