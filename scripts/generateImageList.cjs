// scripts/generateImageList.cjs
const fs = require('fs');
const path = require('path');

function generateImageList(directoryPath, jsonFilePath) {
  let files = fs.readdirSync(directoryPath);

  // Filter out non-image files
  files = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  // Get file creation times and sort by them
  files = files.map(file => ({
    name: file,
    time: fs.statSync(path.join(directoryPath, file)).birthtime
  }));

  files.sort((a, b) => a.time - b.time);

  // Write the sorted list of image filenames to the JSON file
  fs.writeFileSync(
    jsonFilePath,
    JSON.stringify(files.map(file => file.name))
  );
}

const charactersDirectoryPath = path.join(__dirname, '..', 'static', 'images', 'characters');
const charactersJsonFilePath = path.join(__dirname, '..', 'src', 'imageListCharacters.json');
generateImageList(charactersDirectoryPath, charactersJsonFilePath);

const backgroundsDirectoryPath = path.join(__dirname, '..', 'static', 'images', 'backgrounds');
const backgroundsJsonFilePath = path.join(__dirname, '..', 'src', 'imageListBackgrounds.json');
generateImageList(backgroundsDirectoryPath, backgroundsJsonFilePath);