const cr2Raw = require('cr2-raw');
const fs = require('fs');
 
const convert = (source, destination) => new Promise((resolve, reject)=> {
  try{
    const raw = cr2Raw(source);
    fs.writeFileSync(destination, raw.previewImage());
  }catch(error){
    console.log(error);
    resolve(null);
  }

});


const sourceFolder = './CR2';
const destinationFolder = './JPG';

fs.readdir(sourceFolder, (err, files) => {
  const convertCalls = files.map((file) => {
    const source = `${sourceFolder}/${file}`;
    const destination = `${destinationFolder}/${file}`.replace('.CR2', '.jpg');
    return convert(source, destination);
  });
  Promise.all(convertCalls, console.log);
});