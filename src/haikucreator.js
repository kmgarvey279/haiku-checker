export function HaikuCreator(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

HaikuCreator.prototype.checkSyllable = function(stringToCheck) {
  var syllableCount = 0;
  var vowels = new Array('a', 'e', 'i', 'o', 'u');
  for(var i = 0; i < stringToCheck.length; i++) {
    if(stringToCheck[i].length <= 3) {
      syllableCount++
    } else {
      if(vowels.includes(stringToCheck[i]) && !vowels.includes(stringToCheck[i+1])) {
        if(i == 'e' && i == stringToCheck.length+1) {
          syllableCount;
          return true;
        } else {
          syllableCount++
          return false;
        }
      }
    }
  }

}

HaikuCreator.prototype.checkHaiku = function() {
  var splitLine1 = this.line1.split(" ");
  var splitLine2 = this.line2.split(" ");
  var splitLine3 = this.line3.split(" ");

  var syllableTotal1 = this.checkSyllable(splitLine1);
  var syllableTotal2 = this.checkSyllable(splitLine2);
  var syllableTotal3 = this.checkSyllable(splitLine3);

  if(syllableTotal1 == 5 && syllableTotal2 == 7 && syllableTotal3 == 5) {
    return true;
  } else {
    return false
  }
}
