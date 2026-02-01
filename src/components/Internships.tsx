import { Calendar, MapPin, Code, Brain, Rocket, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const Internships = () => {
  const futureCode = `# future_goals.py
class FutureInternship:
    def __init__(self):
        self.status = "actively_seeking"
        self.target_roles = [
            "Software Developer Intern",
            "Backend Developer Intern",
            "Java Developer Intern"
        ]
        
    def prepare(self):
        return "Building projects & skills"
        
    def apply(self, company):
        return f"Ready to contribute to {company}"

# Open to opportunities! 🚀`;

  const skillsCode = `# current_focus.py
class CurrentFocus:
    def __init__(self):
        self.learning = [
            "Java Backend Development",
            "Database Management",
            "API Development"
        ]
        self.projects = ["Weather App", "NeuroLearn"]
        
    def get_readiness(self):
        return "Industry-ready skills"

# Building foundation 💪`;

  return (
    <section id="internships" className="py-20 bg-muted/20 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Actively seeking internship opportunities
          </p>
        </div>

        <div className="space-y-12">
          {/* Future Internship Goals */}
          <Card className="p-8 bg-gradient-card border-code-border hover:glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Looking for Opportunities</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-lg font-semibold">Actively Seeking Internships</p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Seeking <span className="text-primary font-semibold">Software Development Internship</span> roles 
                      where I can apply my Java, SQL, and backend development skills.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Ready to contribute to real-world projects while learning from 
                      <span className="text-primary font-semibold"> industry professionals</span>.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Available for <span className="text-primary font-semibold">immediate start</span> - 
                      remote, hybrid, or on-site positions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CodeSnippet 
                  code={futureCode}
                  language="Python"
                  title="future_goals.py"
                />
              </div>
            </div>
          </Card>

          {/* Current Preparation */}
          <Card className="p-8 bg-gradient-card border-code-border hover:glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Current Preparation</h3>
                </div>
                
                <p className="text-lg font-semibold mb-2">Building Industry-Ready Skills</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>Ongoing</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Completed <span className="text-primary font-semibold">Deloitte Technology Job Simulation</span> – 
                      gaining practical coding and development experience.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Building real-world projects like <span className="text-primary font-semibold">Weather Application</span> and 
                      <span className="text-primary font-semibold"> NeuroLearn</span> to strengthen my portfolio.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Earning industry certifications from <span className="text-primary font-semibold">Infosys Springboard, 
                      Simplilearn, and Scaler</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CodeSnippet 
                  code={skillsCode}
                  language="Python"
                  title="current_focus.py"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Target Roles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Target Internship Roles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <Code className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">Software Developer</h4>
              <p className="text-sm text-muted-foreground">
                Java backend development and API creation
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <Brain className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">Backend Developer</h4>
              <p className="text-sm text-muted-foreground">
                Database management and server-side logic
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">Full Stack Developer</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end application development
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
