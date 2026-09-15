import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="final-cta"
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta__background">
        <img
          src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2200&q=85"
          alt=""
          loading="lazy"
          aria-hidden="true"
        />

        <div
          className="final-cta__overlay"
          aria-hidden="true"
        />
      </div>

      <div className="final-cta__container">
        {/* TOP META */}
        <div className="final-cta__top">
          <span className="label">
            08 / VELOCITY
          </span>

          <span className="final-cta__status">
            ENGINEERED FOR MOTION
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="final-cta__content">
          <p className="final-cta__eyebrow label">
            THE ROAD IS WAITING
          </p>

          <h2 id="final-cta-title">
            MOVE
            <span>WITHOUT</span>
            <span>LIMITS.</span>
          </h2>

          <p className="final-cta__description">
            A machine is only as powerful as the idea behind it.
            Velocity exists to turn that idea into motion.
          </p>

          <a
            href="#hero"
            className="final-cta__button"
          >
            <span>EXPLORE VELOCITY</span>

            <span
              className="final-cta__button-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        {/* BOTTOM */}
        <footer className="final-cta__footer">
          <div className="final-cta__brand">
            <span className="final-cta__brand-mark">
              V
            </span>

            <span>VELOCITY</span>
          </div>

          <div className="final-cta__footer-center">
            <span>PERFORMANCE</span>
            <span>PRECISION</span>
            <span>DESIGN</span>
          </div>

          <div className="final-cta__copyright">
            <span>© 2026 VELOCITY</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default FinalCTA;