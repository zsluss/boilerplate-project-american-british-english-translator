const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    amtobr(text) {
        let original = text
        for (let i = 0; i < 183; i++) {
            let regex = new RegExp(Object.keys(americanOnly)[i] , 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanOnly)[i]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) {adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                i = i - 1
                console.log(1)
            }
        }
        for (let k = 0; k < 1699; k++) {
            let regex = new RegExp(Object.keys(americanToBritishSpelling)[k], 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanToBritishSpelling)[k]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) {adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                k = k - 1
                console.log(2)
            }
        }
        for (let j = 0; j < 6; j++) {
            let regex = new RegExp(Object.keys(americanToBritishTitles)[j], 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanToBritishTitles)[j]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) {adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                console.log(3)
            }
        }
        let regexTime = /\d:\d/i
        if (original.search(regexTime) !== -1){
            console.log(original.search(regexTime))
            console.log(original[original.search(regexTime)])
          original = original.slice(0,original[original.search(regexTime)]) + '<span class=\"highlight\">.</span>' + original.slice(original[original.search(regexTime) + 3] ) 
        }
          
        return original
    }

    brtoam(text) {


    }

}

module.exports = Translator;