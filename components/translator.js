const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    amtobr(text) {
        let original = text
        for (let i = 0; i < 183; i++) {
            let regex = new RegExp(Object.keys(americanOnly)[i], 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanOnly)[i]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                i = i - 1
            }
        }
        for (let k = 0; k < 1699; k++) {
            let regex = new RegExp(Object.keys(americanToBritishSpelling)[k], 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanToBritishSpelling)[k]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                k = k - 1
            }
        }
        for (let j = 0; j < 6; j++) {
            let regex = new RegExp(Object.keys(americanToBritishTitles)[j], 'i')  //Object.values for the side
            if (original.search(regex) !== -1) {
                let adjustment = Object.values(americanToBritishTitles)[j]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
            }
        }
        let regexTime = /\d:\d\d/i
        if (original.search(regexTime) !== -1) {
            let adjust = original.slice(original.search(regexTime) - 1, original.search(regexTime) + 4)
            original = original.slice(0, original.search(regexTime) - 1) + '<span class=\"highlight\">' + adjust.replace(':', '.') + '</span>' + original.slice(original.search(regexTime) + 4, original.length)
        }

        if (original === text) { return 'same' }
        else { return original }
    }

    brtoam(text) {
        let original = text
        for (let i = 0; i < 243; i++) {
            let newRegex = Object.keys(britishOnly)[i]
            let regex = new RegExp(newRegex, 'i')

            if (original.search(regex) !== -1) {
                let adjustment = Object.values(britishOnly)[i]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                let spot = original.search(regex) + Object.keys(britishOnly)[i].length
                if (original.charAt(spot) === " " || original.charAt(spot) === ".") {
                    original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                }
            }
        }
        for (let k = 0; k < 1699; k++) {
            let regex = new RegExp(Object.values(americanToBritishSpelling)[k], 'i')
            if (original.search(regex) !== -1) {
                let adjustment = Object.keys(americanToBritishSpelling)[k]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
                k = k - 1
            }
        }
        for (let j = 0; j < 6; j++) {
            let regex = new RegExp(Object.values(americanToBritishTitles)[j], 'i')
            if (original.search(regex) !== -1) {
                let adjustment = Object.keys(americanToBritishTitles)[j]
                if (original[original.search(regex)] === original[original.search(regex)].toUpperCase()) { adjustment = adjustment[0].toUpperCase() + adjustment.slice(1) }
                let spot = original.search(regex) + Object.values(americanToBritishTitles)[j].length
                if (original.charAt(spot) === " " || original.charAt(spot) === ".")
                    original = original.replace(regex, "<span class=\"highlight\">" + adjustment + "</span>")
            }
        }
        let regexTime = /\d.\d\d/    //this doesnt like : not sure why
        if (original.search(regexTime) !== -1) {
            let adjust = original.slice(original.search(regexTime) - 1, original.search(regexTime) + 4)  // if its a 3 digit number at the beginning of statement, it will fail but i just need to write an if statement and adjust the spacing. 
            original = original.slice(0, original.search(regexTime) - 1) + '<span class=\"highlight\">' + adjust.replace('.', ':') + '</span>' + original.slice(original.search(regexTime) + 4, original.length)
        }
        
        if (original === text) { return 'same' }
        else { return original }
    }

}

module.exports = Translator;