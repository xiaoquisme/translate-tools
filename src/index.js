const translate = require("./utils/translate");

function translateToCN(content) {

    return translate(content, { to: 'zh-CN' })
        .then(res => {
            return res.text;
        })
        .catch(e => {
            console.error(e);
            return e;
        });
}


module.exports = { translateToCN }

