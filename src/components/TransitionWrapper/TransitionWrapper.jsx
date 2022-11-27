import React from 'react'

import { motion } from 'framer-motion'


const TransitionWrapper = ({children, type='toLeft', withOpactity=true}) => {
    const variants = {
        hidden: { 
            opacity: (withOpactity) ? 0 : 1, 
            x: (type === 'toLeft') ? -200 : 200, 
            y: 0 
        },
        enter: { 
            opacity: 1,
            x: 0, 
            y: 0 
        },
        exit: { 
            opacity: (withOpactity) ? 0 : 1, 
            x: (type === 'toLeft') ? -100 : 100, 
            y: 0,
        },
    }
    
    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
        >
            {children}
        </motion.main>
    )
}

export default TransitionWrapper