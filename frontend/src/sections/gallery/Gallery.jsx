import "./Gallery.css";

const galleryItems = [
  {
    number: "01",
    title: "FORM / FUNCTION",
    category: "DESIGN",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=85",
    size: "large",
  },
  {
    number: "02",
    title: "NIGHT RUN",
    category: "PERFORMANCE",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    number: "03",
    title: "PURE DETAIL",
    category: "CRAFT",
    image:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    number: "04",
    title: "BUILT FOR MOTION",
    category: "ENGINEERING",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85",
    size: "wide",
  },
];

function GalleryItem({ item }) {
  return (
    <article className={`gallery-item gallery-item--${item.size}`}>
      <div className="gallery-item__visual">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />

        <div
          className="gallery-item__overlay"
          aria-hidden="true"
        />

        <div className="gallery-item__top">
          <span>{item.number}</span>
          <span>{item.category}</span>
        </div>

        <div className="gallery-item__bottom">
          <h3>{item.title}</h3>

          <span
            className="gallery-item__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}

function Gallery() {
  return (
    <section
      id="gallery"
      className="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="gallery__container">
        {/* =========================
            HEADER
        ========================== */}
        <header className="gallery__header">
          <div className="gallery__index">
            <span className="label text-accent">
              07 / Gallery
            </span>
          </div>

          <div className="gallery__heading">
            <p className="gallery__eyebrow label">
              FORM / LIGHT / MOTION
            </p>

            <h2 id="gallery-title">
              MOTION,
              <span>CAPTURED.</span>
            </h2>

            <p className="gallery__intro">
              Designed to move. Built to be remembered.
              Explore the details, surfaces and moments that
              define the Velocity experience.
            </p>
          </div>
        </header>

        {/* =========================
            GALLERY GRID
        ========================== */}
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.number}
              item={item}
            />
          ))}
        </div>

        {/* =========================
            EDITORIAL FOOTER
        ========================== */}
        <div className="gallery__footer">
          <div className="gallery__footer-left">
            <span>VELOCITY / EDITORIAL</span>
            <span>2026</span>
          </div>

          <div className="gallery__footer-right">
            <span>
              PERFORMANCE IS NOT ONLY FELT.
            </span>

            <span>
              IT IS SEEN.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;