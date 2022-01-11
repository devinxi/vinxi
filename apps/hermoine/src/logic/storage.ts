import { storage } from "webextension-polyfill";

export const storageLocal = {
  removeItem(key: string) {
    return storage.local.remove(key);
  },

  setItem(key: string, value: string) {
    return storage.local.set({ [key]: value });
  },

  async getItem(key: string) {
    return (await storage.local.get(key))[key];
  }
};
