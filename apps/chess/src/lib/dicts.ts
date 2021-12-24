export const dicts = (function () {
  return {
    DictIntersection: function <T>(dictA: Record<string, T>, dictB: Record<string, T>,) {
      const intersection: Record<string, T> = {};
      for (let k in dictB) {
        if (k in dictA) {
          intersection[k] = dictA[k];
        }
      }
      return intersection
    },

    DictDifference: function <T>(dictA: Record<string, T>, dictB: Record<string, T>,) {
      const diff = { ...dictA };
      for (let k in dictB) {
        delete diff[k];
      }
      return diff;
    }
  };
})();
