const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test('Mangoes are my favorite fruit.', function() {
        assert.isString(translator.amtobr('Mangoes are my favorite fruit.'),true) 
     });
     test('I ate yogurt for breakfast.', function() {
        assert.isString(translator.amtobr('I ate yogurt for breakfast.'),true) 
     });
     test('We had a party at my friend\'s condo', function() {
        assert.isString(translator.amtobr('We had a party at my friend\'s condo.'),true) 
     });
     test('We had a party at my friend\'s condo.', function() {
        assert.isString(translator.amtobr('Can you toss this in the trashcan for me?'),true) 
     });
     test('We had a party at my friend\'s condo.', function() {
        assert.isString(translator.amtobr('The parking lot was full.'),true) 
     });
     test('Like a high tech Rube Goldberg machine.', function() {
        assert.isString(translator.amtobr('like a high tech Rube Goldberg machine.'),true) 
     });
     test('to play hooky', function() {
        assert.isString(translator.amtobr('To play hooky means to skip class or work.'),true) 
     });
     test('No Mr. Bond, I expect you to die..', function() {
        assert.isString(translator.amtobr('No Mr. Bond, I expect you to die.'),true) 
     });
     test('Dr. Grosh will see you now.', function() {
        assert.isString(translator.amtobr('Dr. Grosh will see you now.'),true) 
     });
     test('Lunch is at 12:15 today.', function() {
        assert.isString(translator.amtobr('Lunch is at 12:15 today.'),true) 
     });
     test('We watched the footie match for a while.', function() {
        assert.isString(translator.brtoam('We watched the footie match for a while.'),true) 
     });
     test('Paracetamol takes up to an hour to work.', function() {
        assert.isString(translator.brtoam('Paracetamol takes up to an hour to work.'),true) 
     });
     test('First, caramelise the onions.', function() {
        assert.isString(translator.brtoam('First, caramelise the onions.'),true) 
     });
     test('I spent the bank holiday at the funfair.', function() {
        assert.isString(translator.brtoam('I spent the bank holiday at the funfair.'),true) 
     });
     test('I had a bicky then went to the chippy.', function() {
        assert.isString(translator.brtoam('I had a bicky then went to the chippy.'),true) 
     });
     test('I\'ve just got bits and bobs in my bum bag.', function() {
        assert.isString(translator.brtoam('I\'ve just got bits and bobs in my bum bag.'),true) 
     });
     test(' The car boot sale at Boxted Airfield was called off.', function() {
        assert.isString(translator.brtoam('The car boot sale at Boxted Airfield was called off.'),true) 
     });
     test('Have you met Mrs Kalyani?', function() {
        assert.isString(translator.brtoam('Have you met Mrs Kalyani?'),true) 
     });
     test('Prof Joyner of King\'s College, London.', function() {
        assert.isString(translator.brtoam('Prof Joyner of King\'s College, London.'),true) 
     });
     test('Tea time is usually around 4 or 4.30.', function() {
        assert.isString(translator.brtoam('Tea time is usually around 4 or 4.30.'),true) 
     });
     test('Mangoes are my favorite fruit.', function() {
      assert.equal(translator.amtobr('Mangoes are my favorite fruit.'),'Mangoes are my <span class="highlight">favourite</span> fruit.') 
   });
   test('I ate yogurt for breakfast.', function() {
      assert.equal(translator.amtobr('I ate yogurt for breakfast.'),'I ate <span class="highlight">yoghurt</span> for breakfast.') 
   });
   test('We watched the footie match for a while.', function() {
      assert.equal(translator.brtoam('We watched the footie match for a while.'),'We watched the <span class="highlight">soccer</span> match for a while.') 
   });
   test('Paracetamol takes up to an hour to work.', function() {
      assert.equal(translator.brtoam('Paracetamol takes up to an hour to work.'),'<span class="highlight">Tylenol</span> takes up to an hour to work.') 
   });

});




