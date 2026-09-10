function Footer({ personalInfo }) {

  return (

    <footer
      style={{
        borderTop:"1px solid var(--border)",
        padding: "30px 0",
        background:"var(--card)"
      }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
           gap: "20px",
           flexWrap: "wrap"
        }}>
        <div>
          <strong>
            {personalInfo.Name}
          </strong>

          <p
            style={{
              color: "var(--muted)",
              marginBottom: 0
            }}>

            {personalInfo.Email}
            {" · "}
            {personalInfo.Phone}
            </p>
        </div>
        <p
          style={{
            color: "var(--muted)"
          }}>

          © {new Date().getFullYear()}
          {" "}
          {personalInfo.Name}.
          {" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;