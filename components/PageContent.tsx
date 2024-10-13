import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useWindowSize } from 'react-use';

export default function PageContent() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(200); // Initial amount of confetti
  const { width, height } = useWindowSize(); 

  useEffect(() => {
    if (showConfetti) {
      const timer = setInterval(() => {
        setConfettiPieces((pieces) => Math.max(pieces - 20, 0)); // Reduce the pieces gradually
      }, 500);

      const stopConfetti = setTimeout(() => {
        setShowConfetti(false); // Stop confetti after 5 seconds
      }, 5000);

      return () => {
        clearInterval(timer); // Clear the interval
        clearTimeout(stopConfetti); // Clear timeout
      };
    }
  }, [showConfetti]);

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container for full screen height */}
      {showConfetti && (
        <Confetti
          numberOfPieces={confettiPieces} // Dynamic number of confetti pieces
          width={width} // Set width to window size
          height={height} // Set height to window size
        />
      )}
      
      <main className="container mx-auto px-4 py-12 flex-grow"> {/* Ensure main content takes up available space */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Dark Mode Demo</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the seamless transition between light and dark. Use the switch in the top-right corner to toggle modes.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <DemoCard
            title="Theme Adaptation"
            description="This card demonstrates how different components adapt to theme changes."
          />
          <DemoCard
            title="Interactive Elements"
            description="Explore how interactive elements respond to the selected theme."
          >
            <Button
              className="mt-4"
              onClick={() => {
                setShowConfetti(true);
                setConfettiPieces(200); // Reset confetti pieces when clicked
              }}
            >
              Click me
            </Button>
          </DemoCard>
        </div>
      </main>
      <Footer /> {/* Footer will be pushed to the bottom */}
    </div>
  );
}

type DemoCardProps = {
  title: string
  description: string
  children?: React.ReactNode
}

function DemoCard({ title, description, children }: DemoCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-700 pt-8 pb-4"> {/* Reduced padding-bottom */}
      <div className="flex flex-col items-center space-y-6">
        {/* Creator Information */}
        <div className="text-center">
          <p className="text-base text-muted-foreground">
            Created by <span className="font-semibold">Yasin Oruc</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/YasinOruc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yasin-oru%C3%A7-134233228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Yasin Oruc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}