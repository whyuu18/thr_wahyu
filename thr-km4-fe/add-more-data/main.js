function addMoreData(object, key, value) {
  const exit = Object.assign(object, {[key]:value});
  return exit;
}

console.log(addMoreData({name: "Edo", age: 20}, "address", "Jakarta"));
console.log(addMoreData({name: "Edo", age: 20}, "hobies", ["coding", "reading"]));
console.log(addMoreData({name: "Edo", age: 20}, "isMarried", false));