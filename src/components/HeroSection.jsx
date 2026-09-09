function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-photo-wrap" aria-label="Your profile photo">
        <div className="photo-placeholder">
          <span className="photo-label">Your photo</span>
          <span className="photo-note">Add your portrait in<br />src/assets/profile.jpg</span>
        </div>
        <span className="photo-caption">Available for select projects</span>
      </div>

      <div className="hero-copy" id="about">
        <p className="eyebrow"><span className="status-dot" /> Hello, I am</p>
        <h1>Muthyala<br /><em>Srujan Teja</em></h1>
        <p className="intro">A thoughtful designer and developer building clear, confident digital experiences for people and brands worth remembering.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#work">See my work <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#contact">Download CV <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-meta">
          <span>Based in your city</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
