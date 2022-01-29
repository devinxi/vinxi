import "webextension-polyfill";

declare global {
  const browser: typeof chrome;
}

export const storageLocal = {
  removeItem(key: string) {
    return browser.storage.local.remove(key);
  },

  setItem(key: string, value: string) {
    return browser.storage.local.set({ [key]: value });
  },

  async getItem(key: string) {
    return (await browser.storage.local.get(key))[key];
  }
};
