const num = document.getElementById('number');
const number = Number(prompt("몇 명이 참가하나요?"));
num.textContent = number;
const $Button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const scorenum = document.getElementById('scorenum');
let fallp =[];
let mannum = 0;
const man = [];
for (let i = 1; i <= number; i++) {
    man.push(i);
}
console.log(scorenum)
let word;
let newWord;
let finorder

const onClickButton = () => {
    const order = Number($order.textContent);
    // if (fallp.includes(order + 1)) {
    //     $order.textContent = order + 2;  
    // }
    // else if(fallp.includes(number)) {
    //     $order.textContent = 1;
    // }
    if (!word || word[word.length - 1] === newWord[0]) {
        word = newWord;           
        $word.textContent = word;
        if (mannum + 1 >= man.length) {
            $order.textContent = man[0];
            mannum = 0;

        } else {
            mannum += 1;    
            $order.textContent = man[mannum];
            // mannum += 1;    
        }
    } 
    else {
        alert("올바르지 않은 단어입니다! [ 틀린 사람 : " + order + "]");
        scorenum.append(order + " 번쨰 유저 탈락\n");
        fallp.push(mannum+1);
        man.splice(man.indexOf(mannum+1),1);
        console.log(man,mannum,fallp);
        if (mannum + 1 >= man.length) {
            $order.textContent = man[0];
            mannum = 0;

        } else {
            // mannum += 1;
            $order.textContent = man[mannum];
            mannum += 1;
        }
    }
    $input.value = '';
    $input.focus();
    
    if(man.length == 1) {
        $input.disabled = true;
        $Button.disabled = true;
        scorenum.value = (man[0] + "번님 승리!");
    }
};
const onInput = (event) => {
    newWord = event.target.value;
};




$Button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);