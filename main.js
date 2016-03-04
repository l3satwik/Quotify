$(document).ready(function(){

  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  var getQuote = function(data) {
    $(".quote").text(data.quoteText);
    var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' -' + data.quoteAuthor +' @chucking_satwik';

    if (data.quoteAuthor === '') {
      data.quoteAuthor = 'Unknown';
    }

    $(".author").text('Author: ' + data.quoteAuthor);
    $(".twitter-share-button").attr("href", quot);
  };
  $(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
  });

  $("#quote").click(function() {
    $.getJSON(url, getQuote, 'jsonp');
  });
});
