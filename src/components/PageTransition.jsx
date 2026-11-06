import { m } from 'motion/react';
import { EASE } from '../motion';

// Envoltorio que da entrada y salida suave a cada ruta.
const PageTransition = ({ children }) => (
    <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: EASE }}
    >
        {children}
    </m.div>
);

export default PageTransition;
