"use client";
import { useEffect, useRef } from "react";

interface Cell {
  char: string; // Character ("0" or "1")
  alpha: number; // Opacity animation value
  fadingIn: boolean; // Whether cell is increasing brightness
  speed: number; // Animation speed
}

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Canvas reference

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Stop if canvas is missing

    const ctx = canvas.getContext("2d")!;

    // Canvas size = full screen
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 19; // Size of the binary characters
    const spacing = fontSize * 1.45; // Space between each character

    // Total number of columns and rows based on spacing
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    // Characters to randomly pick from
    const chars = ["0", "1", "0"];

    // Shape center point
    const centerX = width / 2;
    const centerY = height / 2;

    // Create grid of animated cells
    const grid: Cell[][] = [];
    for (let col = 0; col < cols; col++) {
      grid[col] = [];
      for (let row = 0; row < rows; row++) {
        grid[col][row] = {
          char: chars[Math.floor(Math.random() * 3)], // Random 0/1
          alpha: Math.random(), // Start opacity
          fadingIn: Math.random() < 0.5, // Random fade direction
          speed: 0.01 + Math.random() * 0.02, // Random animation speed
        };
      }
    }

    // Mask function controlling the eye-shaped visible area
    const getMask = (x: number, y: number) => {
      const dx = (x - centerX) / (width * 0.42); // Horizontal curve stretch
      const dy = (y - centerY) / (height * 0.42); // Vertical flattening

      // Superellipse-based shape formula (rounded diamond capsule)
      const base = Math.pow(Math.abs(dx), 1.8) + Math.pow(Math.abs(dy), 4);

      let mask = 1 - base; // Inverse: center visible, edges fade

      mask -= Math.abs(dy) * 0.25; // Flatten top & bottom

      // Clamp to 0–1
      return Math.max(0, Math.min(1, mask * 1.35));
    };

    // Animation loop
    const animate = () => {
      // Clear background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      // Set text style
      ctx.font = `bold ${fontSize}px monospace`;

      // Draw all cells
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const cell = grid[col][row];

          // Character position
          const x = col * spacing;
          const y = row * spacing;

          // Apply mask shape
          const mask = getMask(x, y);
          if (mask <= 0) continue; // Skip if invisible area

          const brightness = 0.25 + cell.alpha * 0.55; // Smooth brightness
          const opacity = brightness * mask; // Combine with shape mask

          // Draw glowing 0/1
          ctx.fillStyle = `rgba(0,150,255,${opacity})`;
          ctx.fillText(cell.char, x, y);

          // Animate fade in/out
          if (cell.fadingIn) {
            cell.alpha += cell.speed;
            if (cell.alpha >= 1) cell.fadingIn = false;
          } else {
            cell.alpha -= cell.speed;
            if (cell.alpha <= 0) cell.fadingIn = true;
          }
        }
      }

      requestAnimationFrame(animate); // Repeat loop
    };

    animate(); // Start animation

    // Resize canvas if window size changes
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="inset-0 -z-10 w-full h-full     md:translate-y-[80px]  " />
  );
}
