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

const makeSmall = (image) => {
    image.style.height = '30px';
}

// 4. Let's use it. Query and then pass in to the function one of the 
// images in the Image Area. It should become a small 30-pixel image.

const smallImage = document.querySelector('#image-1');
makeSmall('#image-1')

