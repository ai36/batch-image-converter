const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Папка с исходными PNG изображениями
const inputFolder = 'src/img';
// Папка для сохранения сконвертированных изображений
const outputFolder = 'dist/img';

// Создание папки для вывода, если ее нет
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Получение всех файлов из папки
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки:', err);
        return;
    }

    // Фильтрация только PNG файлов
    const imgFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    // Проход по каждому PNG файлу
    imgFiles.forEach(file => {
        const filePath = path.join(inputFolder, file);
        const fileName = path.parse(file).name;

        // Конвертация в JPG
        sharp(filePath)
            .jpeg()
            .toFile(path.join(outputFolder, `${fileName}.jpg`))
            .then(() => console.log(`${file} конвертирован в JPG`))
            .catch(err => console.error('Ошибка конвертации в JPG:', err));

        // Конвертация в WebP
        sharp(filePath)
            .webp()
            .toFile(path.join(outputFolder, `${fileName}.webp`))
            .then(() => console.log(`${file} конвертирован в WebP`))
            .catch(err => console.error('Ошибка конвертации в WebP:', err));

        // Конвертация в AVIF
        sharp(filePath)
            .avif()
            .toFile(path.join(outputFolder, `${fileName}.avif`))
            .then(() => console.log(`${file} конвертирован в AVIF`))
            .catch(err => console.error('Ошибка конвертации в AVIF:', err));
    });
});