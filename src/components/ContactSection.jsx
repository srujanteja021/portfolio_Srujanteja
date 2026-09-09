const contactLinks = [
  {
    label: 'Email',
    value: 'muthyalasrujan11@gmail.com',
    href: 'mailto:muthyalasrujan11@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Srujanteja/linkedin',
    href: 'https://www.linkedin.com/in/srujan-teja-379707329/',
  },
  {
    label: 'GitHub',
    value: 'github.com/srujanteja',
    href: 'https://github.com/srujanteja021',
  },
]

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <span className="section-kicker">05 / Contact</span>
        <h2>Let&apos;s build<br /><em>something.</em></h2>
        <p>Have an idea, an opportunity, or just want to connect? Send me a message.</p>
      </div>

      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            className="contact-link"
            href={link.href}
            key={link.label}
            rel={link.label === 'Email' ? undefined : 'noreferrer'}
            target={link.label === 'Email' ? undefined : '_blank'}
          >
            <span className="contact-label">{link.label}</span>
            <span className="contact-value">{link.value}</span>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
