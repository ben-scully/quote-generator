
var quoteArray = [
  {
    text: "What a blessing it would be if we could open and shut our ears as easily as we open and shut our eyes!",
    author: "Georg Christoph Lichtenberg"
  },
  {
    text: "Understand that the right to choose your own path is a sacred privilege. Use it. Dwell in possiblity.",
    author: "Oprah Winfrey"
  },
  {
    text: "I love life...Yeah, I'm sad, but at the same time, I'm really happy that something could make me feel that sad. It's like...It makes me feel alive, you know. It makes me feel human. The only way I could feel this sad now is if I felt something really good before. So I have to take the bad with the good. So I guess what I'm feeling is like a beautiful sadness.",
    author: "Trey Parker and Matt Stone"
  },
  {
    text: "She runs the gamut of emotions from A to B",
    author: "Dorothy Parker"
  }

];

var grabQuote = function() {
  var random = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[random];
};

var updateTwitter = function(){
      $('.twitter-share-button').remove();
      var tweetBtn = $('<a></a>')
            .addClass('twitter-share-button')
            .attr('href', 'http://twitter.com/share')
            .attr('data-url', 'http://test.com')
            .attr('data-text', $('.quote-box').text());
        $('#twitter').append(tweetBtn);
        twttr.widgets.load();
};

var init = function(){
  var quote = grabQuote();
  document.querySelector('.quote-box').innerHTML = '<span>"</span>' + quote.text;
  document.querySelector('.author-box').innerHTML = "- " + quote.author;
  document.querySelector('.twitter-share-button').setAttribute("data-text", quote.text);
}

document.querySelector('#button').addEventListener("click", function(){
  init();
  updateTwitter();
});


init();
