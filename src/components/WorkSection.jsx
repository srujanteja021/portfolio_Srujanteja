const projects = [
  {
    name: 'Project 1',
    summary: 'A thoughtful digital experience created with a focus on clarity, interaction, and a smooth user journey.',
  },
  {
    name: 'Project 2',
    summary: 'A responsive web project bringing together clean visual design, useful functionality, and strong performance.',
  },
  {
    name: 'Project 3',
    summary: 'A practical solution shaped through research, problem solving, and careful attention to the details that matter.',
  },
]

function WorkSection() {
  return (
    <section className="projects-section" id="work">
      <div className="projects-heading">
        <span className="section-kicker">01 / Selected work</span>
        <h2>Projects I built.</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-details">
              <span className="project-number">0{index + 1}</span>
              <h3><a href={`#${project.name.toLowerCase().replace(' ', '-')}`}>{project.name} <span aria-hidden="true">↗</span></a></h3>
              <p>{project.summary}</p>
            </div>
            <div className="project-image-placeholder" aria-label={`${project.name} image placeholder`}>
              <span>Project image</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkSection
