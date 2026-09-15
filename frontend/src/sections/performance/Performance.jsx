import "./Performance.css";

const performanceMetrics = [
  {
    value: "680",
    unit: "HP",
    label: "Maximum power",
  },
  {
    value: "850",
    unit: "NM",
    label: "Peak torque",
  },
  {
    value: "320",
    unit: "KM/H",
    label: "Top speed",
  },
  {
    value: "3.2",
    unit: "SEC",
    label: "0–100 KM/H",
  },
];

const technicalSpecs = [
  {
    label: "Engine",
    value: "4.0L V8 Twin Turbo",
  },
  {
    label: "Transmission",
    value: "8-Speed Dual Clutch",
  },
  {
    label: "Drive",
    value: "All Wheel Drive",
  },
  {
    label: "Weight",
    value: "1,645 KG",
  },
];

function Performance() {
  return (
    <section
      id="performance"
      className="performance"
      aria-labelledby="performance-title"
    >
      <div className="performance__container container">
        {/* Header */}
        <div className="performance__header">
          <div className="performance__section-number">
            <span className="label text-accent">03 / Performance</span>
          </div>

          <div className="performance__heading">
            <p className="performance__eyebrow label">
              ENGINEERED TO RESPOND
            </p>

            <h2 id="performance-title">
              POWER
              <span>IN MOTION.</span>
            </h2>

            <p className="performance__intro">
              Every component works toward the same objective:
              delivering immediate response, controlled power and
              confidence at every speed.
            </p>
          </div>
        </div>

        {/* Primary Performance */}
        <div className="performance__hero-metric">
          <div className="performance__hero-number">
            <span>3.2</span>
            <small>SEC</small>
          </div>

          <div className="performance__hero-copy">
            <span className="label">0–100 KM/H</span>

            <p>
              Instant acceleration from a standstill. A calibrated
              balance of power, traction and intelligent control.
            </p>
          </div>

          <div className="performance__line">
            <span />
          </div>
        </div>

        {/* Metrics */}
        <div className="performance__metrics">
          {performanceMetrics.map((metric) => (
            <article
              className="performance__metric"
              key={metric.label}
            >
              <div className="performance__metric-value">
                <span>{metric.value}</span>
                <small>{metric.unit}</small>
              </div>

              <p>{metric.label}</p>
            </article>
          ))}
        </div>

        {/* Technical Specification */}
        <div className="performance__technical">
          <div className="performance__technical-header">
            <span className="label text-accent">
              Technical specification
            </span>

            <span className="performance__technical-index">
              V / 680
            </span>
          </div>

          <div className="performance__spec-list">
            {technicalSpecs.map((spec, index) => (
              <div className="performance__spec" key={spec.label}>
                <span className="performance__spec-index">
                  0{index + 1}
                </span>

                <span className="performance__spec-label">
                  {spec.label}
                </span>

                <span className="performance__spec-value">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;