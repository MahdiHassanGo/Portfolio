import About from "./About";
import Education from "./Education";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            
        </div>
    );
};

export default Home;