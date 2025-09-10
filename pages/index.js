import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BookOpen, Atom, Languages, FileText, Award, ArrowRight } from 'lucide-react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

    const handleNavbarScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    }

    // Handle body scroll lock for mobile menu
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('scroll', animateOnScroll)
    window.addEventListener('scroll', handleNavbarScroll)
    return () => {
      window.removeEventListener('scroll', animateOnScroll)
      window.removeEventListener('scroll', handleNavbarScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
            <span className={styles.navLink} style={{cursor: 'pointer', opacity: 0.5}}>Contact</span>
          </div>
          <button className={styles.ctaButton}>
            Get Started <span className={styles.ctaArrow}><ArrowRight/></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button - Outside navbar for mobile */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className={isMobileMenuOpen ? styles.hamburgerOpen : styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

        {/* Mobile Sidebar */}
        <div className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarContent}>
            <a href="#courses" className={styles.sidebarLink} onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
            <a href="#pricing" className={styles.sidebarLink} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className={styles.sidebarLink} onClick={() => setIsMobileMenuOpen(false)}>Success Stories</a>
            <span className={styles.sidebarLink} style={{opacity: 0.5}} onClick={() => setIsMobileMenuOpen(false)}>Contact</span>
            <button className={styles.sidebarCtaButton} onClick={() => setIsMobileMenuOpen(false)}>
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>      {/* Modern Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroTitle} ${styles.movingBgText} animate`}>
              Transform Your Learning Experience
            </h1>
            <p className={`${styles.heroDescription} animate`}>
              Personalized tutoring that adapts to your unique learning style and goals.
            </p>
            <div className={`${styles.heroButtons} animate`}>
              <button className={styles.primaryButton}>
                Start Free Trial
              </button>
              <button className={styles.secondaryButton}>
                How It Works
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
            {
              type: 'Online',
              price: '$29',
              popular: false,
              description: 'Virtual sessions with expert tutors via video call'
            },
            {
              type: '1-on-1',
              price: '$49',
              popular: true,
              description: 'Personalized in-person tutoring with dedicated attention'
            },
            {
              type: 'Group',
              price: '$19',
              popular: false,
              description: 'Small group sessions for collaborative learning'
            }
          ].map((plan) => (
            <div key={plan.type} className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''} animate`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3>{plan.type}</h3>
              <div className={styles.price}>{plan.price}<span>/session</span></div>
              <p className={styles.pricingDescription}>{plan.description}</p>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Testimonials */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2>Success Stories</h2>
          <p>Rated 4.9/5 by 200+ students and parents</p>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.rating}>★★★★★</div>
            <div className={styles.quote}>
              "From failing to honor roll in just 2 months!"
            </div>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <h4>Sarah Johnson</h4>
                <p>Grade 11 Student</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.rating}>★★★★☆</div>
            <div className={styles.quote}>
              "The personalized approach made all the difference for my son."
            </div>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <h4>Lisa Thompson</h4>
                <p>Parent</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.rating}>★★★★★</div>
            <div className={styles.quote}>
              "Scored 95% on my calculus final thanks to my tutor!"
            </div>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <h4>Michael Chen</h4>
                <p>University Student</p>
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
            <p>Transforming education through personalized learning experiences</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Services</h4>
            <a href="#courses">Courses</a>
            <a href="#pricing">Pricing</a>
            <a href="/contact">Contact</a>
          </div>
          <div className={styles.footerLinks}>
            <h4>Resources</h4>
            <a href="/about">About Us</a>
            <a href="/testimonials">Success Stories</a>
            <a href="/blog">Learning Tips</a>
          </div>
          <div className={styles.footerLinks}>
            <h4>Support</h4>
            <a href="/faq">FAQ</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2025 Academic Tutoring. All rights reserved.
          </div>
          <div className={styles.footerContact}>
            <div className={styles.credits}>
              {/* Please keep the ‘Made by Noah Zhang’ credit in the footer. */}
              <a href="https://github.com/Learnmore-smart" target="_blank" rel="noopener noreferrer">
                Made by Noah Zhang
              </a>
              {/* Please keep the ‘Made by Noah Zhang’ credit in the footer. */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}