$('#front-arrow').on('click', switchImage);

function switchImage() {
  console.log('test');
  var imageContainer = $('aside');
  if(imageContainer.css('backgroundImage', 'url(assets/johndilinger.jpg)') === true) {
    imageContainer.css('backgroundImage', 'url(assets/johndil2.jpg)');
  }
  else if (imageContainer.css('backgroundImage', 'url(assets/johndil2.jpg)') === true) {
    imageContainer.css('backgroundImage', 'url(assets/johndil3.jpg)');
  }
}
