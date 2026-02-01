import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
 const [formData, setFormData] = useState({
  from_name: '',
  from_email: '',
  subject: '',
  message: ''
});



  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_laghzyg',
        'template_l5hcmjj',
        formData,
        'YILwPsx33xGMW3hJe'
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
     setFormData({
  from_name: '',
  from_email: '',
  subject: '',
  message: ''
});


      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-gradient-card border-code-border">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold gradient-text">Start a Conversation</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
<Input
  id="from_name"
  name="from_name"
  value={formData.from_name}
  onChange={handleChange}
  required
/>


            </div>
            
            <div>
              <Input
  id="from_email"
  name="from_email"
  type="email"
  value={formData.from_email}
  onChange={handleChange}
  required
/>


            </div>
            
            <div>
             <Input
  id="subject"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
/>

            </div>
            
            <div>
              <Textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
/>

            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Mail size={16} className="mr-2" />
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;