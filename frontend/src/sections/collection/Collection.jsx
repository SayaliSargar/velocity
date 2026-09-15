import "./Collection.css";

const vehicles = [
  {
    number: "01",
    name: "APEX GT",
    category: "GRAND TOURER",
    description:
      "A precision-built performance machine created for long roads, high speeds and absolute control.",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1800&q=85",
    stats: [
      ["POWER", "680 HP"],
      ["0–100", "3.2 SEC"],
      ["TOP SPEED", "320 KM/H"],
    ],
  },
  {
    number: "02",
    name: "VOLT R",
    category: "ELECTRIC PERFORMANCE",
    description:
      "Instant torque meets intelligent control in a new generation of electric performance.",
    image:
      "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1400&q=85",
    stats: [
      ["POWER", "610 HP"],
      ["0–100", "3.4 SEC"],
      ["RANGE", "480 KM"],
    ],
  },
  {
    number: "03",
    name: "V12 RS",
    category: "PURE PERFORMANCE",
    description:
      "A naturally dramatic driving experience engineered around power, balance and mechanical character.",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=85",
    stats: [
      ["POWER", "760 HP"],
      ["0–100", "2.9 SEC"],
      ["TOP SPEED", "340 KM/H"],
    ],
  },
];

function VehicleStats({ stats }) {
  return (
    <div className="collection__stats">
      {stats.map(([label, value]) => (
        <div className="collection__stat" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function Collection() {
  const featuredVehicle = vehicles[0];
  const secondaryVehicles = vehicles.slice(1);

  return (
    <section
      id="collection"
      className="collection"
      aria-labelledby="collection-title"
    >
      <div className="collection__container">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <header className="collection__header">
          <div className="collection__index">
            <span className="label text-accent">
              06 / Collection
            </span>
          </div>

          <div className="collection__heading">
            <p className="collection__eyebrow label">
              MACHINES / PERFORMANCE / CHARACTER
            </p>

            <h2 id="collection-title">
              THE VELOCITY
              <span>LINEUP.</span>
            </h2>

            <p className="collection__intro">
              Three expressions of performance. Each one built
              around a different idea of motion, but unmistakably
              Velocity.
            </p>
          </div>
        </header>

        {/* =========================
            FEATURED VEHICLE
        ========================== */}
        <article className="collection-feature">
          <div className="collection-feature__visual">
            <img
              src={featuredVehicle.image}
              alt={`${featuredVehicle.name} performance vehicle`}
              loading="lazy"
            />

            <div
              className="collection-feature__overlay"
              aria-hidden="true"
            />

            <div className="collection-feature__topline">
              <span>V / COLLECTION 01</span>
              <span>FLAGSHIP</span>
            </div>

            <div className="collection-feature__corner">
              <span>VELOCITY</span>
              <span>01—03</span>
            </div>
          </div>

          <div className="collection-feature__content">
            <div className="collection-feature__meta">
              <span>{featuredVehicle.number}</span>
              <span>{featuredVehicle.category}</span>
            </div>

            <h3>{featuredVehicle.name}</h3>

            <p>{featuredVehicle.description}</p>

            <VehicleStats stats={featuredVehicle.stats} />

            <a
              className="collection-feature__link"
              href="#gallery"
              aria-label={`Explore ${featuredVehicle.name}`}
            >
              <span>EXPLORE VEHICLE</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* =========================
            SECONDARY VEHICLES
        ========================== */}
        <div className="collection__secondary">
          <div className="collection__secondary-heading">
            <span className="label text-accent">
              MORE FROM VELOCITY
            </span>

            <p>
              Different machines. One uncompromising philosophy.
            </p>
          </div>

          <div className="collection-grid">
            {secondaryVehicles.map((vehicle) => (
              <article
                className="collection-card"
                key={vehicle.number}
              >
                <div className="collection-card__visual">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} performance vehicle`}
                    loading="lazy"
                  />

                  <div
                    className="collection-card__overlay"
                    aria-hidden="true"
                  />

                  <span className="collection-card__number">
                    {vehicle.number}
                  </span>

                  <span className="collection-card__category">
                    {vehicle.category}
                  </span>

                  <span
                    className="collection-card__arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="collection-card__content">
                  <h3>{vehicle.name}</h3>

                  <p>{vehicle.description}</p>

                  <VehicleStats stats={vehicle.stats} />

                  <a
                    className="collection-card__link"
                    href="#gallery"
                    aria-label={`View ${vehicle.name}`}
                  >
                    VIEW VEHICLE
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================
            COLLECTION FOOTER
        ========================== */}
        <div className="collection__footer">
          <span>03 MACHINES</span>
          <span>01 PHILOSOPHY</span>
          <a href="#gallery">
            EXPLORE THE COLLECTION
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Collection;