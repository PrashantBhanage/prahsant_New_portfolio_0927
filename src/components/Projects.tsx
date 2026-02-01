import { Cloud, BookOpen, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const Projects = () => {
  const weatherAppCode = `# weather_app.py
from http.server import HTTPServer
import mysql.connector
import requests

class WeatherApplication:
    def __init__(self):
        self.api = "LiveWeatherAPI"
        self.db = mysql.connector.connect()
        
    def get_weather(self, city):
        response = requests.get(f"{self.api}/{city}")
        self.save_to_db(response.json())
        return response.json()
        
    def save_to_db(self, data):
        cursor = self.db.cursor()
        cursor.execute("INSERT INTO weather...")

# Real-time weather data 🌤️`;

  const neuroLearnCode = `# neurolearn.py
from http.server import HTTPServer
import mysql.connector

class NeuroLearn:
    def __init__(self):
        self.db = mysql.connector.connect()
        self.tts_enabled = True
        
    def get_lesson(self, topic):
        cursor = self.db.cursor()
        return cursor.execute(f"SELECT * FROM lessons WHERE topic='{topic}'")
        
    def text_to_speech(self, text):
        # JavaScript TTS integration
        return "Speech output enabled"

# Interactive learning 📚`;

  const projects = [
    {
      icon: Cloud,
      title: "Weather Application",
      subtitle: "Java Backend & API Integration",
      date: "2024",
      description: "Developed a real-time weather forecasting system using Java HttpServer and LiveWeatherAPI with MySQL database integration for data persistence.",
      highlights: [
        "Real-time weather data using LiveWeatherAPI",
        "Java HttpServer backend for request handling", 
        "Frontend interface with HTML & CSS",
        "MySQL database for storing application data"
      ],
      code: weatherAppCode,
      tech: ["Java", "Java HttpServer", "LiveWeatherAPI", "HTML", "CSS", "MySQL"]
    },
    {
      icon: BookOpen,
      title: "NeuroLearn",
      subtitle: "Educational Learning Platform",
      date: "2024",
      description: "Built an educational learning platform using Java backend with HttpServer, featuring interactive frontend and Text-to-Speech functionality.",
      highlights: [
        "Java backend with HttpServer architecture",
        "Interactive frontend using HTML, CSS, JavaScript",
        "Voice Text-to-Speech functionality",
        "MySQL database for structured content storage"
      ],
      code: neuroLearnCode,
      tech: ["Java", "Java HttpServer", "MySQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovation through code and creativity
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-code-border hover:glow transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <project.icon className="text-primary" size={28} />
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                        <p className="text-lg text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex gap-3">
                          <span className="text-primary mt-1">●</span>
                          <p className="text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <CodeSnippet 
                    code={project.code}
                    language="Python"
                    title={`${project.title.toLowerCase().replace(/\s+/g, '_')}.py`}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
