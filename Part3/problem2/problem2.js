function drawXYZ(high) {
  // Your Code Here
  for (let i = 1; i <= high; i++) {
    let output = "";
    for (let j = i; j < i + high; j++) {
      if (j % 3 == 0) {
        output += "X";
      } else if (j % 2 == 0) {
        output += "Z";
      } else {
        output += "Y";
      }
    }
    console.log(output);
    output = "";
  }
}

drawXYZ(3);
drawXYZ(5);
drawXYZ(1);
// console.log(drawXYZ(3));
// console.log(drawXYZ(5));
// console.log(drawXYZ(1));
