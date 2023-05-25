import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header ${sticky}`;

  return (
    <div className="mainSection">
      <header classsName="header">
        <div className={classes} id="pageHeader">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="https://github.com/stevegebhardt">My GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/steve-gebhardt-dev/">
                My LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section id="home"></section>
      <section id="projects">
        <div id="project1">
          <div>
            <img></img>
          </div>
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </section>
      <section id="project2">
        <div>
          <img></img>
        </div>
        <div>
          <p>More Lorem Ipsum</p>
        </div>
      </section>
    </div>
  );
}

export default App;
