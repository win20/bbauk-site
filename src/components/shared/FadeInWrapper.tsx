"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useScrollFadeIn } from "hooks/useScrollFadeIn";

type ElementType = React.ElementType;

interface FadeInWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: "fast" | "normal" | "slow" | "extra-slow";
  animation?: "fade" | "slide-up" | "slide-down" | "scale";
}

export default function FadeInWrapper({
  children,
  className,
  as: Component = "div",
  threshold = 0.1,
  rootMargin = "0px",
  delay = 0,
  duration = "normal",
  animation = "slide-up",
}: FadeInWrapperProps) {
  const { ref, isVisible } = useScrollFadeIn(threshold, rootMargin, delay);

  const durationClasses = {
    fast: "duration-300",
    normal: "duration-500",
    slow: "duration-700",
    "extra-slow": "duration-1000",
  };

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ${durationClasses[duration]} ease-in-out`;

    switch (animation) {
      case "fade":
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`;
      case "slide-up":
        return `${baseClasses} ${
          isVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 blur-sm"
        }`;
      case "slide-down":
        return `${baseClasses} ${
          isVisible ? "blur-0 translate-y-0 opacity-100" : "-translate-y-6 opacity-0 blur-sm"
        }`;
      case "scale":
        return `${baseClasses} ${isVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"}`;
      default:
        return baseClasses;
    }
  };

  return React.createElement(
    Component,
    {
      ref,
      className: twMerge(getAnimationClasses(), className),
    },
    children
  );
}
