import "./DesignStory.css";

const designPrinciples = [
  {
    number: "01",
    title: "Proportion",
    description:
      "Every line begins with balance. A low stance, long profile and purposeful surfaces create a silhouette built around motion.",
  },
  {
    number: "02",
    title: "Material",
    description:
      "Carbon, aluminium and precision-finished surfaces bring engineering into the visual language of the vehicle.",
  },
  {
    number: "03",
    title: "Detail",
    description:
      "Nothing is decorative without purpose. Every intake, contour and lighting element contributes to the complete form.",
  },
];

function DesignStory() {
  return (
    <section
      id="design"
      className="design-story"
      aria-labelledby="design-story-title"
    >
      <div className="design-story__container container">
        {/* Section Header */}
        <div className="design-story__header">
          <div className="design-story__index">
            <span className="label text-accent">
              04 / Design
            </span>
          </div>

          <div className="design-story__header-content">
            <p className="design-story__eyebrow label">
              FORM / FUNCTION / EMOTION
            </p>

            <h2 id="design-story-title">
              FORM FOLLOWS
              <span>PERFORMANCE.</span>
            </h2>

            <p className="design-story__intro">
              A design language created from the relationship between
              aerodynamic efficiency, mechanical purpose and visual
              character.
            </p>
          </div>
        </div>

        {/* Main Visual */}
        <div className="design-story__visual">
          <img
            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2200&q=85"
            alt="Close-up detail of a premium sports car"
            loading="lazy"
          />

          <div className="design-story__visual-caption">
            <span>APEX GT</span>
            <span>EXTERIOR / 01</span>
          </div>
        </div>

        {/* Design Principles */}
        <div className="design-story__principles">
          {designPrinciples.map((principle) => (
            <article
              className="design-story__principle"
              key={principle.number}
            >
              <span className="design-story__principle-number">
                {principle.number}
              </span>

              <div className="design-story__principle-content">
                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Visual Story */}
        <div className="design-story__secondary">
          <div className="design-story__secondary-image">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=85"
              alt="Performance car viewed from the side"
              loading="lazy"
            />
          </div>

          <div className="design-story__statement">
            <span className="label text-accent">
              THE DETAILS MATTER
            </span>

            <p>
              From the first contour to the final surface, every
              decision is made to make the vehicle feel faster before
              it even moves.
            </p>

            <span className="design-story__statement-index">
              DESIGN / 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignStory;