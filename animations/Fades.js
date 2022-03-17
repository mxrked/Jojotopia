const FadeLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: -100 },
};
const FadeRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: 100 },
};

const FadeUp = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};
const FadeDown = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -100 },
};

export { FadeLeft, FadeRight, FadeUp, FadeDown };
