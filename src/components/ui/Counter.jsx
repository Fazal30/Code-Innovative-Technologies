import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ 
  from = 0, 
  to = 100, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  className = "" 
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = from + (to - from) * easeProgress;
      
      // Determine decimal precision if any
      if (Number.isInteger(to)) {
        setCount(Math.floor(currentVal));
      } else {
        setCount(parseFloat(currentVal.toFixed(1)));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
