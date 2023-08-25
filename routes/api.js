'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();


  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;
      let answer
      if (text === undefined || locale == undefined)  return res.json({ error: 'Required field(s) missing' }) 
      if (text === "") return res.json({ error: 'No text to translate' }) 
      if (locale !== 'british-to-american') { if (locale !== 'american-to-british') return res.json({ error: 'Invalid value for locale field' })}
      if (locale === 'american-to-british') {answer = translator.amtobr(text)}
      if (locale === 'british-to-american') {answer = translator.brtoam(text) }
      if (answer === 'same') {
        res.json({
          text: text,
          translation: "Everything looks good to me!"
         })}
     else{
      console.log(answer)
      res.json({
        text: text,
        translation: answer
      })}

      



  })}
