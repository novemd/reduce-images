# Reduce Images #

A quick and simple gulp, gulp-imagemin, and imagemin-pngquant solution to reduce the file size of images for web use.

**Note:** While you'll have better control using image editing software, this is a good solution for development.

## To Use ##

1. Clone the repository
2. Run `npm install`
3. Create the `imgsrc` directory
4. Place images you'd like to reduce the file size of into `imgsrc`
5. Run `gulp`
6. Collect your images from the `imgmin` directory

**Note:** It's a good idea to clean out both directories after you've run `gulp`.  Especially the `imgsrc` directory - otherwise you'll be re-reducing the images in that directory.
