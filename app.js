var capitalize = function() { // transforms text to be easier to read
  'use strict';
  $('body').toggleClass('uppercase');
};

var makeChange = function(string){ // takes in a string and prints out an excited version
    'use strict';
    var inputBox = $('#addExBox');
    string = inputBox.val() + '!!!!!!!!!!!!!!!!!!!';
    $('#addExheader').html(string);
    inputBox.val('Exciting huh?');
};

$('.jsload').on('click', function(e) { //loads partial views to reduce file calls
    'use strict';
    e.preventDefault();
    var url = this.href;
    $('#page').remove();
    $('#content').load(url + "#page").hide().fadeIn('fast');
});