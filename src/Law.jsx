import React from 'react';
import { 
  Scale, 
  GraduationCap,
  Users, 
  Trophy, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Briefcase, 
  Home, 
  Heart, 
  Car, 
  Building, 
  Award, 
  CheckCircle 
} from 'lucide-react';
import './Law.css';

const Law = () => {
  const stats = [
    { number: "50+", label: "Cases Won", icon: Trophy },
    { number: "5+", label: "Years Experience", icon: Calendar },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: CheckCircle }
  ];

  const services = [
    {
      icon: Scale,
      title: "Criminal Defense",
      description: "Providing strong criminal defense services for clients facing criminal charges. Our experienced team works tirelessly to ensure the best possible outcome for your case, defending your rights every step of the way.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      icon: Briefcase,
      title: "IT & Cyber Law",
      description: "Specialized legal services in IT and cyber law, covering issues such as data protection, intellectual property, and cybercrime. We offer legal counsel for businesses and individuals navigating the digital landscape.",
      image: "https://media.istockphoto.com/id/1440191680/photo/law-and-legal-advice-regulations-and-rules-for-business.jpg?s=612x612&w=0&k=20&c=n0dpeTFvE2gy4LZs0R0AK-ZEU-etl0QQaVpVoZ8zRKw="
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Comprehensive legal services in property and real estate matters, including property disputes, transactions, and leases. We ensure your rights are protected in every real estate deal.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Matrimonial disputes",
      description: "Experienced legal support in matrimonial disputes, including divorce, child custody, and spousal support. We handle sensitive family matters with care and professionalism to ensure the best results for you and your family.",
      image: "https://lexeminent.in/wp-content/uploads/2024/01/0e4cce7b2a087e.jpg"
    },
    {
      icon: Car,
      title: "Civil Litigation",
      description: "Expert representation in civil litigation for resolving disputes involving contracts, property, and personal rights. We provide effective legal solutions to protect your interests in civil courts.",
      image: "https://t3.ftcdn.net/jpg/13/27/66/30/360_F_1327663061_VCgkZkd7cVZuaTMWKjF9wSoiD3RWDkPX.jpg"
    },
    {
      icon: Building,
      title: "Insolvency & Bankruptcy",
      description: "Offering expert legal advice and representation in insolvency and bankruptcy cases. We guide businesses and individuals through financial distress, helping to find the most viable legal solutions.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    }
  ];

  const education = [
    {
      degree: "MBA",
      school: "Osmania University",
      year: "2008",
      honors: "Magna Cum Laude"
    },
    {
      degree: "Bachelor of Arts in Political Science",
      school: "Yale University",
      year: "2005",
      honors: "Summa Cum Laude"
    },
    // {
    //   degree: "Certificate in International Law",
    //   school: "Oxford University",
    //   year: "2009",
    //   honors: "Distinction"
    // }
  ];

  return (
    <div className="lawyer-portfolio">
      {/* Hero Section */}
      <section id="Home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Expert Legal Representation You Can Trust
              </h1>
              <p className="hero-description">
                With over 5 years of experience in legal practice, I provide dedicated, 
                results-driven representation across multiple areas of law. My commitment 
                is to protect your rights and achieve the best possible outcome for your case.
              </p>
              
              {/* Stats */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <stat.icon className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Button */}
             <button
  className="consultation-btn"
  onClick={() => {
    window.location.href = 'tel:+919553410353';
  }}
>
  <Phone className="btn-icon" />
  Free Consultation
</button>

            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <img 
                  src="https://i.ibb.co/Gfhcx0J3/IMG-20250915-WA0005-1.jpg" 
                  alt="Attorney Portrait"
                  className="hero-image"
                />
                <div className="image-overlay">
                  <div className="contact-info">
                    <div className="contact-item">
                      <GraduationCap size={30} />
                      <span>S Shankara Chary (Advocate)</span>
                    </div>
                    {/* <div className="contact-item">
                      <Mail size={16} />
                      <span>contact@lawfirm.com</span>
                    </div>
                    <div className="contact-item">
                      <MapPin size={16} />
                      <span>New York, NY</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* About Section */}
      <section id="About" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="section-header">
                <h2 className="section-title">Meet Shankara Chary</h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="about-text">
                <p className="lead-paragraph">
                  With over 5 years of legal experience, Shankara Chary combines legal expertise 
                  with a compassionate approach, ensuring clients feel heard and supported throughout 
                  their legal journey.
                </p>
                 
                <p>
                  Specializing in <span className="highlight">Civil, Criminal, Family Cases, and Legal Opinion.</span>
                  He works diligently to achieve the best possible outcomes for each case. Shankara believes 
                  that clear communication and personalized legal services are key to effective legal representation.
                </p>
                
                <p>
                  As a trusted legal advisor, his client-focused strategy has earned a reputation for 
                  delivering exceptional results in <span className="highlight">Telangana</span>. Shankara Chary is 
                  committed to clear, transparent communication, believing that it is a crucial element 
                  in effective legal representation.
                </p>
                
                <p>
                  By prioritizing a comprehensive understanding of each client's unique situation, he delivers 
                  strategic legal solutions that maximize success. Renowned for his dedication and personalized 
                  service, making him a trusted legal advisor for clients seeking reliable and empathetic legal support.
                </p>
              </div>
            </div>
            
            <div className="about-right">
              <div className="credentials-card">
                <div className="credentials-header">
                  <GraduationCap className="credentials-icon" />
                  <h3>Education & Qualifications</h3>
                </div>
                
                <div className="credentials-list">
                  <div className="credential-item">
                    {/* <div className="credential-dot"></div> */}
                    <div className="credential-content">
                      <h4>MBA (Marketing and HR)</h4>
                      <p>Osmania University</p>
                      <span className="credential-type">Business Administration</span>
                    </div>
                  </div>
                  
                  <div className="credential-item">
                    {/* <div className="credential-dot"></div> */}
                    <div className="credential-content">
                      <h4>LLB (Bachelor of Laws)</h4>
                      <p>Padala Ram Reddy Law College (O.U) Hyderabad</p>
                      <span className="credential-type">Legal Education</span>
                    </div>
                  </div>
                </div>
                
                <div className="specialization-tags">
                  <span className="tag">Civil Law</span>
                  <span className="tag">Criminal Defense</span>
                  <span className="tag">Family Cases</span>
                  <span className="tag">Legal Opinion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Legal Services</h2>
            <p className="section-subtitle">
              Comprehensive legal solutions tailored to your specific needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon-overlay">
                    <service.icon className="service-icon" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  {/* <button className="service-btn">Learn More</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default Law;