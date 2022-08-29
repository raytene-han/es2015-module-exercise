function choice(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

function remove(items, item) {
  const index = items.indexOf(item);

  return items.splice(index, 1);
}

export {choice, remove}