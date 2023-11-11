export function executeCallback(
  callback: (taskText: string) => void,
  taskText: string
): void {
  callback(taskText);
};

export function myCallback(taskText: string): void {
  console.log(`Task: ${taskText}`);
};
