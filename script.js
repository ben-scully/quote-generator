
var quoteArray = [
  {
    text: "Oh, I can barely lift my right arm ’cause I did so many. I don’t know if you heard me counting. I did over a thousand.",
    author: "Ron Burgundy",
    image: "images/anchorman_ron.png"
  },
  {
    text: "There were horses, and a man on fire, and I killed a guy with a trident.",
    author: "Brick Tamland",
    image: "images/anchorman_brick.png"
  },
  {
    text: "They’ve done studies, you know. 60 percent of the time, it works every time.",
    author: "Brian Fantana",
    image: "images/anchorman_brian.png"
  },
  {
    text: "It is anchorman, not anchorlady. And that is a scientific fact.",
    author: "Champ Kind",
    image: "images/anchorman_champ.png"
  },
  {
    text: "No vendas la piel del oso antes de cazarlo.",
    author: "Baxter",
    image: "images/anchorman_baxter.png"
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
  document.querySelector('.img-box').style.backgroundImage = "url(" + quote.image + ")";
  document.querySelector('.twitter-share-button').setAttribute("data-text", quote.text);
}

document.querySelector('#button').addEventListener("click", function(){
  init();
  updateTwitter();
});


init();
