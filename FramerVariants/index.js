export const introVariants = {
  introContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  },
  introContainer2: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.5,
      },
    },
  },
  span: {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    exit: {
      y: -100,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  heroContainer: {
    initial: {},
    animate: {},
    exit: {
      y: "-100vh",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.5,
      },
    },
  },
};

export const heroVariants = {
  letterContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  },
  letter: {
    initial: {
      y: 250,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
};
