import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Features from './Components/Features/Features'
import Courses from './Components/Courses/Courses'
import Steps from './Components/Steps/Steps'
import Footer from './Components/Footer/Footer'
import Stats from './Components/Stats/Stats'
import MiddlePage from './Components/FirstMiddlePage/MiddlePage'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
   <Header/>
   <MiddlePage/>
   <Stats />
   <Features />
   <Courses />
   <Steps />
   <Footer />
    </>
  )
}

export default App
