function References() {

  const references = [

    {
      Name:"LNDC Reference",
      Role:"Supervisor",
      Organisation:"LNDC",
      Contact:"5674 5478"
    },
    {
      Name:"John Doe",
      Role:"Manager",
      Organisation:"LETSHENG DIAMOND MINE",
      Contact:"1234 5678"
    },
    {
      Name:"Limkokwing University Reference",
      Role:"Lecturer",
      Organisation:"LIMKOKWING UNIVERSITY",
      Contact:"6345 0907"
    }];

  return (

    <section
      className="section"
      id="references">

      <div className="container">

        <h2 className="section-title">
          References
        </h2>

        <div className="grid-2">

          {references.map(
            (reference, index) => (

              <div
                className="card"
                key={index}>

                <h3>
                  {reference.Name}
                </h3>

                <p
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700
                  }}>

                  {reference.Role}

                </p>


                <p
                  style={{
                    color: "var(--muted)"
                  }}>

                  {reference.Organisation}

                </p>

                <p
                  style={{
                    color: "var(--muted)"
                  }}>
                  {reference.Contact}
                </p>

              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
export default References;