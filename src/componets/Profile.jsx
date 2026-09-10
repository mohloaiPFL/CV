import profileImage from "../IMG-20250713-WA0084.jpg";

function Profile({ personalInfo }) {

  return (

    <section
      className="section"
      id="home"
    >

      <div className="profile-layout">

        <div>

          <img
            src={profileImage}
            alt="profile"
            className="profile-image"/>

        </div>

        <div>

          <p
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
            My Personal Profile
          </p>

          <h1
            style={{
              fontSize:"clamp(38px, 6vw, 64px)",
              margin: "8px 0 10px"
            }}>
                {personalInfo.Name}
            </h1>


          <h2
            style={{
              fontSize: "22px",
              color: "var(--muted)",
              marginTop: 0
            }}>

            {personalInfo.Title}

          </h2>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "760px"
            }}>

            {personalInfo.summary}

          </p>

          <div className="contact-row">

            <span className="skill">
              ✉ {personalInfo.Email}
            </span>

            <span className="skill">
              ☎ {personalInfo.Phone}
            </span>

            <span className="skill">
              📍 {personalInfo.Location}
            </span>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Profile;