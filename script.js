//-----------------------------------------------------
var reloadTwitter = function() {

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
   
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
   
    return t;
  }(document, "script", "twitter-wjs"));

}






//-------------------------------------------------------
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

var init = function(){
  var quote = grabQuote();
  //console.log(quote)
  document.querySelector('.quote-box').innerHTML = '<span>"</span>' + quote.text;
  document.querySelector('.author-box').innerHTML = "- " + quote.author;
  document.querySelector('.twitter-share-button').setAttribute("data-text", quote.text);
  reloadTwitter();
}

document.querySelector('#button').addEventListener("click", init);

reloadTwitter();
init();

