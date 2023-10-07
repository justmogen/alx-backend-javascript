export default function updateUniqueItems(groceryItems) {
  if (groceryItems instanceof Map) {
    for (const [key, value] of groceryItems) {
      if (value === 1) {
        groceryItems.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return groceryItems;
}
