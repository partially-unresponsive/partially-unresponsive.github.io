window.onload = () => {
  butt = document.getElementById("button");
  options = document.getElementById("options");
  links = document.getElementsByClassName("bordered");
  pict = document.getElementById("pic1");
};

function someFunc() {
  butt.innerHTML = butt.innerHTML == "Thanks!" ? "Press me!" : "Thanks!";
  options.style.background =
    options.style.background == "red none repeat scroll 0% 0%"
      ? "blue"
      : "red none repeat scroll 0% 0%";
  options.innerHTML =
    options.innerHTML == '<a href="#"><h3>New Menu</h3></a>'
      ? "<h3>Menu</h3>"
      : '<a href="#"><h3>New Menu</h3></a>';
  pict.attributes[0].nodeValue =
    pict.attributes[0].nodeValue == "photos/background2.png"
      ? "photos/background1.jpg"
      : "photos/background2.png";
  console.log(
    options.style.background +
      " " +
      options.innerHTML +
      " " +
      links +
      pict.attributes
  );
  for (var i = 0; i < links.length; i++) {
    // links[i].firstChild.data =
    //   links[i].firstChild.data == "Text" ? "New text" : "Text";
    switch (i) {
      case 0:
        links[i].firstChild.data =
          links[i].firstChild.data == "First text"
            ? "Default text"
            : "First text";
        break;
      case 1:
        links[i].firstChild.data =
          links[i].firstChild.data == "Second text"
            ? "Default text"
            : "Second text";
        break;
      case 2:
        links[i].firstChild.data =
          links[i].firstChild.data == "Third text"
            ? "Default text"
            : "Third text";
        break;
      case 3:
        links[i].firstChild.data =
          links[i].firstChild.data == "Fourth text"
            ? "Default text"
            : "Fourth text";
        break;
      default:
        break;
    }
  }
}

function newFunc() {
  options.style.background =
    options.style.backgounrd == "green none repeat scroll 0% 0%"
      ? "blue"
      : "green none repeat scroll 0% 0%";
}
