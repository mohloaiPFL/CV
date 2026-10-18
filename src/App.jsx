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
        page: "#e8f0f8",
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

        .cv-layout {
          display: grid;
          grid-template-columns: minmax(250px, 0.8fr) minmax(0, 1.6fr);
          align-items: start;
          gap: 28px;
          width: min(1120px, 92%);
          margin: 28px auto;
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--page);
        }

        .cv-column {
          display: grid;
          min-width: 0;
          align-content: start;
          gap: 22px;
        }

        .cv-column .section {
          padding: 0;
        }

        .cv-sidebar .profile-section {
          padding: 22px;
          border-radius: 12px;
          background: #d5e4f2;
        }

        .cv-sidebar .profile-layout {
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
          text-align: center;
        }

        .cv-sidebar .profile-image {
          width: 145px;
          height: 145px;
        }

        .cv-sidebar .profile-layout h1 {
          font-size: clamp(28px, 3vw, 38px) !important;
          overflow-wrap: anywhere;
        }

        .cv-sidebar .contact-row {
          justify-content: center;
        }

        .cv-sidebar .grid-2 {
          grid-template-columns: 1fr;
        }

        .cv-sidebar .grid-3 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .Skills {
          padding: 9px 11px;
          border: 1px solid var(--border);
          border-radius: 7px;
          background: var(--card);
          font-size: 14px;
          font-weight: 600;
          text-align: center;
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

        .skills-collapsed {
          display: none;
        }

        @media (max-width: 850px) {
          .cv-layout {
            grid-template-columns: minmax(220px, 0.85fr) minmax(0, 1.5fr);
            gap: 18px;
            width: 96%;
            padding: 16px;
          }

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
          .cv-layout {
            grid-template-columns: 1fr;
            width: 92%;
            margin: 18px auto;
            padding: 16px;
          }

          .container,
          .profile-layout {
            width: 90%;
          }

          .cv-sidebar .profile-layout {
            width: 100%;
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

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          html,
          body {
            width: 100%;
            min-height: 100%;
            background: #e8f0f8 !important;
            color: #172033 !important;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 9.5pt;
            line-height: 1.35;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .no-print {
            display: none !important;
          }

          .app {
            min-height: 297mm;
            padding: 12mm;
            background: #e8f0f8 !important;
            color: #172033 !important;
          }

          .cv-layout {
            grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
            gap: 7mm;
            width: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: #e8f0f8 !important;
          }

          .cv-column {
            gap: 5mm;
          }

          .container,
          .profile-layout {
            width: 100%;
            max-width: none;
          }

          .section {
            padding: 0;
          }

          .section-title {
            margin-bottom: 8px;
            padding-bottom: 4px;
            border-bottom: 1px solid #cbd5e1;
            color: #172033 !important;
            font-size: 13pt;
          }

          .cv-sidebar .profile-section {
            padding: 5mm 4mm;
            border: 1px solid #c4d5e6;
            background: #d5e4f2 !important;
          }

          .cv-sidebar .profile-layout {
            grid-template-columns: 1fr;
            gap: 3mm;
            text-align: center;
          }

          .cv-sidebar .contact-row {
            justify-content: center;
            gap: 4px;
          }

          .profile-layout {
            grid-template-columns: 27mm 1fr;
            gap: 8mm;
            align-items: center;
          }

          .profile-image {
            width: 25mm !important;
            height: 25mm !important;
            border-width: 1.2mm !important;
            border-color: #334e68 !important;
          }

          .profile-layout h1 {
            margin: 2px 0 4px !important;
            color: #172033 !important;
            font-size: 20pt !important;
          }

          .profile-layout h2 {
            margin-bottom: 5px !important;
            color: #334e68 !important;
            font-size: 9pt !important;
          }

          .profile-layout p {
            margin: 4px 0;
            color: #344054 !important;
            line-height: 1.4 !important;
          }

          .grid-2,
          .grid-3 {
            gap: 6px;
          }

          .card {
            padding: 7px 8px;
            border: 1px solid #d7dee8;
            border-radius: 4px;
            background: #ffffff !important;
            box-shadow: none;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .card h3 {
            margin: 0 0 4px;
            color: #172033 !important;
            font-size: 9pt;
          }

          .card p,
          .card li {
            color: #344054 !important;
          }

          .card p {
            margin: 3px 0;
          }

          .experience-list {
            gap: 6px;
          }

          .experience-list ul {
            margin: 5px 0 0;
            padding-left: 18px;
            line-height: 1.35 !important;
          }

          .skill {
            padding: 3px 5px;
            border-color: #cbd5e1;
            border-radius: 3px;
            background: #ffffff !important;
            color: #172033 !important;
            font-size: 8.5pt;
          }

          .Skills {
            padding: 4px 5px;
            border-color: #cbd5e1;
            background: #ffffff !important;
            color: #172033 !important;
            font-size: 8pt;
          }

          .skills-collapsed {
            display: block;
          }

          .section-title,
          .profile-layout,
          .contact-row {
            break-after: avoid;
            page-break-after: avoid;
          }

          a {
            color: inherit !important;
          }

          footer {
            display: none;
          }
        }
      `}</style>

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onPrint={() => window.print()}
        />

        <main className="cv-layout">
          <aside className="cv-column cv-sidebar">
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
                    onClick={() => setShowSkills(!showSkills)}
                    style={{
                      background: theme.accent,
                      color: "white"
                    }}>
                    {showSkills ? "Hide Skills" : "Show Skills"}
                  </button>
                </div>
                <div className={showSkills ? "" : "skills-collapsed"}>
                  <Skills />
                </div>
              </div>
            </section>
            <References />
          </aside>

          <div className="cv-column cv-main-column">
            <Experience />
            <Projects />
          </div>
        </main>
        <Footer personalInfo={personalInfo} />
    </div>
  );
}
export default App;