function Header({
  darkMode,
  setDarkMode,
  onPrint
}) {

  return (

    <header
      className="no-print"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "var(--card)",
        borderBottom:"1px solid var(--border)"
      }}>

      <div
        className="container"
        style={{
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
          gap: "18px"
        }}>

        <a
          href="#home"

          style={{
            color: "var(--text)",
            fontWeight: 800,
            fontSize: "20px"
          }}>
          MOHLOAI QAMO'S CV
        </a>

        <nav
          style={{
            display: "flex",
            gap: "17px",
            flexWrap: "wrap"
          }}
        >

          <a href="#home"
            style={{ color: "var(--muted)" }}>
            Home
          </a>

          <a href="#education"
            style={{ color: "var(--muted)" }}>
            Education
          </a>

          <a href="#skills"
            style={{ color: "var(--muted)" }}>
            Skills
          </a>

          <a href="#experience"
            style={{ color: "var(--muted)" }}>
            Experience
          </a>

          <a href="#projects"
            style={{ color: "var(--muted)" }}>
            Projects
          </a>

          <a href="#references"
            style={{ color: "var(--muted)" }}>
            References
          </a>

        </nav>

        <div
          style={{
            display: "flex",
            gap: "8px"
          }}>

          <button
            className="button"

            onClick={() =>
              setDarkMode(!darkMode)
            }

            style={{
              background: "var(--page)",
              color: "var(--text)"
            }}
          >

            {darkMode
              ? "☀ Light"
              : "🌙 Dark"}

          </button>

          <button
            className="button"

            onClick={onPrint}

            style={{
              background: "var(--accent)",
              color: "white"
            }}
          >

            Print CV

          </button>

        </div>

      </div>

    </header>

  );
}

export default Header;