function Skills() {

  const Skills = [

    "React.js",
    "JavaScript",
    "HTML & CSS",
    "C++",
    "Java",
    "Python",
    "Git & GitHub",
    "Responsive Web Design",
    "Problem Solving"

  ];


  return (

    <div className="grid-3">

      {Skills.map((skill) => (

        <div
          className="Skills"
          key={skill}>

          {skill}

        </div>

      ))}

    </div>

  );
}
export default Skills;