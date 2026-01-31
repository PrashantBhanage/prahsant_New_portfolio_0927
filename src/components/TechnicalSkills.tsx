import { Code, Database, Globe, Wrench, BarChart3, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const TechnicalSkills = () => {
  const skillsCode = `# skills.py
class TechStack:
    def __init__(self):
        self.languages = ["Java", "Python", "C++"]
        self.web = ["HTML", "CSS", "Git"]
        self.tools = ["VS Code", "MATLAB", "Figma"]
        
    def get_proficiency(self, skill):
        levels = {"Python": "Advanced", "Java": "Advanced"}
        return levels.get(skill, "Intermediate")

# Full-stack capabilities 💻`;

  const managerialCode = `# leadership.py
class Leadership:
    def __init__(self):
        self.skills = ["Team coordination", "Vision setting", 
                      "Conflict resolution", "Time management"]
        
    def lead_project(self, team_size):
        return f"Leading {team_size} member team"
        
    def resolve_conflict(self):
        return "Find common ground & communicate"

# Strategic leadership 🎯`;

  const technicalCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Java", "Python", "C++", "Data Structures & Algorithms", "Functional Programming"],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "Git", "GitHub"],
      color: "text-bronze"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "SQL"],
      color: "text-copper"
    },
    {
      icon: BarChart3,
      title: "UI/UX Tools",
      skills: ["Figma", "Adobe XD", "Canva"],
      color: "text-gold"
    },
    {
      icon: Wrench,
      title: "Software & Tools",
      skills: ["VS Code", "MATLAB", "Quartus", "Grafana", "AutoCAD"],
      color: "text-primary"
    }
  ];

  const managerialCategories = [
    {
      icon: Users,
      title: "Leadership",
      description: "Team coordination, vision setting, and strategic decision making"
    },
    {
      icon: Users,
      title: "Conflict Resolution", 
      description: "Active listening, mediation, and emotional intelligence"
    },
    {
      icon: Users,
      title: "Adaptability",
      description: "Change management, learning agility, and innovation mindset"
    },
    {
      icon: Users,
      title: "Time Management",
      description: "Goal setting, priority planning, and resource optimization"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive skill set for modern software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills Code */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills Implementation</h3>
            <CodeSnippet 
              code={skillsCode}
              language="Python"
              title="technical_skills.py"
            />
          </div>

          {/* Managerial Skills Code */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Managerial Skills Framework</h3>
            <CodeSnippet 
              code={managerialCode}
              language="Python"
              title="managerial_skills.py"
            />
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technical Proficiencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-code-border hover:glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`${category.color}`} size={24} />
                  <h4 className="font-bold text-lg">{category.title}</h4>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Managerial Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Leadership & Management Skills
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {managerialCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-code-border hover:glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-primary" size={24} />
                  <h4 className="font-bold text-lg">{category.title}</h4>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-card border-code-border">
            <h3 className="text-xl font-bold mb-6 text-center gradient-text">
              Digital Productivity & Visualization Tools
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Productivity Suite</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-muted-foreground">Microsoft Excel - Advanced formulas & data analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-muted-foreground">Microsoft PowerPoint - Professional presentations</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Development Environment</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-muted-foreground">VS Code - Primary development environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm text-muted-foreground">MATLAB - Technical computing & modeling</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;