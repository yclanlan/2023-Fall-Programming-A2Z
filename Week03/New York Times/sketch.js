var url='https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EvpIDSEYdrPAEzZAzqRgpRZ9C8FT5xRn'

function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  let articles= data.response.docs;
  for(let i=0; i<articles.length; i++) {
  
    createElement('h1',articles[i].headline.main);
    createElement('p',articles[i].snippet);
    createElement('hr');
  
  }

  print(articles[0].headline.main);

}
