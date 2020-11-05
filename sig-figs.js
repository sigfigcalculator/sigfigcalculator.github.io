String.prototype.replaceAt = function (index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
}

function SigFloat(str) {
  if(typeof str == 'number') {
    this.fixed = str.toString();
  } else if (parseFloat(str)) {
    this.fixed = str;
  } else {
    this.fixed = '0';
  }
}

SigFloat.containsSigDigit = function(str) {
  for (var i = 0; i < str.length; i++) {
    var j = parseInt(str.charAt(i));
    if ((j && j != 0) || str.charAt(i) == '.') {
      return true;
    }
  }
  return false;
}

// Only the digits to the right of the decimal place are considered significant in a logarithmic value.
SigFloat.log = function(sf) {
    if(sf.toFloat && sf.toFloat() > 0) {
      var logAsFloat = Math.log(sf.toFloat());
      var intLength = (parseInt(logAsFloat) + '').length;
      var numSigFigs = sf.sigFigures() + intLength; // accounting for non-significant digits in the result
      var logsf = new SigFloat(logAsFloat + '');
      return logsf.withSigFigures(numSigFigs);
    } else {
      return new SigFloat('0');
    }
}

SigFloat.prototype.toFixed = function() {
  var str = this.fixed;
  var arr = str.split('.');
  if (arr.length == 1) {
    return str;
  }
  return parseFloat(str).toFixed(arr[1].length);
}

SigFloat.prototype.toFloat = function() {
  return parseFloat(this.fixed);
}

SigFloat.prototype.toString = function() {
  return this.fixed;
}

SigFloat.prototype.trailingZeros = function() {
    var decimalCorrection = 0;
    if (this.toFloat() == parseInt(this.toFloat()) && this.toFixed() != this.toFloat().toString()) {
      decimalCorrection = -1;
    }
    return (this.toFixed().length - this.toFloat().toString().length + decimalCorrection);
}

SigFloat.prototype.isSignificantAt = function(index) {
  var flStr = this.toString();
  var flChar = flStr.charAt(index);
  if (! (parseInt(flChar) || parseInt(flChar) === 0)) { // If character isn't an integer
    return false;
  }
  if ((flStr.substring(0, index).match(/^[-\.0]+$/g) || index == 0) && parseInt(flChar) === 0) { // If character is a leading zero
    return false;
  }
  if (flStr.substring(0, index).match(/[eE]/g)) { // If character is the argument of an exponent (e.g. "23" in 6.022e+23)
  	return false;
  }
  if (parseInt(flChar) != 0) { // If character is a non-zero integer
    return true;
  }
  if (SigFloat.containsSigDigit(flStr.substring(index + 1))) { // If character is followed by a significant digit
    return true;
  }
  if (flStr.substring(0, index).match(/\./g) && ! SigFloat.containsSigDigit(flStr.substring(index + 1))) { // If character is a trailing zero
    return true;
  }
  return false;
}

SigFloat.prototype.sigFigures = function() {
  var flStr = this.toString(),
      count = 0;
  for (var i = 0; i < flStr.length; i++) {
    count += (this.isSignificantAt(i) * 1);
  }
  return count;
}

SigFloat.prototype.withSigFigures = function(n) {
  if (n >= this.sigFigures() || ! parseInt(n + '') || n < 0) {
    return this;
  }
  
  var sciNotArr = this.toString().split(/[eE]/);
  var flStr = sciNotArr[0];
  var sfCount = 0;
  var j = 0;
  while (sfCount < (n - 1)) {
      sfCount += (this.isSignificantAt(j) * 1);
      j++;
  }
  if(flStr.charAt(j) == '.') {
    j++;
  }
  var toRound = flStr.substring(j).replace(/\./g, '');
  toRound = toRound.substring(0, 1) + '.' + toRound.substring(1);
  flStr = flStr.replaceAt(j, Math.round(parseFloat(toRound)).toString());
  j++;
  while (j < flStr.length) {
    if (flStr.charAt(j) != '.') {
      flStr = flStr.replaceAt(j, '0');
    }
    j++;
  }
  if (parseFloat(flStr)) {
    if (sciNotArr.length == 2) {
    	return new SigFloat(parseFloat(flStr + 'e' + sciNotArr[1]).toString());
    } else {
    	return new SigFloat(parseFloat(flStr).toString());
    }
  } else {
    return new SigFloat('0');
  }
}