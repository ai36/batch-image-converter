const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// source folder with PNG images
const inputFolder = 'src/img';
// destination folder for converted images
const outputFolder = 'dist/img';

// create the source folder if it does not exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// list of images from source folder
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки:', err);
        return;
    }

    // select only PNG images
    const imgFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    // for every PNG image
    imgFiles.forEach(file => {
        const filePath = path.join(inputFolder, file);
        const fileName = path.parse(file).name;

        // convert to JPG
        sharp(filePath)
            .jpeg()
            .toFile(path.join(outputFolder, `${fileName}.jpg`))
            .then(() => console.log(`${file} конвертирован в JPG`))
            .catch(err => console.error('Ошибка конвертации в JPG:', err));
        // convert to WebP
        sharp(filePath)
            .webp()
            .toFile(path.join(outputFolder, `${fileName}.webp`))
            .then(() => console.log(`${file} конвертирован в WebP`))
            .catch(err => console.error('Ошибка конвертации в WebP:', err));
        // convert to AVIF
        sharp(filePath)
            .avif()
            .toFile(path.join(outputFolder, `${fileName}.avif`))
            .then(() => console.log(`${file} конвертирован в AVIF`))
            .catch(err => console.error('Ошибка конвертации в AVIF:', err));
    });
});