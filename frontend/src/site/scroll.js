let lenisInstance = null;

export const setLenisInstance = (instance) => {
  lenisInstance = instance;
};

export const goTo = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -84, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToTop = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
};
