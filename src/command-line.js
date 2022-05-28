const { translateToCN } = require('./index');
const { program } = require('commander');
const fs = require('fs');

program
    .name("xiaoqu-translate")
    .description("a tools for google translate")
    .option("-f, --file <string>", "input file")
    .version("1.0.0");

program.parse();

const filePath = program.opts().file

const content = fs.readFileSync(filePath, { encoding: 'utf8' });

const getFileWithExtension = filePath => {
    const index = filePath.lastIndexOf('.');
    return { path: filePath.substring(0, index), extension: filePath.substring(index, filePath.length) }
}

function getFileName(fileWithExtension) {
    return `${ fileWithExtension.path }-zh_cn${ fileWithExtension.extension }`;
}

translateToCN(content)
    .then(res => {
        const fileWithExtension = getFileWithExtension(filePath);
        let newFileName = getFileName(fileWithExtension);
        fs.writeFileSync(newFileName, res)
        console.log(`file:${ filePath },converted to ${ newFileName }`);
    })


