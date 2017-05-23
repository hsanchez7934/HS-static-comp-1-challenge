$('#front-arrow').on('click', switchImage);
$('#back-arrow').on('click', switchBack);

function switchImage() {
  console.log('test');
  var imageContainer = $('aside');
  if(imageContainer.css('backgroundImage', 'url(assets/johndilinger.jpg)')) {
    imageContainer.css('backgroundImage', 'url(assets/johndil2.jpg)');
  }
}

function switchBack() {
  var imageContainer = $('aside');
  if(imageContainer.css('backgroundImage', 'url(assets/johndilinger.jpg)')) {
    imageContainer.css('backgroundImage', 'url(assets/johndil3.jpg)');
  }
}
