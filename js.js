$(document).ready(function(){
  let quoteText, quoteAuthor;

  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      format: 'jsonp',
      lang:'en'
      },
        success: function (response) {
          quoteText = response.quoteText;
          quoteAuthor = response.quoteAuthor;
          $('#quoteText').text(quoteText);
          if(quoteAuthor){
            $('#author').text('-' + quoteAuthor);
          } else {
            $('#author').text('-unknown')
          }
        }
    });
  }

  getNewQuote();

  $('#newQuote').on('click', function(event){
      event.preventDefault();
      getNewQuote();
  });

  $('.twitIt').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText + '--' + quoteAuthor))
  });
  
});
