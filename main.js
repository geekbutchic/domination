strikeThroughFirstItem = () => {
  document.querySelector("li").style.textDecoration = "line-through";
};

strikeThroughFirstItem();

addImage = (id, url) => {
  document.querySelector(id).src = url;
};

addImage(
  "#image-1",
  "https://www.pets4homes.co.uk/images/classifieds/2018/10/02/2082233/large/cavalier-king-charles-spaniel-puppy-5bb31286e4168.jpg"
);
addImage(
  "#image-2",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/king-charles-cavalier-puppy-portrait-roy-jacob.jpg"
);
addImage(
  "#image-3",
  "http://3.bp.blogspot.com/-TuUwxi-_B60/T8nNqt-5s8I/AAAAAAAAAug/AptLf_dWBaY/s1600/Cavalier_King_Charles_Spaniel_Puppies_pic.jpg"
);

const removeLastLi = () => {
  document.querySelector("#arguments").lastElementChild.remove();
};

removeLastLi();
removeLastLi();

// 1. Write a function that takes in a node element and appends 
// it to the Arguments `<ul>`.

argumentAppends = (element) => {
  const arguments = document.querySelector("#arguments");
  arguments.appendChild(element);
};

// 2. Let's use it! Create an image element and pass it into your function.
const newImage = document.createElement("img");
newImage.src =
  "https://top13.net/wp-content/uploads/2015/11/rare-wild-cats-5.jpg";
argumentAppends(newImage);

// 3. Write a function that takes in an image element and makes its 
// height 30 pixels.

// Set it to 200px just so it looks more balanced 
makeSmall = (image) => {
    image.style.height = '200px';
}

// 4. Let's use it. Query and then pass in to the function one of the 
// images in the Image Area. It should become a small 30-pixel image.

const smallImage = document.querySelector('#image-1');
makeSmall(smallImage)

// 5. Write a function that takes in an element and gives it 
// the class `invisible`.

invisible = (element) => {
  element.className = 'invisible';
}
// Removes the we'll make forms that do something
const disappearingTextField = document.querySelector('textarea');
invisible(disappearingTextField);

// 7. Write a function that takes in two strings, one representing a font size and one 
// representing an id, and sets the thing with that id to have that size for its text.

const changeFontSize = (element, newFontSize) => {
  element.style.fontSize = newFontSize;
}
// Did 50px just to see dramatic difference
const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '50px');

// 1. Write a function that takes in text and returns a new `<li>` 
// with that text as its `innerText`.

makeTodo = (element) => {
  const arguments = document.querySelector("#arguments");
  arguments.appendChild(element);
};

const newLi = document.querySelector('li')
newLi.innerText = 'Adds something to this list.'
makeTodo(newLi);

const makeHeader = (text, size) => {
  const header = document.createElement('h' + size)
  header.innerText = text;
}

const header = makeHeader("I'm a header", 2);
argumentAppends(header)