import { Award, ExternalLink, Code, Database, Brain, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeSnippet from './CodeSnippet';

// Import certification images (YOURS)
import infosysCert from '@/assets/Infosys.png';
import sqlCert from '@/assets/SQL.png';
import deloitteCert from '@/assets/deloitte-cert.png';
import aiCert from '@/assets/ai-cert.png';

const Certifications = () => {
  const certificationCode = `class ProfessionalCertifications:
    def __init__(self):
        self.certifications = {
            'deloitte_simulation': {
                'provider': 'Deloitte via Forage',
                'focus': 'Technology Job Simulation',
                'date': '2025',
                'skills_gained': ['Coding', 'Problem Solving', 'Industry Experience']
            },
            
            'java_fundamentals': {
                'provider': 'Infosys Springboard',
                'focus': 'Java Programming Fundamentals',
                'date': 'August 2025',
                'skills_gained': ['Java Basics', 'OOP Concepts', 'Core Programming']
            },
            
            'sql_database': {
                'provider': 'Scaler Topics',
                'focus': 'SQL for Beginners (MySQL + Database Design)',
                'date': 'August 2025',
                'skills_gained': ['SQL Queries', 'MySQL', 'Database Design']
            },
            
            'artificial_intelligence': {
                'provider': 'Simplilearn SkillUp',
                'focus': 'Introduction to Artificial Intelligence',
                'date': '2025',
                'skills_gained': ['AI Concepts', 'Machine Learning Basics']
            }
        }
        
    def get_certification_count(self):
        return len(self.certifications)

# Continuous professional development
certs = ProfessionalCertifications()
print("📜 Certifications earned successfully!")`;

  const certifications = [
    {
      icon: Briefcase,
      title: "Deloitte Technology Job Simulation",
      provider: "Deloitte via Forage",
      date: "2025",
      certificate: deloitteCert,
      description:
        "Completed Deloitte’s technology job simulation program focused on coding, development tasks, and real-world problem solving.",
      skills: ["Coding", "Software Development", "Problem Solving", "Professional Skills"],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Java Programming Fundamentals",
      provider: "Infosys Springboard",
      date: "August 2025",
      certificate: infosysCert,
      description:
        "Successfully completed Java Programming Fundamentals covering core Java concepts and object-oriented programming.",
      skills: ["Java", "OOP", "Core Programming"],
      color: "text-bronze"
    },
    {
      icon: Database,
      title: "SQL for Beginners",
      provider: "Scaler Topics",
      date: "August 2025",
      certificate: sqlCert,
      description:
        "Learned SQL using MySQL and Database Design, including queries, joins, and database fundamentals.",
      skills: ["SQL", "MySQL", "Database Design", "Query Writing"],
      color: "text-copper"
    },
    {
      icon: Brain,
      title: "Introduction to Artificial Intelligence",
      provider: "Simplilearn SkillUp",
      date: "2025",
      certificate: aiCert,
      description:
        "Gained foundational understanding of AI concepts, machine learning basics, and practical AI applications.",
      skills: ["AI Concepts", "Machine Learning Basics", "AI Applications"],
      color: "text-gold"
    }
  ];

  const openCredential = (certificateUrl: string | null) => {
    if (!certificateUrl) return;

    const newWindow = window.open(certificateUrl, '_blank', 'noopener,noreferrer');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      const link = document.createElement('a');
      link.href = certificateUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Industry-recognized expertise and continuous learning
          </p>
        </div>

        {/* Certification Framework Code */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-card border-code-border">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
              Certification Framework Implementation
            </h3>
            <CodeSnippet code={certificationCode} language="Python" title="certifications.py" />
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-card border-code-border hover:glow transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-code-border bg-muted/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background border border-border">
                    <cert.icon className={`${cert.color}`} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider} • {cert.date}
                    </p>
                  </div>
                  <Award className="text-primary" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Certificate Image */}
                {cert.certificate && (
                  <div className="relative group">
                    <img
                      src={cert.certificate}
                      alt={`${cert.title} certificate`}
                      className="w-full h-48 object-cover rounded-lg border border-code-border"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Button
                        onClick={() => openCredential(cert.certificate)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Credential
                      </Button>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                {cert.certificate && (
                  <Button
                    onClick={() => openCredential(cert.certificate)}
                    className="w-full bg-gradient-accent hover:opacity-90 text-primary-foreground border-0"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Credential
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
