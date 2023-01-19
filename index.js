function duplicate(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== i) {
      continue;
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(duplicate([2, 1, 2, 3, 3]));

function reverse(str) {
  const array = [...str];
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - i - 1]] = [
      array[array.length - i - 1],
      array[i],
    ];
  }
  return array.join("");
}

console.log(reverse("nikhil"));

function removeDupStrings(str) {
  let array = [...str];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      continue;
    }
    if (array.indexOf(array[i]) !== i) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.join("");
}

console.log(removeDupStrings("hello world zelo"));

function reverseWords(str) {
  let array = str.split(" ");
  let result = [];
  for (let word of array) {
    let wordArray = [...word];
    for (let i = 0; i < wordArray.length / 2; i++) {
      [wordArray[i], wordArray[wordArray.length - i - 1]] = [
        wordArray[wordArray.length - i - 1],
        wordArray[i],
      ];
    }
    result.push(wordArray.join(""));
  }
  return result.join(" ");
}
console.log(reverseWords("hello world zelo"));
