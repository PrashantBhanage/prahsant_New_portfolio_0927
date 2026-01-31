import { Award, ExternalLink, Code, Database, Brain, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeSnippet from './CodeSnippet';

// Import certification images
import simplilearnLogo from '@/assets/simplilearn-logo.png';
import frontendCert from '@/assets/frontend-cert.png';
import gdgLogo from '@/assets/gdg-logo.png';
import sqlCert from '@/assets/sql-cert.jpg';
import infosysLogo from '@/assets/infosys-logo.png';
import aiCert from '@/assets/ai-cert.png';
import devopsCert from '@/assets/devops-cert.png';

const Certifications = () => {
  const certificationCode = `class ProfessionalCertifications:
    def __init__(self):
        self.certifications = {
            'frontend_development': {
                'provider': 'Simplilearn SkillUp',
                'technologies': ['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular'],
                'focus': 'Responsive UI Development',
                'skills_gained': ['Component Architecture', 'State Management', 'Modern CSS']
            },
            
            'sql_analytics': {
                'provider': 'Google Developers Group',
                'technologies': ['SQL', 'Data Analysis', 'Query Optimization'],
                'focus': 'Database Management & Analytics',
                'skills_gained': ['Complex Queries', 'Joins', 'Aggregations', 'Performance Tuning']
            },
            
            'artificial_intelligence': {
                'provider': 'Infosys SpringBoard',
                'technologies': ['Machine Learning', 'NLP', 'Neural Networks'],
                'focus': 'AI Ethics & Implementation',
                'skills_gained': ['Supervised Learning', 'Model Training', 'AI Ethics']
            },
            
            'devops_fundamentals': {
                'provider': 'Simplilearn SkillUp',
                'technologies': ['Docker', 'Jenkins', 'Git', 'CI/CD'],
                'focus': 'Automation & Deployment',
                'skills_gained': ['Pipeline Creation', 'Containerization', 'Version Control']
            }
        }
        
    def get_certification_impact(self, cert_name):
        cert = self.certifications[cert_name]
        return f"Enhanced expertise in {cert['focus']} with {len(cert['technologies'])} technologies"
        
    def apply_skills(self, project_type):
        relevant_certs = []
        for cert_name, cert_data in self.certifications.items():
            if any(tech in cert_data['technologies'] for tech in ['React.js', 'SQL', 'Machine Learning']):
                relevant_certs.append(cert_name)
        return relevant_certs

# Continuous professional development
certs = ProfessionalCertifications()
print("📜 Industry-recognized expertise validated!")`;

  const certifications = [
    {
      icon: Code,
      title: "Front-End Development",
      provider: "Simplilearn SkillUp",
      logo: simplilearnLogo,
      certificate: frontendCert,
      description: "Built responsive UIs using HTML, CSS, JavaScript, React.js, and Angular.",
      skills: ["Responsive Design", "Component Architecture", "Modern JavaScript", "React.js", "Angular"],
      color: "text-primary"
    },
    {
      icon: Database,
      title: "SQL for Analysts",
      provider: "Google Developers Group", 
      logo: gdgLogo,
      certificate: sqlCert,
      description: "Practiced SQL queries, joins, aggregations, and data analysis.",
      skills: ["Complex Queries", "Database Optimization", "Data Analysis", "Joins & Aggregations"],
      color: "text-bronze"
    },
    {
      icon: Brain,
      title: "Introduction to AI",
      provider: "Infosys SpringBoard",
      logo: infosysLogo,
      certificate: aiCert,
      description: "Applied supervised learning, NLP, ethical AI concepts through hands-on tasks.",
      skills: ["Machine Learning", "NLP", "AI Ethics", "Supervised Learning", "Neural Networks"],
      color: "text-copper"
    },
    {
      icon: Cloud,
      title: "Introduction to DevOps Tools",
      provider: "Simplilearn SkillUp",
      logo: simplilearnLogo,
      certificate: devopsCert,
      description: "Mastered DevOps fundamentals including CI/CD, containerization, and automation.",
      skills: ["CI/CD Pipelines", "Docker", "Jenkins", "Git", "Automation"],
      color: "text-gold"
    }
  ];

  const openCredential = (certificateUrl: string) => {
    // Always open in new tab, compatible with all browsers
    const newWindow = window.open(certificateUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback for browsers that block popups
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Create a temporary anchor element as fallback
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
                  <img 
                    src={cert.logo} 
                    alt={`${cert.provider} logo`}
                    className="w-12 h-12 object-contain rounded-lg bg-background p-2 border border-border"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <cert.icon className={`${cert.color}`} size={20} />
                      <h3 className="font-bold text-lg">{cert.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                  <Award className="text-primary" size={24} />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 space-y-6">
                {/* Certificate Image */}
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
                <Button 
                  onClick={() => openCredential(cert.certificate)}
                  className="w-full bg-gradient-accent hover:opacity-90 text-primary-foreground border-0"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Credential
                </Button>
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
                <h4 className="font-semibold mb-2">Technical Proficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Validated expertise across multiple technology stacks
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-bronze" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Data Management</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced SQL skills for complex data analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-copper" size={24} />
                </div>
                <h4 className="font-semibold mb-2">AI Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Machine learning and ethical AI implementation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-gold" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  Modern deployment and automation practices
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