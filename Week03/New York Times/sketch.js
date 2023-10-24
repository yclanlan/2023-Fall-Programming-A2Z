 url='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cat&api-key=EvpIDSEYdrPAEzZAzqRgpRZ9C8FT5xRn'

let inputText = '';

function setup() {
  noCanvas();
  loadJSON(url, gotData);
  
}

function gotData(data) {
  

  let articles= data.response.docs;
  for(let i=0; i<articles.length; i++) {
  
    createElement('h1',i+1 + ".");
    createElement('h2',articles[i].headline.main);
    createElement('p',articles[i].snippet);
    createElement('h3','link to the article');

    createA(articles[i].web_url,articles[i].web_url);
    createElement('hr');
  
  }

  print(articles[0].headline.main);

}
