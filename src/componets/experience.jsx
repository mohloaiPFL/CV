function Experience() {

  const experience = [

    {
      Position:"Backend Developer",
      Organisation:"LETSHENG DIAMOND MINE",
      Period:"Present",
      Responsibilities: ["Develop and maintain backend services that support mining operations and internal business workflows.",
        "Design and integrate APIs, manage data processing, and troubleshoot production issues to keep systems reliable.",
        "Collaborate with frontend developers, database administrators, and operational teams to deliver secure and maintainable solutions."
      ]
    },
    {
      Position:"Software Engineering Student",
      Organisation:"LIMKOKWING UNIVERSITY",
      Period:"2023 - 2025",
      Responsibilities: ["Study software engineering principles, programming, databases, and web application development.",
        "Build academic projects that apply object-oriented programming, problem solving, and software development practices.",
        "Work with classmates on assignments while improving technical communication, teamwork, and project planning skills."
      ]
    },
    {
      Position:"Junior IT Support and Backend Developer",
      Organisation:"LNDC",
      Period:"2025 - 2026",
      Responsibilities: ["Assist with maintaining internal applications and resolving technical issues reported by staff.",
        "Support data management, backend updates, and basic system testing to improve the reliability of business processes.",
        "Document solutions and collaborate with team members to deliver practical technology support."
      ]
    }

  ];

  return (

    <section
      className="section"
      id="experience">

      <div className="container">

        <h2 className="section-title">
          Work Experience
        </h2>


        <div className="experience-list">
          {experience.map(
            (job, index) => (

            <div
              className="card"
              key={index}
            >

              <h3>
                {job.Position}
              </h3>


              <p
                style={{
                  color: "var(--accent)",
                  fontWeight: 700
                }}>

                {job.Organisation}

              </p>
              <p
                style={{
                  color: "var(--muted)"
                }}>
                {job.Period}
              </p>

              <ul
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8
                }}>

                {job.Responsibilities.map(
                  (item, i) => (

                    <li key={i}>
                      {item}
                    </li>

                  )
                )}

              </ul>

            </div>

            )
          )}
        </div>

      </div>

    </section>

  );
}

export default Experience;