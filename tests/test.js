
var stringFormUtils = require('../src/js/stringFormUtils');
var assert = require("assert");

describe('Test space', function(){

  it('to half width', function(){
    assert.equal(stringFormUtils.transformHalfwidth("　"), " ");
  });

  it('to full width', function(){
    assert.equal(stringFormUtils.transformFullwidth(" "), "　");
  });
});

describe('Test 33~126 of words', function(){
  var min = 33;
  var max = 126;
  var wordArray = [];
  var fullwidthWordArray = [];
  var wordStr;
  var fullwidthWordStr;

  for ( var index = min; index <= max; index++ )
  {
    wordArray.push( String.fromCharCode(index) );
    fullwidthWordArray.push( String.fromCharCode(index + 65248) );
  }

  wordStr = wordArray.join('');
  fullwidthWordStr = fullwidthWordArray.join('');

  it('to full width', function(){
    assert.equal(stringFormUtils.transformFullwidth(wordStr), fullwidthWordStr);
  });

  it('to half width', function(){
    assert.equal(stringFormUtils.transformHalfwidth(fullwidthWordStr), wordStr);
  });

  it('full width to full width', function(){
    assert.equal(stringFormUtils.transformFullwidth(fullwidthWordStr), fullwidthWordStr);
  });

  it('half width to half width', function(){
    assert.equal(stringFormUtils.transformHalfwidth(wordStr), wordStr);
  });

});

describe('Text other words', function(){
  var strs = String.fromCharCode(28204) + String.fromCharCode(35430);

  it('full width', function(){
    assert.equal(stringFormUtils.transformFullwidth(strs), strs);
  });

  it('half width', function(){
    assert.equal(stringFormUtils.transformHalfwidth(strs), strs);
  });
});

