let money;
function addMonery(a, b) {
  if (typeof b === "number" || b === null) {
    return a + b;
  }
}

const result = addMonery(null, 34);
console.log(result);
