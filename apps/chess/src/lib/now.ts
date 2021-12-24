export const nowMilliseconds =
  typeof window !== 'undefined' && typeof window.performance !== 'undefined'
    ? performance.now.bind(performance)
    : Date.now.bind(Date)
