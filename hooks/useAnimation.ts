import { useEffect, useRef } from 'react';

/
 * Custom hook for creating elegant animations for luxury LRP cosmetics.
 * This hook utilizes the Intersection Observer API to trigger animations
 * when elements come into view, enhancing the luxury feel of the website.
 *
 * @param {string} animationClass - The CSS class to apply for the animation.
 * @returns {React.RefObject} - A ref to attach to the target element.
 */
export const useAnimation = (animationClass: string) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animationClass]);

    return ref;
};

/
 * Types and interfaces related to luxury LRP cosmetics animations.
 */
export interface AnimationProps {
    animationClass: string;
    children: React.ReactNode;
}

/
 * A component that integrates the useAnimation hook to apply
 * luxury animations to children elements.
 * 
 * @param {AnimationProps} props - Properties for the animation component.
 * @returns {JSX.Element} - The animated component.
 */
export const AnimatedComponent: React.FC<AnimationProps> = ({ animationClass, children }) => {
    const ref = useAnimation(animationClass);

    return (
        <div ref={ref} className={luxury-animation ${animationClass}}>
            {children}
        </div>
    );
};