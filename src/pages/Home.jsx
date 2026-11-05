import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhatsAppWidget from '../components/WhatsAppWidget';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Principles />
            <Portfolio />
            <WhatsAppWidget />
        </main>
    );
};

export default Home;
