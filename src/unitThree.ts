export function fetchData(): Promise<{ name: string; age: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
};