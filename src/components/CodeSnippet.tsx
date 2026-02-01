import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
}

const CodeSnippet = ({ code, language, title }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative bg-gradient-card rounded-lg border border-code-border overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-code-border bg-muted/50">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      
      <div className="relative">
        <div className="flex items-center justify-between px-4 py-2 bg-code-bg border-b border-code-border">
          <span className="text-xs font-medium text-primary">{language}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-muted/50 hover:bg-muted transition-colors"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <pre className="p-3 overflow-x-auto text-xs max-h-48">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;