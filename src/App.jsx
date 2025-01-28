import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Animate floating elements
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.style.animation = `float ${3 + index}s ease-in-out infinite`;
    });
  }, []);

  return (
    <div style={styles.container}>
      {/* Floating Background Elements */}
      <div className="circle" style={styles.circle1}></div>
      <div className="circle" style={styles.circle2}></div>
      <div className="circle" style={styles.circle3}></div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.name}>Shristi Dhakal</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Creative Developer & Digital Craftsman
          </p>
          <div style={styles.ctaContainer}>
            <button
              style={styles.ctaPrimary}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </button>
            <button
              style={styles.ctaSecondary}
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={styles.projects}>
        <h2 style={styles.sectionTitle}>Featured Work</h2>
        <div style={styles.projectGrid}>
          {[1, 2, 3].map((project) => (
            <div key={project} style={styles.projectCard}>
              <div style={styles.projectImage}></div>
              <h3 style={styles.projectTitle}>Project {project}</h3>
              <p style={styles.projectDesc}>
                An amazing project description...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Let's Connect</h2>
        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <p style={styles.contactText}>📧 your.email@example.com</p>
            <p style={styles.contactText}>📱 +1 234 567 890</p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                GitHub
              </a>
              <a href="#" style={styles.socialLink}>
                LinkedIn
              </a>
              <a href="#" style={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
    backgroundColor: "#f8fff9",
    position: "relative",
  },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    scrollSnapAlign: "start",
    position: "relative",
  },
  projects: {
    minHeight: "100vh",
    scrollSnapAlign: "start",
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  contact: {
    minHeight: "100vh",
    scrollSnapAlign: "start",
    padding: "2rem",
    backgroundColor: "#f0faf9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Keep other styles from previous version, but remove all padding/margin from:
  // heroContent, projectGrid, contactContent, etc.
  heroContent: {
    maxWidth: "1200px",
    textAlign: "left",
    zIndex: 1,
    padding: "0 2rem",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  // ... (keep other styles the same but remove any padding/margin properties)
};

export default App;
