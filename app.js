
// Loads partial views to reduce calls to download external files

$('.jsload').on('click', function(e) {
  'use strict';
  e.preventDefault();
  var url = this.href;
  $('#page').remove();
  $('#content').load(url + "#page").hide().fadeIn('fast');
});
