const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/srujanteja021',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srujan-teja-379707329/',
  },
  {
    label: 'Email',
    href: 'mailto:muthyalasrujan11@gmail.com',
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Srujan Teja. Built with React</p>
      <nav className="footer-links" aria-label="Footer links">
        {footerLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            rel={link.label === 'Email' ? undefined : 'noreferrer'}
            target={link.label === 'Email' ? undefined : '_blank'}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
