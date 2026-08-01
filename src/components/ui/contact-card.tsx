"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface ContactCardProps {
  icon: ReactNode;
  iconBgColorClass?: string;
  iconTextColorClass?: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export function ContactCard({ 
  icon, 
  iconBgColorClass = "bg-primary/10", 
  iconTextColorClass = "text-primary",
  title, 
  description, 
  buttonText, 
  onClick, 
  href,
  external = false
}: ContactCardProps) {
  const content = (
    <div className="bg-card hover:bg-muted/30 transition-colors p-6 rounded-[24px] border border-border h-full flex flex-col justify-between group">
      <div>
        <div className={`w-12 h-12 rounded-2xl ${iconBgColorClass} flex items-center justify-center ${iconTextColorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      {buttonText && (
        <div className="mt-auto">
          {href ? (
            <a 
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="w-full inline-block"
            >
              <Button variant="outline" className="w-full">
                {buttonText}
              </Button>
            </a>
          ) : (
            <Button variant="outline" className="w-full" onClick={onClick}>
              {buttonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return content;
}
