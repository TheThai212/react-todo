var moment = require('moment');


console.log(moment().format());
console.log(Date());


//

 var now = moment();
 console.log('Curent timestamp', now.unix());
 var timestamp =  1459111648;
 var currentMomnent = moment.unix(timestamp);
 console.log('currentMomnent',currentMomnent.format('MMM D, YY @ h:mm a'));


//january 3rd,2016 @ 12:13 AM
console.log('currentMomnent',currentMomnent.format('MMMM Do, YYYY @ h:mm A'));
