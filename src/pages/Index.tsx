import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import TechnicalSkills from '@/components/TechnicalSkills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <About />
        <Internships />
        <Projects />
        <TechnicalSkills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
