import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Academic Tutoring - Making Learning Accessible</title>
        <meta name="description" content="Professional academic tutoring services that make learning accessible, welcoming, and fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src="/logo-1.png" alt="Academic Tutoring" width={180} height={50} />
          </div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Making Learning <span className={styles.highlight}>Accessible</span> & <span className={styles.highlight}>Enjoyable</span>
          </h1>
          <p className={styles.heroDescription}>
            Professional academic tutoring that builds confidence and achieves results. 
            Our approach makes learning welcoming, fun, and truly effective.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Start Learning Today</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/logo-2.png" alt="Learning Illustration" width={400} height={300} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2>Our Tutoring Services</h2>
          <p>Comprehensive academic support for all levels and subjects</p>
        </div>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📚</div>
            <h3>Subject Tutoring</h3>
            <p>Expert help in math, science, languages, and humanities</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🎯</div>
            <h3>Test Preparation</h3>
            <p>SAT, ACT, AP exams and standardized test strategies</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💻</div>
            <h3>Online Sessions</h3>
            <p>Flexible virtual tutoring from anywhere in the world</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/logo-1.png" alt="Academic Tutoring" width={150} height={40} />
            <p>Making learning accessible, welcoming and fun</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Services</h4>
              <a href="#">Math Tutoring</a>
              <a href="#">Science Help</a>
              <a href="#">Test Prep</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">FAQ</a>
              <a href="#">Resources</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Academic Tutoring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}