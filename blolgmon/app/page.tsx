import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import TopBar from './components/TopBar';


export default function Home() {
    return (
        <div>
            <TopBar/>
            <Navbar />
            <main>
                <h1>Bienvenue sur le projet fusionné</h1>
            </main>
            <MainContent />
            <Footer />
        </div>
    );
}