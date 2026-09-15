import "./Hero.css";

function Hero() {
  const handleExplore = () => {
    const section = document.getElementById("vehicles");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDiscover = () => {
    const section = document.getElementById("performance");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__image">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=85"
          alt="Performance sports car driving on an open road"
        />
      </div>

      <div className="hero__overlay" />

      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__intro">
          <p className="hero__eyebrow label text-accent">
            VELOCITY / 01 — PERFORMANCE
          </p>

          <h1 id="hero-title" className="hero__title">
            <span>MOVE</span>
            <span>WITHOUT</span>
            <span className="hero__title-accent">LIMITS.</span>
          </h1>

          <p className="hero__description">
            Precision engineered for those who expect more from every
            second, every curve, and every road ahead.
          </p>

          <div className="hero__actions">
            <button
              className="hero__primary-button"
              type="button"
              onClick={handleExplore}
            >
              Explore vehicles
              <span aria-hidden="true">↗</span>
            </button>

            <button
              className="hero__secondary-button"
              type="button"
              onClick={handleDiscover}
            >
              Discover performance
            </button>
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__metrics">
            <div className="hero__metric">
              <span className="hero__metric-value">3.2</span>
              <span className="hero__metric-label">0–100 KM/H</span>
            </div>

            <div className="hero__metric">
              <span className="hero__metric-value">680</span>
              <span className="hero__metric-label">HORSEPOWER</span>
            </div>

            <div className="hero__metric">
              <span className="hero__metric-value">320</span>
              <span className="hero__metric-label">KM/H TOP SPEED</span>
            </div>
          </div>

          <div className="hero__scroll">
            <span className="hero__scroll-line" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;