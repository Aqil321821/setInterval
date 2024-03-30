
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');


let inetervalID;









function startChange() {
    if (!inetervalID) {
        inetervalID = setInterval(changeColor, 1000);

    }

}

function changeColor() {

    if (document.body.style.backgroundColor === 'black') {

        document.body.style.backgroundColor = 'white';
        document.body.style.color ='black';

    }
    else{
        document.body.style.backgroundColor ='black';
        document.body.style.color = 'white';
    }


}







function stopChange() {
    clearInterval(inetervalID);

}


// event listener

stopBtn.addEventListener('click', stopChange);
startBtn.addEventListener('click', startChange);
