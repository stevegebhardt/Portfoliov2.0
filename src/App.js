import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <section>
        <header>
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <p>About Me</p>
          </div>
          <div>
            <a href="https://github.com/stevegebhardt">My GitHub</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/steve-gebhardt-dev/">
              My LinkedIn
            </a>
          </div>
        </header>
      </section>
      <section id="projects">
        <div id="project1">
          <div>
            <img></img>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </section>
      <section id="project2">
        <div>
          <img></img>
        </div>
        <div>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default App;
