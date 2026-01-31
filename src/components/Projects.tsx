import { Zap, Eye, Gamepad2, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CodeSnippet from './CodeSnippet';

const Projects = () => {
  const energyMeterCode = `# energy_ocr.py
import cv2
import matlab.engine

class EnergyOCR:
    def __init__(self):
        self.accuracy = 0.92
        self.engine = matlab.engine.start_matlab()
        
    def process(self, image):
        return self.engine.extractDigits(image)

# 92% accuracy achieved 🔋`;

  const aslCode = `# asl_detector.py
import tensorflow as tf
import cv2

class ASLDetector:
    def __init__(self):
        self.model = self.build_cnn()
        
    def build_cnn(self):
        return tf.keras.Sequential([
            tf.keras.layers.Conv2D(32, 3, activation='relu'),
            tf.keras.layers.Dense(26, activation='softmax')
        ])

# Real-time ASL detection 👋`;

  const gameNLPCode = `# game_ai.py
from transformers import GPT2LMHeadModel
import random

class GameAI:
    def __init__(self):
        self.model = GPT2LMHeadModel.from_pretrained('gpt2')
        self.quest_types = ["fetch", "combat", "exploration"]
        
    def generate_content(self, context):
        return "Dynamic narrative created"

# Game content generation 🎮`;

  const projects = [
    {
      icon: Zap,
      title: "Automated Energy Meter Reading",
      subtitle: "Image Processing & IoT",
      date: "May 2025",
      description: "Built a scalable, cloud-integrated energy monitoring solution with 92% accuracy using MATLAB OCR pipeline and ThingSpeak integration.",
      highlights: [
        "92% digit recognition accuracy with advanced preprocessing",
        "Cloud-integrated real-time reporting system", 
        "Zero microcontroller dependency architecture",
        "Intuitive user-friendly data extraction"
      ],
      code: energyMeterCode,
      tech: ["MATLAB", "ThingSpeak", "Image Processing", "OCR", "IoT"]
    },
    {
      icon: Eye,
      title: "American Sign Language Detection",
      subtitle: "CNN & Computer Vision",
      date: "January 2025",
      description: "Developed a CNN-based real-time ASL gesture recognition system using OpenCV for assistive communication technology.",
      highlights: [
        "Convolutional Neural Network for spatial feature extraction",
        "Real-time detection with OpenCV integration",
        "Dropout and batch normalization for accuracy",
        "Cross-entropy loss with Adam optimizer"
      ],
      code: aslCode,
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"]
    },
    {
      icon: Gamepad2,
      title: "Procedural Game Content Creation",
      subtitle: "NLP & AI Generation",
      date: "October 2024",
      description: "Created a generative AI system for dynamic game narratives, dialogues, and quests using advanced NLP techniques.",
      highlights: [
        "Custom text generation model for game content",
        "Context-aware narrative and dialogue creation",
        "Automated storyline and mission generation",
        "Grammar consistency and plot continuity systems"
      ],
      code: gameNLPCode,
      tech: ["Python", "NLP", "GPT-2", "Transformers", "PyTorch"]
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
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
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