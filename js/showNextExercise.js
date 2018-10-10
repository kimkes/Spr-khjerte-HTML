var exerciseDiv = document.getElementById('exercise');

function showNextExercise() {
    exerciseDiv.innerHTML = `

        <p>Er katten er under sofaen?</p>
        <div class="box2">Insert picture here</div>
        <div class="picture2">
            <a target="_blank" href="oppaa.jpg">
                <img src="oppaa.jpg" alt="oppaa" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise2()">Neste oppgave</button>
        `;
}

function showCorrect() {    
    exerciseDiv.innerHTML +=
        '<div class="alertRight">Congratulation! You answered right!</div>';
    countScoreCorrect();
}

function showWrong() {    
    exerciseDiv.innerHTML +=
        '<div class="alertWrong">Sorry. You answered wrong.</div>';
    countScoreWrong();
}

function showNextExercise2() {
    exerciseDiv.innerHTML = `

    <div class="box3">Er katten over sofaen?</div>
    <div class="picture3">
    <a target="_blank" href="over.jpg">
        <img src="over.jpg" alt="Over" width="500" height="300" />
    </a>
    </div>
    <button class="button" onclick="showCorrect()">Riktig</button>
    <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise3()">Neste oppgave</button>
        `;
}