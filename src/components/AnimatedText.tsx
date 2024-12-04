import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {text}
    </animated.div>
  );
}