const Jimp = require('jimp');
const pathFinder = require('platform-folders');
const chalk = require('chalk');

let imageToBeResized = './image/logo.jpg';

// Resize options (width: 200, height: 200, quality: 100)
Jimp.read(imageToBeResized)
  .then(image => {
    const resizedImage =  image
      .resize(200, 200) // resize
      .quality(100) // set JPEG quality
      .write(`${pathFinder.getDesktopFolder()}\\newimage.jpg`); // save

      console.log(chalk.green(`Image has been resized successfully. Image path: ${pathFinder.getDesktopFolder()}\\newimage.jpg`))

      return resizedImage;
  })
  .catch(err => {
    console.log(chalk.red(err));
  });