// Presets de animacion compartidos.
// EASE es una curva "expo out": arranca rapido y frena suave.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
