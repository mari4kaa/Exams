// Change double quotation to open or close quotation

'use strict';

const quotes = (str) => {
  let res = '';
  let odd = true;
  for (const element of str) {
    if (element === '"') {
      res += (odd ? '«' : '»');
      odd = !odd;
    } else {
      res += element;
    }
  }
  return res;
};

require('../Tests/quotes.js')(quotes);
