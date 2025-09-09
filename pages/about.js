import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Academic Tutoring</title>
        <meta name="description" content="Learn about our mission to make learning accessible and enjoyable" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src="/logo-1.png" alt="Academic Tutoring" width={180} height={50} />
          </div>
          <div className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#164062', textAlign: 'center', marginBottom: '2rem' }}>
          About Academic Tutoring
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#2167a2', fontSize: '2rem', marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
              We believe that every student deserves access to quality education in a supportive, 
              welcoming environment. Our mission is to make learning accessible, enjoyable, and 
              effective for students of all ages and backgrounds.
            </p>
            
            <h2 style={{ color: '#2167a2', fontSize: '2rem', marginBottom: '1.5rem', marginTop: '2rem' }}>Our Values</h2>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Accessibility:</strong> Making quality education available to everyone</li>
              <li><strong>Excellence:</strong> Delivering the highest standard of tutoring</li>
              <li><strong>Innovation:</strong> Using modern teaching methods and technology</li>
              <li><strong>Community:</strong> Building supportive learning environments</li>
            </ul>
          </div>
          
          <div style={{ background: 'linear-gradient(135deg, #2167a2 0%, #164062 100%)', 
                       padding: '3rem', borderRadius: '16px', color: 'white' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why Choose Us?</h3>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#ffd700', marginBottom: '0.5rem' }}>Expert Tutors</h4>
              <p>Our tutors are highly qualified professionals with years of teaching experience</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#ffd700', marginBottom: '0.5rem' }}>Personalized Approach</h4>
              <p>Customized learning plans tailored to each student's needs and goals</p>
            </div>
            <div>
              <h4 style={{ color: '#ffd700', marginBottom: '0.5rem' }}>Proven Results</h4>
              <p>Students consistently show significant improvement in grades and confidence</p>
            </div>
          </div>
        </div>
      </main>

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
              <a href="/about">About Us</a>
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