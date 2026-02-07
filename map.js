const numbers = [1, 2, 3, 4, 5];
const doubled = [];
// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }
const friends = ["Wom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];
const friendsLength = friends.map((name) => name.length);
const friendsFirstletter = friends.map((name) => name[4].toLowerCase());
const result = numbers.map((num, index) => {
  console.log(num * index);
});
console.log(friends?.result);
console.log(friendsLength);
console.log(friendsFirstletter);
