var totalCount = 0;
var correctCount = 0;
var totalCountTag = document.getElementById('totalCount');
var correctCountTag = document.getElementById('correctCount');

function countScoreWrong()
{
    totalCount++;
    showCounts();
}

function countScoreCorrect()
{
    totalCount++;
    correctCount++;
    showCounts();
}

function showCounts() {
    totalCountTag.innerHTML = totalCount;
    correctCountTag.innerHTML = correctCount;
}