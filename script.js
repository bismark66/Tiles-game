/** @format */

//const { MODULESPECIFIER_TYPES } = require("@babel/types");

window.onload = shuffle();
// let getalltiles = document
//   .querySelector(".main-tile")
//   .querySelectorAll(".tile");
// getalltiles.forEach((element) => {
//   element.addEventListener("mouseover", getall);
// });

// function getall() {
//   console.log(getalltiles);
// }

let tile1, tile2;
countbuttonclick = 0;
let chosenCardsArray = [];

//css styling function
function css(element, style) {
  for (const property in style) element.style[property] = style[property];
}

///invert cards function,inverts the cards on click
let invert = (event) => {
  // console.log(event.target.classList);
  console.log(event);
  console.log(countbuttonclick);
  if (event.returnValue == true) {
    console.log(event.target.nextElementSibling);
    chosenCardsArray.push(event.target.nextElementSibling);

    tile1 = "t1";
    //eventClassName = event.target.addClass
    eventClassName = event.target.classList.add(tile1);

    tile2 = "b1";
    event.target.nextElementSibling.classList.add(tile2);

    countbuttonclick += 1;
    console.log(chosenCardsArray);

    //condition to check the number of clicks
    if (countbuttonclick === 2) {
      // alert("you have clicked twice");
      compareText(chosenCardsArray[1], chosenCardsArray[0]);
    }
    checkForFinish();

    console.log(countbuttonclick);
  }
};

let win = (firstTile, secondTile, sound) => {
  //alert(text);
  sound.play();
  sound.loop = false;
  // console.log(firstTile.parentNode);
  firstTile.parentNode.style.clipPath = "circle(0)";
  secondTile.parentNode.style.clipPath = "circle(0)";
  //checkForFinish();
  chosenCardsArray = [];
};

let checkForFinish = () => {
  let tiles = document
    .querySelector(".container")
    .querySelectorAll(".main-tile");
  console.log(tiles);
  tiles.forEach((tile) => {
    console.log(tile.style.clipPath);
    if (tile.style.clipPath === "circle(0px at 50% 50%)") {
      alert("you won");
    }
  });
};
//this calls the win function after 1s
let winFunctionCall = (firstTile, secondTile, winSound) => {
  setTimeout(win, 1000, firstTile, secondTile, winSound);
};

let lost = (firstTile, secondTile, sound) => {
  sound.play();
  sound.loop = false;
  firstTile.classList.remove(
    firstTile.classList[firstTile.classList.length - 1]
  );
  firstTile.previousElementSibling.classList.remove(
    firstTile.previousElementSibling.classList[
      firstTile.previousElementSibling.classList.length - 1
    ]
  );

  console.log(firstTile.classList);
  secondTile.classList.remove(
    secondTile.classList[secondTile.classList.length - 1]
  );
  secondTile.previousElementSibling.classList.remove(
    secondTile.previousElementSibling.classList[
      secondTile.previousElementSibling.classList.length - 1
    ]
  );
  chosenCardsArray = [];
};

let compareText = (firstTile, secondTile) => {
  // let { src } = childNodes[1].src;
  const winSound = new Audio("audio/winSound.wav");
  const loseSound = new Audio("audio/lostSound.mp3");
  console.log(secondTile.src);
  firstTile.src === secondTile.src
    ? winFunctionCall(firstTile, secondTile, winSound)
    : lost(firstTile, secondTile, loseSound);
  countbuttonclick = 0;
};

let getalltiles = document
  .querySelector(".container")
  .querySelectorAll(".main-tile");
console.log(getalltiles);
getalltiles.forEach((element) => {
  console.log(element);
  element.addEventListener("click", invert, event);
});

function shuffle() {
  const gameStart = new Audio("audio/gameStart.wav");
  gameStart.play();
  gameStart.loop = false;

  console.log(
    typeof document.querySelector(".container").querySelectorAll("div")
  );
  let allElems = document.querySelector(".container").querySelectorAll("div");
  console.log(allElems.length);
  //console.log(typeof allElems);

  //converts the htmldomcollection object into an array
  let arr = Object.entries(
    document.querySelector(".container").querySelectorAll("div")
  );
  console.log(arr);

  let newarr = [];
  let x = 0;

  ///let x =arr in while
  while (x < allElems.length) {
    if (arr.length == 1) {
      console.log(arr);
      newarr.push(arr);
    }
    console.log("x value", x);
    arrLength = arr.length;
    console.log("arrlength", arrLength);
    let anynum = Math.floor(Math.random() * arrLength);

    console.log("random num", anynum);

    newarr.push(arr[anynum]);

    console.log("newarr", newarr);
    //console.log(newarr);
    console.log("original arr", arr);

    let remove = arr.splice(anynum, 1);
    console.log("filtered left", arr);
    console.log("filter", remove);
    // arr = remove;
    console.log("arr", arr);

    console.log(newarr);
    x++;
    //arrLength--;
  }

  console.log(newarr);
  ///let splice first param be 1 less than the original arr length
  console.log(newarr.splice(allElems.length - 1, 1));
  //document.write(newarr);
  console.log(newarr);

  let container = document.querySelector(".container");
  console.log(newarr[3][1]);
  console.log(container[1]);
  //removes individual node in the container element and pass in the shuffled
  for (let divElem = 0; divElem < newarr.length; divElem++) {
    container.replaceChild(newarr[divElem][1], container.childNodes[divElem]);
  }
}

//console.log(newarr);

// let elems = document.querySelector(".container");
// console.log(elems.length);
// elemsLength = elems.childNodes.length;
// for (a = 0; a < elemsLength; a++) {
//   elems.removeChild(elems.children[a]);
// }

// elems.children.removeAll();
// console.log(elems.children);

//let arr = ["aba", "kojo", "adwoa"];
//console.log(arr.length);
//let newarr = [];
// for (x = 0; x < arr.length; x++) {
//   console.log(x);
//   arrLength = arr.length;
//   console.log(arrLength);
//   let anynum = Math.floor(Math.random() * arrLength);

//   newarr.push(arr[anynum]);

//   console.log(newarr);
//   console.log(arr);

//   arr.splice(anynum);
//   console.log(newarr);
//   arr.filter(removeElement);
//   console.log(arr);

//    function removeElement() {
//      arr[anynum];
//      return console.log(arr);
//    }
//   arrLength--;
// }

// let x = 0;
// while (x < 3) {
//   if (arr.length == 1) {
//     console.log(arr);
//     newarr.push(arr);
//   }
//   console.log("x value", x);
//   arrLength = arr.length;
//   console.log("arrlength", arrLength);
//   let anynum = Math.floor(Math.random() * arrLength);
//   console.log("random num", anynum);
//   newarr.push(arr[anynum]);
//   console.log("newarr", newarr);
//   //console.log(newarr);
//   console.log("original arr", arr);
//   let remove = arr.splice(anynum, 1);
//   console.log("filtered left", arr);
//   console.log("filter", remove);
//   // arr = remove;
//   console.log("arr", arr);
//   console.log(newarr);
//   x++;
//   //arrLength--;
// }
// console.log(newarr);
// console.log(newarr.splice(2, 1));
// document.write(newarr);
