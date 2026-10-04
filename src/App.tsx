import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .from('.hero-image', {
          scale: 1.12,
          duration: 2.4,
          ease: 'power2.out',
        })
        .from(
          '.hero-overlay',
          {
            opacity: 0,
            duration: 1.8,
            ease: 'power2.out',
          },
          '-=2',
        )
        .from(
          '.hero-eyebrow',
          {
            y: 24,
            opacity: 0,
            duration: 0.9,
          },
          '-=1',
        )
        .from(
          '.hero-title',
          {
            y: 60,
            opacity: 0,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.6',
        )
        .from(
          '.hero-side',
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.65',
        )

      gsap.to('.hero-image', {
        yPercent: 15,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.featured-project', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured-project',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.project-image img', {
        scale: 1.12,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.project-image',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.philosophy-text', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.selected-work-item', {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.selected-work-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.contact-content', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, mainRef)

    return () => {
      ctx.revert()
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main ref={mainRef}>
      <nav className="nav">
        <a href="/" className="logo">
          AURELIS
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        id="site-menu"
        className={`menu-panel ${menuOpen ? 'menu-panel-open' : ''}`}
      >
        <div className="menu-panel-links">
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#studio" onClick={() => setMenuOpen(false)}>
            Studio
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <p>
          Architecture / Interiors
          <br />
          Spaces shaped by light.
        </p>
      </div>

      <section className="hero">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            ARCHITECTURE / INTERIORS
          </p>

          <h1 className="hero-title">
            Spaces
            <br />
            shaped by light.
          </h1>

          <div className="hero-side">
            <p className="hero-description">
              We create architecture that exists between
              structure, atmosphere and light.
            </p>

            <a href="#projects" className="hero-link">
              Explore projects <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="intro" id="studio">
        <div className="intro-label">
          AURELIS / STUDIO
        </div>

        <div className="intro-content">
          <p>
            We design spaces where architecture,
            material and light exist in quiet
            conversation.
          </p>
        </div>
      </section>

      <section className="featured-project" id="projects">
        <div className="project-heading">
          <p>01 / FEATURED PROJECT</p>
          <span>COPENHAGEN / 2026</span>
        </div>

        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90"
            alt="Modern architectural interior"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="project-info">
          <h2>House No. 17</h2>

          <p>
            A private residence shaped around natural light,
            raw materials and the quiet relationship between
            interior and landscape.
          </p>
        </div>
      </section>

      <section className="project-gallery">
        <div className="gallery-heading">
          <p>02 / SELECTED WORK</p>
          <span>SELECTED PROJECTS</span>
        </div>

        <div className="gallery-grid">
          <article className="gallery-item gallery-item-large">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90"
              alt="Minimal interior with natural light"
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-meta">
              <h3>Villa Nera</h3>
              <span>ITALY / 2025</span>
            </div>
          </article>

          <article className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90"
              alt="Contemporary interior space"
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-meta">
              <h3>Atrium House</h3>
              <span>OSLO / 2025</span>
            </div>
          </article>

          <article className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
              alt="Modern concrete interior"
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-meta">
              <h3>Concrete / Light</h3>
              <span>BERLIN / 2024</span>
            </div>
          </article>
        </div>
      </section>

      <section className="materials">
        <div className="materials-heading">
          <p>03 / MATERIAL STUDY</p>
          <span>MATTER / LIGHT / SPACE</span>
        </div>

        <div className="materials-content">
          <div className="materials-intro">
            <h2>
              Material is
              <br />
              atmosphere.
            </h2>

            <p>
              Stone, wood, concrete and light are not
              simply finishes. They define how a space
              feels, moves and changes throughout the day.
            </p>
          </div>

          <div className="material-list">
            <div className="material-card">
              <span>01</span>
              <h3>STONE</h3>
              <p>Weight / permanence / texture</p>
            </div>

            <div className="material-card">
              <span>02</span>
              <h3>WOOD</h3>
              <p>Warmth / grain / tactility</p>
            </div>

            <div className="material-card">
              <span>03</span>
              <h3>CONCRETE</h3>
              <p>Structure / mass / silence</p>
            </div>

            <div className="material-card">
              <span>04</span>
              <h3>LIGHT</h3>
              <p>Shadow / reflection / movement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <p className="philosophy-label">04 / PHILOSOPHY</p>

        <h2 className="philosophy-text">
          Architecture is not the object.
          <br />
          It is the experience of moving through it.
        </h2>
      </section>

      <section className="selected-work">
        <div className="selected-work-heading">
          <p>05 / SELECTED WORK</p>
          <span>RECENT PROJECTS</span>
        </div>

        <div className="selected-work-grid">
          <article className="selected-work-item selected-work-item-wide">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
              alt="Modern house surrounded by landscape"
              loading="lazy"
              decoding="async"
            />

            <div className="selected-work-meta">
              <h3>Casa Forma</h3>
              <span>PORTUGAL / 2026</span>
            </div>
          </article>

          <article className="selected-work-item">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90"
              alt="Minimal contemporary interior"
              loading="lazy"
              decoding="async"
            />

            <div className="selected-work-meta">
              <h3>Still House</h3>
              <span>SWEDEN / 2025</span>
            </div>
          </article>

          <article className="selected-work-item">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90"
              alt="Contemporary living space"
              loading="lazy"
              decoding="async"
            />

            <div className="selected-work-meta">
              <h3>North / South</h3>
              <span>DENMARK / 2025</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="contact-label">06 / START A PROJECT</p>

          <h2>
            Let’s create
            <br />
            something lasting.
          </h2>

          <a href="mailto:studio@aurelis.com" className="contact-button">
            Start a project
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a href="/" className="footer-logo">
            AURELIS
          </a>

          <p>
            Architecture / Interiors
            <br />
            Copenhagen · Berlin · Oslo
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AURELIS STUDIO</span>

          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact</a>
          </div>

          <span>Spaces shaped by light.</span>
        </div>
      </footer>
    </main>
  )
}

export default App