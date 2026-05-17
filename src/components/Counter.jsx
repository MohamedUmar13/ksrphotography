import { useEffect, useRef, useState } from "react";

export default function Counter({ end, duration = 1, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startAnim, setStartAnim] = useState(false);
  const ref = useRef(null);

  // Detect when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
        } else {
          setStartAnim(false);
          setCount(0); // reset when leaving viewport
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Run counter animation
  useEffect(() => {
    if (!startAnim) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [startAnim, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(0)}
      {suffix}
    </span>
  );
}