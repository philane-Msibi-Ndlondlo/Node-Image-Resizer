const Jimp = require('jimp');
const chalk = require('chalk');

let resizedImage = null;
let imageToBeResized = './image/logo.jpg';

// Resize options (width: 200, height: 200, quality: 100)
Jimp.read(imageToBeResized)
  .then(image => {
    const resizedImage =  image
      .resize(200, 200) // resize
      .quality(100) // set JPEG quality
      .write(`${process.env.USERPROFILE}\\Desktop\\newimage.jpg`); // save

      console.log(chalk.green(`Image has been resized successfully. Image path ${process.env.USERPROFILE}\\Desktop\\newimage.jpg`))

      return resizedImage;
  })
  .catch(err => {
    console.log(chalk.red(err));
  });