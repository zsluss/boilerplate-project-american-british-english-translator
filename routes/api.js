'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();


  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;

      if (text === undefined || locale == undefined) { return res.json({ error: 'Required field(s) missing' }) }
      if (text === "") { return res.json({ error: 'No text to translate' }) }
      if (locale !== 'british-to-american') { if (locale !== 'american-to-british') { return res.json({ error: 'Invalid value for locale field' }) } }
      if (locale === 'american-to-british') {
        let answer = translator.amtobr(text)
        console.log(answer)
        res.json({
          text: text,
          translation: answer
        })
      }
      if (locale === 'british-to-american') {
        translator.brtoam(text)
      }

      let valid
      if (valid === 'valid') { res.send("Everything looks good to me!") }



    })
}
