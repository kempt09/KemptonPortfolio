var app = {
  capitalize: function(text){ // tranforms text to be easier to read
    'use strict';
    text = $('body').toggleClass('uppercase');
    return text;
  },
  makeChange: function(string){ // takes in a string and prints out and excited version
    'use strict';
    var inputBox = $('#addExBox');
    string = inputBox.val();
    string = string + '!!!!!!!!!!!!!!!!!!!';
    var notify = $('#changeString').append('<h1 id="somethingexciting">'+ string +'</h1>');
    inputBox.val('Exciting huh?');
    return notify;
  },
  partialViews: ($('.jsload').on('click', function(e) { //loads partial views to reduce file calls
    'use strict';
    e.preventDefault();
    var url = this.href;
    $('#page').remove();
    $('#content').load(url + "#page").hide().fadeIn('fast');
    }))
};
app.partialViews();