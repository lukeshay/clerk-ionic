import { Storage } from "@capacitor/storage";

const setItem = async <T>(key: string, value: T): Promise<void> =>
  Storage.set({
    key,
    value: JSON.stringify({ value }),
  });

const getItem = async <T>(key: string): Promise<T | undefined> => {
  const { value } = await Storage.get({ key });

  return value ? (JSON.parse(value).value as T) : undefined;
};

export { getItem, setItem };
