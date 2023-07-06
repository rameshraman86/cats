const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Callig readfile...');

  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    console.log(`In readFile's callback: it has the data`);
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    }
    else {
      functionToRunWhenThingsAreDone(undefined);
    }
  });
};


module.exports = breedDetailsFromFile;