import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BookOpen, Atom, Languages, FileText, Award } from 'lucide-react'
import styles from '../styles/Home.module.css'

const courses = [
  {
    id: 'math',
    title: 'Mathematics',
    icon: <BookOpen size={24} />,
    description: 'From algebra to calculus, we make math approachable'
  },
  {
    id: 'science', 
    title: 'Science',
    icon: <Atom size={24} />,
    description: 'Biology, chemistry, physics made understandable'
  },
  {
    id: 'english',
    title: 'English',
    icon: <FileText size={24} />,
    description: 'Reading, writing, and literature mastery'
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: <Languages size={24} />,
    description: 'Spanish, French, Mandarin and more'
  },
  {
    id: 'testprep',
    title: 'Test Prep',
    icon: <Award size={24} />,
    description: 'SAT, ACT, AP exams and strategies'
  }
]

export default function Home() {
  const [activeCourse, setActiveCourse] = useState(courses[0])
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

      {/* Modern Courses Section */}
      <section id="courses" className={styles.courses}>
        <div className={styles.sectionHeader}>
          <h2 className="animate">Explore Our Courses</h2>
          <p className="animate">Select a subject to learn more</p>
        </div>
        
        <div className={styles.courseTabs}>
          {courses.map(course => (
            <button
              key={course.id}
              className={`${styles.courseTab} ${activeCourse.id === course.id ? styles.active : ''}`}
              onClick={() => setActiveCourse(course)}
            >
              <span className={styles.courseTabIcon}>{course.icon}</span>
              {course.title}
            </button>
          ))}
        </div>

        <div className={styles.courseContent}>
          <div className={styles.courseInfo}>
            <h3>{activeCourse.title}</h3>
            <p>{activeCourse.description}</p>
            <div className={styles.courseFeatures}>
              <ul>
                <li>Personalized learning plans</li>
                <li>Expert tutors in each subject</li>
                <li>Flexible scheduling</li>
                <li>Progress tracking</li>
              </ul>
            </div>
            <button className={styles.freeTrialButton}>
              Try 30-Minute Free Session
            </button>
          </div>
          <div className={styles.courseImage}>
            <img src="/logo-2.png" alt={activeCourse.title} />
          </div>
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

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2>Trusted by Students & Parents</h2>
          <p>Hear what they say about our tutoring</p>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>
              "My grades improved dramatically after just a month!"
            </div>
            <div className={styles.author}>
              <img src="/logo-1.png" alt="Student" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>High School Student</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>
              "The tutors are patient and explain concepts clearly."
            </div>
            <div className={styles.author}>
              <img src="/logo-1.png" alt="Student" />
              <div>
                <h4>Michael Chen</h4>
                <p>College Freshman</p>
              </div>
            </div>
          </div>
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