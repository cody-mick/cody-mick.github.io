export function getLocalStorage(item) {
  let storedTasks = JSON.parse(localStorage.getItem(item));
  return storedTasks;
}

export function saveToLocalStorage(item, info) {
  localStorage.setItem(item, JSON.stringify(info));
}
