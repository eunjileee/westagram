const btn = document.querySelector('.upload');
const inputBar = document.querySelector('.write-comments');


// 화면에 뿌려주기
function showCommemnts(event) {
    const replVal = inputBar.value;
    const commentList = document.createElement('div') //div태그 생성
    const commentBox = document.querySelector('.feeds_cm');

    commentList.innerHTML = replVal;
    commentBox.appendChild(commentList);
    inputBar.value = '';
}

function handleInput(event) {
    if (inputBar.value) {
        btn.addEventListener('click', showCommemnts);
        console.dir(event);
        if (event.keyCode === 13) {
            showCommemnts();
            btn.style.opacity = 1;
        }
    }
}
inputBar.addEventListener('keyup', handleInput);

