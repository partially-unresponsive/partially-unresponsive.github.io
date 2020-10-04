// Script for going between pictures (1 - lastPic)

window.onload = () => {
  prev = document.getElementById("previous");
  prev.style.display = "none";
  next = document.getElementById("next");
  img = document.getElementById("pict1");
  pageIndx = 1;
  lastPic = 3; // Alter depending on num of images
  picNameSrc = "./photos/img";
  picType = ".jpg";
};
function navigateImg(move) {
  pageIndx += move;
  prev.style.display = pageIndx <= 1 ? "none" : "inline";
  next.style.display = pageIndx >= lastPic ? "none" : "inline";
  img.attributes[0].nodeValue = picNameSrc + pageIndx.toString(10) + picType; // toString(base)
  console.log(pageIndx);
}
