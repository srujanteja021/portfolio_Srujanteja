const skillGroups = [
  {
    title: 'Development',
    groups: [
      {
        title: 'Web Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
      },
      {
        title: 'Cloud & Deployment',
        skills: ['AWS', 'Docker', 'CI/CD'],
      },
    ],
  },
  {
    title: 'Problem Solving',
    groups: [
      {
        title: 'Competitive Programming',
        skills: ['CP', 'DSA'],
      },
    ],
  },
  {
    title: 'CS Core Fundamentals',
    groups: [
      {
        title: 'Computer Science',
        skills: ['DBMS', 'OOPS', 'Operating Systems', 'Computer Networks'],
      },
    ],
  },
]

function SkillItem({ name }) {
  return (
    <div className="skill-item">
      <div className="skill-heading">
        <span>{name}</span>
        <span>70%</span>
      </div>
      <div className="skill-track" aria-label={`${name}: 70 percent`}>
        <span className="skill-progress" />
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-intro">
        <span className="section-kicker">02 / Skills</span>
        <h2>What I bring<br /><em>to the table.</em></h2>
        <p>Always learning, always building. Here is a snapshot of the tools and fundamentals I work with.</p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((category) => (
          <article className="skill-category" key={category.title}>
            <h3>{category.title}</h3>
            {category.groups.map((group) => (
              <div className="skill-subgroup" key={group.title}>
                <h4>{group.title}</h4>
                <div className="skill-list">
                  {group.skills.map((skill) => <SkillItem key={skill} name={skill} />)}
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
