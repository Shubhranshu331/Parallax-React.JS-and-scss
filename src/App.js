import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Parralax With React.JS and Scss</h1>
        <h2 className="Parallax__content__heading__caption">
        Parallax is a popular technique in React JS that involves creating an illusion of depth by moving the background at a different rate than the foreground.
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
        <p>
          <b>He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.</b> It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
        </p>
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}

export default App;