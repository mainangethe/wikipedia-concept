let current = 0,
      articles = document.getElementsByTagName("article");
  
setInterval(function() {
  for(let i = 0; i < articles.length; i++) {
    articles[i].style.display = 'none';
  }

  current = (current != articles.length - 1) ? current + 1 : 0;
  articles[current].style.display = 'block';
}, 5000);