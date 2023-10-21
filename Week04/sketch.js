let counts = {};
let keys = {};
let inputText = ''; // To store user input

function setup() {
    noCanvas();


}

function clearCounts() {
    counts = {};
    keys = {};
    selectAll('h2', 'div', 'hr').forEach(element => element.remove());
}

function draw() {
    // You can leave this function empty
}

function analyzeText() {
    clearCounts();
    inputText = select('#inputText').value();
    tokenizeChineseText(inputText);
}


function tokenizeChineseText(text) {
    let words = call_jieba_cut(text, function (result) {
        newText(result);
        wordCount(result.join('|'), 1);
    });
}

function newText(words) {
    for (let i = 0; i < words.length; i++) {
        let span = createSpan(words[i]);
        span.parent('analysisResults');
        let space = createSpan(" ");
        space.parent('analysisResults');
    }
}

function wordCount(txt, num) {
    let word = txt.split("|");

    for (let i = 0; i < word.length; i++) {
        if (!/\d+/.test(word[i])) {
            const cleanWord = word[i].replace(
                /[，。！？：；『』「」“”、 —— ]/g, 'Punctuation Marks');

            if (counts[cleanWord] === undefined) {
                counts[cleanWord] = 1;
            } else {
                counts[cleanWord] += 1;
            }
        }
    }

    // Convert counts object to an array for sorting
    keys = Object.keys(counts);
    keys.sort(compare);

    function compare(a, b) {
        return counts[b] - counts[a];
    }

    let hr = createElement('hr');
    hr.parent('analysisResults');
    
    let h2 = createElement('h2', 'Here are the top twenty most frequent words');
    h2.parent('analysisResults');

    

    for (let i = 0; i < Math.min(keys.length, 20); i++) {
        let key = keys[i];
        let words = createDiv(key + " : " + counts[key]);
        words.parent('analysisResults');

        console.log(key + " : " + counts[key]);
    }



    
}
