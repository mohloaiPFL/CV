function Projects() {

  const projects = [
    {
      Title:"Personal Portfolio Website",
      Description:"Built a responsive portfolio website to present my background, technical skills, work experience, and projects in one clear and accessible place.",
      Technologies: "React.js, JavaScript, HTML, CSS"
    },
    {
      Title:"Student Record Management System",
      Description:"Developed a desktop application for adding, updating, searching, and managing student records, making it easier to organize information than using manual files.",
      Technologies:"Java, JavaFX, Object-Oriented Programming, MySQL"
    }

  ];
  return (
    <section
      className="section"
      id="projects">

      <div className="container">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="grid-2">

          {projects.map(
            (project, index) => (

              <div
                className="card"
                key={index}>

                <h3>
                  {project.Title}
                </h3>

                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.7
                  }}>
                  {project.Description}
                </p>
                <p
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700
                  }}>
                  {project.Technologies}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
export default Projects;