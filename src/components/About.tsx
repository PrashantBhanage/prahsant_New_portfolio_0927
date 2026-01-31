import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';
import ContactForm from './ContactForm';
import profilePhoto from '@/assets/profile-photo.png';

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const aboutCode = `class SoftwareEngineer:
    def __init__(self):
        self.name = "Subasri B"
        self.role = "Aspiring Software Engineer"
        self.university = "SASTRA University"
        self.degree = "B.Tech Graduate"
        self.skills = ["Python", "Java", "AI", "Cloud Technologies"]
        self.passion = "Building scalable, user-centric solutions"
        
    def get_objective(self):
        return """
        Product Engineer passionate about integrating AI, 
        software development, and product design to create 
        seamless digital experiences that drive business 
        impact and enhance user satisfaction.
        """
        
    def collaborate(self, team):
        return f"Ready to work with {team} to transform innovative ideas into successful products"

# Initialize engineer
subasri = SoftwareEngineer()
print(subasri.get_objective())`;

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <img
                  src={profilePhoto}
                  alt="Subasri B"
                  className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-primary glow object-cover"
                />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Subasri B</span>
              </h1>
              
              <p className="text-xl text-primary mb-4">
                Aspiring Software Engineer
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                B.Tech Graduate – SASTRA University
              </p>
              
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Skilled in Python, Java, AI, and Cloud Technologies | Open to IT Opportunities
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">Email</span>
                </button>
                
                
                <a
                  href="https://linkedin.com/in/subasri-b-84839236b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/Subasri23Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Code */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-code-border">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                def get_engineer_profile():
              </h3>
              
              <CodeSnippet 
                code={aboutCode}
                language="Python"
                title="About.py"
              />
            </Card>

            <div className="bg-gradient-card rounded-lg p-6 border border-code-border">
              <h4 className="text-lg font-semibold mb-3 text-primary">Core Values</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Innovation-driven problem solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>User-centric design thinking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Collaborative team dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Continuous learning mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </div>
    </section>
  );
};

export default About;