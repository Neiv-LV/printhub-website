import { useEffect } from 'react';

const useIntersectionObserver = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.fade-in');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []); // Run once on mount
};

export default useIntersectionObserver;
