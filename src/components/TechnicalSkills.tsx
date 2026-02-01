import { Code, Database, Globe, Wrench, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const TechnicalSkills = () => {
  const skillsCode = `# skills.py
class TechStack:
    def __init__(self):
        self.languages = ["Java"]
        self.backend = ["Java HttpServer", "Localhost APIs"]
        self.database = ["MySQL", "SQL", "DBMS"]
        self.frontend = ["HTML", "CSS", "JavaScript"]
        
    def get_proficiency(self, skill):
        levels = {"Java": "Advanced", "MySQL": "Advanced"}
        return levels.get(skill, "Intermediate")

# Full-stack capabilities 💻`;

  const professionalCode = `# professional_skills.py
class ProfessionalSkills:
    def __init__(self):
        self.skills = [
            "Effective collaboration",
            "Clear communication", 
            "Problem-solving mindset",
            "Alternative solution thinking"
        ]
        
    def apply_to_project(self, project):
        return f"Contributing to {project} success"

# Team player 🤝`;

  const technicalCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Java"],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Backend Development",
      skills: ["Java HttpServer", "Localhost APIs", "HTTP", "Backend Logic"],
      color: "text-bronze"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "SQL", "DBMS"],
      color: "text-copper"
    },
    {
      icon: Globe,
      title: "Frontend Basics",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-gold"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Linux", "Git", "GitHub"],
      color: "text-primary"
    }
  ];

  const professionalCategories = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective teamwork on academic projects like Weather Application and NeuroLearn"
    },
    {
      icon: Users,
      title: "Problem Solving", 
      description: "Discussed and implemented alternative solutions to improve application flow"
    },
    {
      icon: Users,
      title: "Communication",
      description: "Communicated project requirements clearly during planning and development"
    },
    {
      icon: Users,
      title: "Adaptability",
      description: "Quick learner with passion for continuous improvement and new technologies"
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
            Comprehensive skill set for software development
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

          {/* Professional Skills Code */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Skills Framework</h3>
            <CodeSnippet 
              code={professionalCode}
              language="Python"
              title="professional_skills.py"
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

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Professional Skills
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {professionalCategories.map((category, index) => (
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
      </div>
    </section>
  );
};

export default TechnicalSkills;
