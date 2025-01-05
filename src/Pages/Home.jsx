import About from "./About";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div >
            <HomePage></HomePage>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;