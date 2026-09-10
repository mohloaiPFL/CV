import { useEffect, useState } from "react";

import Header from "./componets/Header";
import Profile from "./componets/Profile";
import Education from "./componets/Education";
import Skills from "./componets/Skills";
import Experience from "./componets/experience";
import Projects from "./componets/Projects";
import References from "./componets/Reference";
import Footer from "./componets/Footer";

const personalInfo = {
  Name: "MOHLOAI QAMO",
  Title: "Software Engineering Student * Junior Developer",
  Summary:"Motivated Software Engineering student with a strong interest in software development, web technologies, problem solving and creating useful digital solutions.",

  Email: "mohloaiqamo@gmail.com",
  Phone: "57654049",
  Location: "KORO-KORO"
};

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);

  useEffect(() => {
    document.title = `${personalInfo.Name} CV`;
    document.body.style.margin = "0";
    document.body.style.backgroundColor=darkMode ? "#07111f" : "#f4f7fb";

  }, [darkMode]);


  const theme = darkMode
    ? {
        page: "#07111f",
        card: "#0d1b2d",
        text: "#f4f7fb",
        muted: "#a9b7c8",
        border: "#24364d",
        accent: "#3b82f6"
      }

    : {
        page: "#f4f7fb",
        card: "#ffffff",
        text: "#111827",
        muted: "#5b6472",
        border: "#e2e8f0",
        accent: "#2563eb"
      };

  return (

    <div
      className="app"
      style={{
        minHeight: "100vh",
        background: theme.page,
        color: theme.text,
        "--page": theme.page,
        "--card": theme.card,
        "--text": theme.text,
        "--muted": theme.muted,
        "--border": theme.border,
        "--accent": theme.accent
      }}>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          background: var(--page, #f4f7fb);
        }

        a {
          text-decoration: none;
        }

        .app {
          min-height: 100vh;
          line-height: 1.6;
        }

        .container {
          width: min(1120px, 92%);
          margin: 0 auto;
        }

        .section {
          padding: 72px 0;
        }

        .section-title {
          margin: 0 0 28px;
          color: var(--text);
          font-size: clamp(28px, 4vw, 38px);
          line-height: 1.15;
        }

        .grid-2,
        .grid-3 {
          display: grid;
          gap: 24px;
        }

        .grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .card {
          padding: 28px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }

        .card h3 {
          margin-top: 0;
          color: var(--text);
          font-size: 21px;
        }

        .experience-list {
          display: grid;
          gap: 24px;
        }

        .profile-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 56px;
          align-items: center;
          width: min(1120px, 92%);
          margin: 0 auto;
        }

        .profile-image {
          display: block;
          width: 210px;
          height: 210px;
          margin: 0 auto;
          object-fit: cover;
          object-position: center;
          border: 6px solid var(--accent);
          border-radius: 50%;
        }

        .button {
          border: 1px solid transparent;
          border-radius: 7px;
          padding: 10px 15px;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          opacity: 0.88;
        }

        .skill {
          display: inline-block;
          padding: 9px 13px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 7px;
          font-size: 15px;
          font-weight: 600;
        }

        .contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 850px) {
          .profile-layout {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .contact-row {
            justify-content: center;
          }

          .grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .container,
          .profile-layout {
            width: 90%;
          }

          .section {
            padding: 48px 0;
          }

          .grid-2,
          .grid-3 {
            grid-template-columns: 1fr;
          }

          .profile-image {
            width: 170px;
            height: 170px;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }

          .section {
            padding: 24px 0;
          }

          .card {
            box-shadow: none;
            break-inside: avoid;
          }
        }
      `}</style>

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onPrint={() => window.print()}
        />

        <main>
          <Profile personalInfo={personalInfo} />
          <Education />

          <section className="section" id="skills">

            <div className="container">

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap"
                }}>

                <h2 className="section-title">
                  Skills
                </h2>


                <button
                  className="button no-print"
                  onClick={() =>
                    setShowSkills(!showSkills)
                  }

                  style={{
                    background: theme.accent,
                    color: "white"
                  }}>

                  {showSkills
                    ? "Hide Skills"
                    : "Show Skills"}

                </button>
              </div>
              {showSkills && <Skills />}
            </div>
          </section>
          <Experience />
          <Projects />
          <References />
        </main>
        <Footer personalInfo={personalInfo} />
    </div>
  );
}
export default App;