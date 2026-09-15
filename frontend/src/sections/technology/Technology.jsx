import "./Technology.css";

const technologies = [
  {
    number: "01",
    title: "ADAPTIVE DYNAMICS",
    description:
      "Real-time chassis intelligence continuously responds to road conditions, driving input and vehicle movement.",
  },
  {
    number: "02",
    title: "VISION SYSTEM",
    description:
      "A network of intelligent sensors helps the vehicle understand its surroundings and anticipate what comes next.",
  },
  {
    number: "03",
    title: "CONNECTED COCKPIT",
    description:
      "A focused digital interface puts navigation, vehicle data and essential controls exactly where they belong.",
  },
];

function Technology() {
  return (
    <section
      id="technology"
      className="technology"
      aria-labelledby="technology-title"
    >
      <div className="technology__container">
        {/* =========================
            HEADER
        ========================== */}
        <header className="technology__header">
          <div className="technology__index">
            <span className="label text-accent">
              05 / Technology
            </span>
          </div>

          <div className="technology__heading">
            <p className="technology__eyebrow label">
              INTELLIGENCE / ENGINEERING / CONTROL
            </p>

            <h2 id="technology-title">
              TECHNOLOGY
              <span>IN MOTION.</span>
            </h2>

            <p className="technology__intro">
              Performance begins long before the accelerator is
              pressed. Every Velocity system is designed to make
              the machine feel faster, more precise and more
              intuitive.
            </p>
          </div>
        </header>

        {/* =========================
            FEATURE AREA
        ========================== */}
        <div className="technology__feature">
          {/* VISUAL */}
          <div className="technology__visual">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=85"
              alt="Performance vehicle showing advanced exterior engineering"
              loading="lazy"
            />

            <div
              className="technology__visual-overlay"
              aria-hidden="true"
            />

            <div className="technology__visual-label">
              <span>V / SYSTEM 05</span>
              <span>ACTIVE</span>
            </div>

            <div
              className="technology__scan-line"
              aria-hidden="true"
            />
          </div>

          {/* STATEMENT */}
          <div className="technology__statement">
            <span className="technology__statement-number">
              05.01
            </span>

            <h3>
              ENGINEERED
              <br />
              TO <em>THINK.</em>
            </h3>

            <p>
              Hardware and software work together as one
              responsive system. The result is technology that
              stays invisible until the exact moment it matters.
            </p>

            <div className="technology__spec">
              <div className="technology__spec-item">
                <span>PROCESSING</span>
                <strong>REAL-TIME</strong>
              </div>

              <div className="technology__spec-item">
                <span>RESPONSE</span>
                <strong>0.04 SEC</strong>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            TECHNOLOGY SYSTEMS
        ========================== */}
        <div className="technology__systems">
          <div className="technology__systems-heading">
            <span className="label text-accent">
              VELOCITY / SYSTEMS
            </span>

            <p>
              Three layers of intelligence working together.
            </p>
          </div>

          <div className="technology__list">
            {technologies.map((technology) => (
              <article
                className="technology-item"
                key={technology.number}
              >
                <span className="technology-item__number">
                  {technology.number}
                </span>

                <h3>{technology.title}</h3>

                <p>{technology.description}</p>

                <span
                  className="technology-item__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* =========================
            TECHNICAL FOOTER
        ========================== */}
        <div className="technology__footer">
          <span>PRECISION / 01</span>
          <span>INTELLIGENCE / 02</span>
          <span>CONTROL / 03</span>
          <span>VELOCITY / 04</span>
        </div>
      </div>
    </section>
  );
}

export default Technology;