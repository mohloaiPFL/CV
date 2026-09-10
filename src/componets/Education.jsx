function Education() {

  const Education = [

    {
      Qualification: "Bachelor of Science in Software Engineering",
      Institution:"LIMKOKWING UNIVERSITY",
      Years:"2024 – 2027"
    },
    {
      Qualification: "LGCSE",
      Institution:"QOALING HIGH SCHOOL",
      Years:"2019 – 2022"
    }
 ];

  return (

    <section
      className="section"
      id="education">

      <div className="container">

        <h2 className="section-title">
          Education
        </h2>


        <div className="grid-2">

          {Education.map(
            (item, index) => (

              <div
                className="card"
                key={index}
              >

                <h3>
                  {item.Qualification}
                </h3>

                <p
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700
                  }}>

                  {item.Institution}

                </p>

                <p
                  style={{
                    color: "var(--muted)"
                  }}>

                  {item.Years}

                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );
}

export default Education;