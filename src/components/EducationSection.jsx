const educationItems = [
  {
    period: '2024 — 2028',
    degree: 'Bachelor of Technology',
    institution: 'National Institute of Jamshedpur',
    department: 'Department of Electronics and Communication Engineering  ',
    description: 'CGPA: 7.04',
  },
]

function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="education-intro">
        <span className="section-kicker">03 / Education</span>
        <h2>Always<br /><em>learning.</em></h2>
        <p>The foundation behind my technical skills, curiosity, and approach to solving meaningful problems.</p>
      </div>

      <div className="education-list">
        {educationItems.map((item) => (
          <article className="education-item" key={item.degree}>
            <span className="education-period">{item.period}</span>
            <div className="education-details">
              <h3>{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p>{item.department}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
