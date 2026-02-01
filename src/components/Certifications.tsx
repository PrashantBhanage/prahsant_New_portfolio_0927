import { Award, ExternalLink, Code, Database, Brain, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeSnippet from './CodeSnippet';

// Import certification images
import infosysCert from '@/assets/infosys-cert.png';
import aiCert from '@/assets/ai-cert.png';
import deloitteCert from '@/assets/deloitte-cert.png';

const Certifications = () => {
  const certificationCode = `class ProfessionalCertifications:
    def __init__(self):
        self.certifications = {
            'deloitte_simulation': {
                'provider': 'Deloitte via Forage',
                'focus': 'Coding & Development',
                'date': 'December 2025',
                'skills_gained': ['Software Development', 'Problem Solving']
            },
            
            'java_fundamentals': {
                'provider': 'Infosys Springboard',
                'focus': 'Java Programming',
                'date': 'August 2025',
                'skills_gained': ['Java Basics', 'OOP Concepts']
            },
            
            'sql_database': {
                'provider': 'Scaler',
                'focus': 'SQL & Database Design',
                'date': 'August 2025',
                'skills_gained': ['SQL Queries', 'MySQL', 'Database Design']
            },
            
            'artificial_intelligence': {
                'provider': 'Simplilearn SkillUp',
                'focus': 'Introduction to AI',
                'date': 'August 2025',
                'skills_gained': ['AI Concepts', 'Machine Learning Basics']
            }
        }
        
    def get_certification_count(self):
        return len(self.certifications)

# Continuous professional development
certs = ProfessionalCertifications()
print("📜 4 Industry-recognized certifications earned!")`;

  const certifications = [
    {
      icon: Briefcase,
      title: "Deloitte Technology Job Simulation",
      provider: "Deloitte via Forage",
      date: "December 2025",
      certificate: deloitteCert,
      description: "Completed practical tasks in Coding & Development as part of Deloitte's technology job simulation program.",
      skills: ["Software Development", "Coding", "Problem Solving", "Professional Skills"],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Java Programming Fundamentals",
      provider: "Infosys Springboard",
      date: "August 2025",
      certificate: infosysCert,
      description: "Mastered Java programming fundamentals including OOP concepts, data structures, and core Java development.",
      skills: ["Java", "OOP", "Data Structures", "Core Java"],
      color: "text-bronze"
    },
    {
      icon: Database,
      title: "SQL for Beginners",
      provider: "Scaler",
      date: "August 2025",
      certificate: null,
      description: "Learned SQL using MySQL and Database Design, covering queries, joins, and database management.",
      skills: ["SQL", "MySQL", "Database Design", "Query Optimization"],
      color: "text-copper"
    },
    {
      icon: Brain,
      title: "Introduction to Artificial Intelligence",
      provider: "Simplilearn SkillUp",
      date: "August 2025",
      certificate: aiCert,
      description: "Gained foundational knowledge in AI concepts, machine learning basics, and AI applications.",
      skills: ["AI Concepts", "Machine Learning", "AI Applications", "Data Science Basics"],
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
            <CodeSnippet 
              code={certificationCode}
              language="Python"
              title="certifications.py"
            />
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border-code-border hover:glow transition-all duration-300">
              {/* Certificate Header */}
              <div className="p-6 border-b border-code-border bg-muted/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background border border-border">
                    <cert.icon className={`${cert.color}`} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{cert.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.provider} • {cert.date}</p>
                  </div>
                  <Award className="text-primary" size={24} />
                </div>
              </div>

              {/* Certificate Content */}
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

                {/* Skills Gained */}
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

                {/* View Credential Button */}
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

        {/* Certification Impact */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-card border-code-border">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Certification Impact & Application
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Java Development</h4>
                <p className="text-sm text-muted-foreground">
                  Strong foundation in Java programming
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-bronze" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Database Skills</h4>
                <p className="text-sm text-muted-foreground">
                  SQL and MySQL database management
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-copper" size={24} />
                </div>
                <h4 className="font-semibold mb-2">AI Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding of AI and ML concepts
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-gold" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Industry Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Practical job simulation experience
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
