import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="Parallax">
      {/* Scroll Progress */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Scroll to Top */}
      {showTop && (
        <button
          className="top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      )}

      {/* Background */}
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />

      {/* Content */}
      <div className="Parallax__content">
        <div className="Parallax__content__heading fade-in">
          <h1 className="Parallax__content__heading__text">
            Interactive Parallax Experience
          </h1>
          <h2 className="Parallax__content__heading__caption">
            A modern interface built with React.js and SCSS showcasing smooth
            parallax scrolling and engaging motion effects.
          </h2>

         
        </div>

        {/* Features */}
        <div className="Parallax__content__cta fade-in">
          <h3>Key Features</h3>
          <p>• Smooth parallax scrolling with layered motion</p>
          <p>• Scroll-based animations and transitions</p>
          <p>• Responsive and clean UI design</p>
          <p>• Component-based structure</p>
        </div>

        {/* Tech Stack */}
        <div className="Parallax__content__cta fade-in">
          <h3>Tech Stack</h3>
          <p>• React.js</p>
          <p>• SCSS (modular styling)</p>
          <p>• JavaScript (scroll handling & DOM)</p>
        </div>

        {/* Why */}
        <div className="Parallax__content__cta fade-in">
          <h3>Why This Project?</h3>
          <p>
            Built to explore how motion and layered UI can improve user
            engagement.
          </p>
          <p>
            Demonstrates how simple frontend techniques create visually rich
            experiences.
          </p>
        </div>

        {/* Extra Visual Sections */}
        {[1, 2].map((_, i) => (
          <div key={i} className="Parallax__content__cta fade-in">
            <p>
              <b>Seamless scrolling.</b> Elements move at different speeds to
              create depth.
            </p>
            <p>
              <b>Modern UI.</b> Clean design with focus on readability and
              structure.
            </p>
            <p>
              <b>Performance focused.</b> Smooth animations with optimized
              rendering.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
