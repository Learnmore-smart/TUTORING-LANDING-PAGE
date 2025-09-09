import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate')
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementPosition < windowHeight - 100) {
          el.classList.add('animated')
        }
      })
    }

    window.addEventListener('scroll', animateOnScroll)
    return () => window.removeEventListener('scroll', animateOnScroll)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Academic Tutoring - Making Learning Accessible</title>
        <meta name="description" content="Professional academic tutoring services" />
      </Head>

      {/* Modern Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src="/logo-1.png" alt="Academic Tutoring" width={180} height={50} />
          </div>
          <div className={styles.navLinks}>
            <a href="#courses" className={styles.navLink}>Courses</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#testimonials" className={styles.navLink}>Success Stories</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </div>
          <button className={styles.ctaButton}>
            Get Started <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroTitle} animate`}>
              Transform Your <span className={styles.highlight}>Learning</span> Experience
            </h1>
            <p className={`${styles.heroDescription} animate`}>
              Personalized tutoring that adapts to your unique learning style and goals.
            </p>
            <div className={`${styles.heroButtons} animate`}>
              <button className={styles.primaryButton}>
                Start Free Trial
                <span className={styles.buttonIcon}>🎯</span>
              </button>
              <button className={styles.secondaryButton}>
                How It Works
                <span className={styles.buttonIcon}>❓</span>
              </button>
            </div>
          </div>
          <div className={`${styles.heroImage} animate`}>
            <img src="/logo-2.png" alt="Happy student learning" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className={styles.courses}>
        <div className={styles.sectionHeader}>
          <h2 className="animate">Our Courses</h2>
        </div>
        <div className={styles.coursesGrid}>
          {['Mathematics', 'Science', 'English', 'Languages', 'Test Prep'].map((course) => (
            <div key={course} className={`${styles.courseCard} animate`}>
              <h3>{course}</h3>
              <button className={styles.courseButton}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.sectionHeader}>
          <h2 className="animate">Pricing Plans</h2>
        </div>
        <div className={styles.pricingGrid}>
          {[
            { type: 'Online', price: '$29', popular: false },
            { type: '1-on-1', price: '$49', popular: true },
            { type: 'Group', price: '$19', popular: false }
          ].map((plan) => (
            <div key={plan.type} className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''} animate`}>
              <h3>{plan.type}</h3>
              <div className={styles.price}>{plan.price}<span>/session</span></div>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/logo-1.png" alt="Academic Tutoring" width={150} height={40} />
          </div>
          <div className={styles.footerLinks}>
            <a href="#courses">Courses</a>
            <a href="#pricing">Pricing</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}