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

argumentAppends = (element) => {
  const arguments = document.querySelector("#arguments");
  arguments.appendChild(element);
};

const newImage = document.createElement("img");
newImage.src =
  "https://top13.net/wp-content/uploads/2015/11/rare-wild-cats-5.jpg";
argumentAppends(newImage);

