import Store from "electron-store";

const MainStore = new Store();

const setStore = (key: any, value: any) => {
  MainStore.set(key, value);
};

const getStore = (key: any) => {
  return MainStore.get(key);
};

const deleteStore = (key: any) => {
  MainStore.delete(key);
};

export { getStore, setStore, deleteStore };
