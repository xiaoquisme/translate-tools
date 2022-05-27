#!/usr/bin/env node

const fileName = process.argv.slice(2);

const translate = require("google-translate-api");


translate("I can speak english.", { to: 'zh-CN' })
    .then(res => {
        console.log(res.text);
        //=> Ik spreek Nederlands!
        console.log(res.from.text.autoCorrected);
        //=> true
        console.log(res.from.text.value);
        //=> I [speak] Dutch!
        console.log(res.from.text.didYouMean);
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    });

