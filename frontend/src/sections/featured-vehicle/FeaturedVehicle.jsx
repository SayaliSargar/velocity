import "./FeaturedVehicle.css";

function FeaturedVehicle() {
  const handleExplore = () => {
    const section = document.getElementById("performance");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="vehicles"
      className="featured-vehicle"
      aria-labelledby="featured-vehicle-title"
    >
      <div className="featured-vehicle__container container">
        {/* Header */}
        <div className="featured-vehicle__header">
          <div>
            <p className="label text-accent">02 / Featured vehicle</p>
          </div>

          <p className="featured-vehicle__intro">
            A machine shaped around performance, precision and the
            instinct to move forward.
          </p>
        </div>

        {/* Vehicle Presentation */}
        <div className="featured-vehicle__presentation">
          <div className="featured-vehicle__visual">
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2200&q=85"
              alt="Black performance sports car"
              loading="lazy"
            />

            <div className="featured-vehicle__visual-index">
              <span>01</span>
              <span>VELOCITY SERIES</span>
            </div>
          </div>

          <div className="featured-vehicle__details">
            <div className="featured-vehicle__heading">
              <p className="label">V / 680</p>

              <h2 id="featured-vehicle-title">
                APEX
                <span>GT</span>
              </h2>

              <p className="featured-vehicle__description">
                Designed around the driver. Engineered to turn
                acceleration into instinct and every corner into
                momentum.
              </p>
            </div>

            <div className="featured-vehicle__specs">
              <div className="featured-vehicle__spec">
                <span className="featured-vehicle__spec-value">
                  680
                </span>
                <span className="featured-vehicle__spec-label">
                  HORSEPOWER
                </span>
              </div>

              <div className="featured-vehicle__spec">
                <span className="featured-vehicle__spec-value">
                  3.2
                </span>
                <span className="featured-vehicle__spec-label">
                  0–100 KM/H
                </span>
              </div>

              <div className="featured-vehicle__spec">
                <span className="featured-vehicle__spec-value">
                  320
                </span>
                <span className="featured-vehicle__spec-label">
                  KM/H
                </span>
              </div>

              <div className="featured-vehicle__spec">
                <span className="featured-vehicle__spec-value">
                  AWD
                </span>
                <span className="featured-vehicle__spec-label">
                  DRIVE SYSTEM
                </span>
              </div>
            </div>

            <button
              className="featured-vehicle__button"
              type="button"
              onClick={handleExplore}
            >
              Explore performance
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedVehicle;