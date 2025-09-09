import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Academic Tutoring</title>
        <meta name="description" content="Get in touch with our academic tutoring team" />
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
            <a href="/contact">Contact</a>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#164062', textAlign: 'center', marginBottom: '2rem' }}>
          Get In Touch
        </h1>
        
        <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2167a2', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Ready to Start Learning?
          </h2>
          
          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  border: '2px solid #ddd', 
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  border: '2px solid #ddd', 
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Subject
              </label>
              <select 
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  border: '2px solid #ddd', 
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
                required
              >
                <option value="">Select a subject</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="test-prep">Test Preparation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                Message
              </label>
              <textarea 
                placeholder="Tell us about your learning goals"
                rows="5"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  border: '2px solid #ddd', 
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                required
              />
            </div>
            
            <button 
              type="submit"
              style={{ 
                background: '#2167a2',
                color: 'white',
                border: 'none',
                padding: '1.2rem 2rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver="this.style.background='#164062'"
              onMouseOut="this.style.background='#2167a2'"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ color: '#2167a2', fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Information</h3>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>📧 Email: info@academictutoring.com</p>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>📞 Phone: +1 (555) 123-4567</p>
          <p style={{ color: '#666' }}>📍 Address: 123 Education Street, Learning City</p>
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
              <a href="/contact">Contact</a>
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