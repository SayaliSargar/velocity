import { useEffect, useState } from "react";
import "./Navigation.css";

const navigationItems = [
  { label: "Vehicles", target: "vehicles" },
  { label: "Performance", target: "performance" },
  { label: "Design", target: "design" },
  { label: "Technology", target: "technology" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (target) => {
    setIsMenuOpen(false);

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBrandClick = () => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`navigation ${
        isScrolled ? "navigation--scrolled" : ""
      } ${isMenuOpen ? "navigation--menu-open" : ""}`}
    >
      <div className="navigation__inner container">
        <button
          className="navigation__brand"
          type="button"
          aria-label="Velocity home"
          onClick={handleBrandClick}
        >
          <span className="navigation__brand-mark">V</span>
          <span className="navigation__brand-name">VELOCITY</span>
        </button>

        <nav
          className="navigation__desktop"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <button
              key={item.target}
              className="navigation__link"
              type="button"
              onClick={() => handleNavigation(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navigation__actions">
          <button
            className="navigation__cta"
            type="button"
            onClick={() => handleNavigation("collection")}
          >
            Explore
            <span aria-hidden="true">↗</span>
          </button>

          <button
            className={`navigation__menu-button ${
              isMenuOpen ? "navigation__menu-button--open" : ""
            }`}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`navigation__mobile ${
          isMenuOpen ? "navigation__mobile--open" : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="navigation__mobile-content">
          <p className="navigation__mobile-label label text-accent">
            Navigate
          </p>

          <nav
            className="navigation__mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item, index) => (
              <button
                key={item.target}
                className="navigation__mobile-link"
                type="button"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => handleNavigation(item.target)}
              >
                <span className="navigation__mobile-number">
                  0{index + 1}
                </span>

                <span className="navigation__mobile-text">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;