const { translateToCN } = require('./index');

const fileName = process.argv.slice(2);

const content = "i am a chinese man";
 translateToCN(content)
     .then(res => {
         console.log(res);
     })


