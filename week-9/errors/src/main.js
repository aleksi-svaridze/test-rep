document.querySelector("body").style.backgroundColor = "black";
document.querySelector("body").style.color = "white";
document.querySelector("body").innerHTML = `
  <div>
    <h1>Hello bugs!</h1>
  </div>
`;

function promptDirection(q) {
  let result = prompt(q);

  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction - " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") return "a house";
  else return "two angry bears";
}

try {
  console.log("You see ", look());
} catch (e) {
  console.log("Something went wrong -" + e);
}
