#!/usr/bin/env node

const fileName = process.argv.slice(2);

const translate = require("google-translate-api");


translate("# I can speak english.", { to: 'zh-CN' })
    .then(res => {
        return res.text;
    })
    .catch(e => {
        console.error(e);
        return e;
    });

module.exports = { translate }
