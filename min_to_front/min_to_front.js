function min_to_front(array) {
  if (array.length < 2) {
    return array;
  }
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  const minValue = array[minIndex];
  for (let i = minIndex; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = minValue;
  return array;
}

console.log(min_to_front([4,2,1,3,5]));

