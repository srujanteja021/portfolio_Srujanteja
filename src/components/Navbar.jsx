function Navbar() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Go to homepage">
        <span className="brand-mark">P</span>
        <span>Portfolio</span>
      </a>
      <div className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#cpp">Code</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="nav-cta" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
    </nav>
  )
}

export default Navbar
