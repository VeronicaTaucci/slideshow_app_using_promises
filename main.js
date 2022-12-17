let imageLinks = ['./images/poster1.png','./images/poster2.png','./images/poster3.png','./images/poster4.png','./images/poster5.png']


let currentImageIndex = 0;

const displayImage = (imageUrl) => {
  // code to display the image using the imageUrl
  document.querySelector('.image').style.backgroundImage = `url(${imageUrl})`;
};

const nextImage = () => { //function returns a promise that will resolve after 1 second (1000 milliseconds). This is used to give the image time to load before moving on to the next one.
  currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
  const nextImageUrl = imageLinks[currentImageIndex];
  return new Promise((resolve) => {
    setTimeout(() => {
      displayImage(nextImageUrl);
      resolve();
    }, 1000);
  });
};

const startSlideshow = () => { //starts the slideshow by calling the nextImage function and then setting a timeout to call itself again after 2 seconds
  nextImage().then(() => { //This creates a loop that displays each image in the imageLinks array and then waits 2 seconds before displaying the next one.
    setTimeout(startSlideshow, 2000);
  });
};

startSlideshow();