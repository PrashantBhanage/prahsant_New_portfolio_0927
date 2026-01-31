import { Calendar, MapPin, Code, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const Internships = () => {
  const vaultCode = `# vault.py
class CodeVault:
    def __init__(self):
        self.scripts = 100
        self.status = "evolving"
        
    def deploy(self):
        return "AI-powered rapid deployment"

# Dynamic intelligence hub 🚀`;

  const aiAssistantCode = `# ai_assistant.py
class AIAssistant:
    def __init__(self):
        self.platforms = ["ChatGPT", "Gemini", "PromptHer"]
        self.mode = "digital_copilot"
        
    def execute(self):
        return "Think → Plan → Execute"

# AI collaboration ✨`;

  return (
    <section id="internships" className="py-20 bg-muted/20 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building the future through AI and automation
          </p>
        </div>

        <div className="space-y-12">
          {/* Vault of Codes Internship */}
          <Card className="p-8 bg-gradient-card border-code-border hover:glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Vault of Codes</h3>
                </div>
                
                <p className="text-lg font-semibold mb-2">AI and Prompt Engineering Intern</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>July 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Architecting an ever-evolving <span className="text-primary font-semibold">"Code Vault"</span> – 
                      an AI-powered repository fusing 100+ Python, ML, and automation scripts into a personal coding OS for rapid-fire deployment.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Continuously pioneering new scripts, positioning this vault as a 
                      <span className="text-primary font-semibold"> dynamic intelligence hub</span> rather than a static repository.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CodeSnippet 
                  code={vaultCode}
                  language="Python"
                  title="code_vault.py"
                />
              </div>
            </div>
          </Card>

          {/* Mirai School Internship */}
          <Card className="p-8 bg-gradient-card border-code-border hover:glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Mirai School of Technology</h3>
                </div>
                
                <p className="text-lg font-semibold mb-2">Artificial Intelligence Intern</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>June 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Gaining hands-on experience with advanced AI platforms including 
                      <span className="text-primary font-semibold"> ChatGPT, Gemini, PromptHer, and Google Teachable Machine</span> 
                      to deepen understanding of multi-agent system capabilities.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-primary mt-1">●</span>
                    <p className="text-muted-foreground">
                      Leading prompt engineering and AI architecture, creating a 
                      <span className="text-primary font-semibold"> futuristic assistant</span> that thinks, plans, 
                      and executes seamlessly like a digital co-pilot.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CodeSnippet 
                  code={aiAssistantCode}
                  language="Python"
                  title="ai_assistant.py"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Developed */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Skills Developed Through Experience
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <Code className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">AI Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Multi-agent systems and prompt engineering
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <Brain className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">Automation</h4>
              <p className="text-sm text-muted-foreground">
                Python scripting and workflow optimization
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-code-border text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold mb-2">Product Development</h4>
              <p className="text-sm text-muted-foreground">
                Building scalable, user-centric solutions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;