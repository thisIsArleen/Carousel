function showbig(pic) {
  console.log(pic);

  document.getElementById("bigpic").src = pic;
}

function calcslide(x) {
  var maximages = 11;

  var startpath = "pix3/birds";

  var extension = ".png";

  var currentimage = document.getElementById("bigpic").src;

  var dotat = currentimage.indexOf(extension);

  var stringnumber = currentimage.substr(dotat - 2, 2);

  var nextnumber = parseInt(stringnumber) + x;

  console.log(nextnumber);
  if (nextnumber < 1) {
    nextnumber = maximages;
  }
  //If nextnum is greater than maximages, wrap around to 1.
  if (nextnumber > maximages) {
    nextnumber = 1;
  }
  var twodigitnum = ("0" + nextnumber).slice(-2);

  var showimg = startpath + twodigitnum + extension;

  console.log(showimg);

  showbig(showimg);
}
