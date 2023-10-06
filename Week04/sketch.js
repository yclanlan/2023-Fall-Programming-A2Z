let words;
let counts = {};
let keys = [];

function preload() {
    loadTextFile('kafka.txt');
}

function setup() {
    noCanvas();

}

function loadTextFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const chineseText = data;
            tokenizeChineseText(chineseText);
        })
        .catch(error => {
            console.error('ERROR：', error);
        });
}

function tokenizeChineseText(text) {

    console.log(text);
    let words = call_jieba_cut(text, function (result) {
        console.log(result);
        newText(result);
        wordCount(result.join('|'), 1); 
    })

    


}


function newText(words){

    for(var i=0; i< words.length; i++){
     
     var span = createSpan(words[i]);
      //put some await here so it will take a break between create every div.
     var space = createSpan(" ");

    }

  }




function wordCount(txt, num) {

    createElement("hr");
    let word = txt.split("|");

    for (let i = 0; i < word.length; i++) {
        if (!/\d+/.test(word[i])) {
            // 去除單詞中的標點符號，只保留文字字符
            const cleanWord = word[i].replace(/[，。！、 —— ]/g, '');

            if (counts[cleanWord] === undefined) {
                counts[cleanWord] = 1;
                keys.push(cleanWord);
            } else {
                counts[cleanWord] = counts[cleanWord] + 1;
            }
        }
    }

    keys.sort(compare);

    function compare(a, b) {
        var countA = counts[a];
        var countB = counts[b];
        return countB - countA; // 修改排序方式
    }

    let h2 = createElement('h2','Here is the top twenty most frequent words');

    for (let i = 1; i < 20; i++) {
        let key = keys[i];
        createDiv(key + " " + counts[key]);
        
    }
}






