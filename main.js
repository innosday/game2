const num = document.getElementById('number');
const number = Number(prompt("몇 명이 참가하나요?"));
num.textContent = number;
const $Button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
const scorenum = document.getElementById('scorenum');



let fallp =[];
console.log(scorenum)
let word;
let newWord;
let finorder

const onClickButton = () => {
    const order = Number($order.textContent);
    if (fallp.includes(order + 1)) {
        $order.textContent = order + 2;  
    }
    // else if(fallp.includes(number)) {
    //     $order.textContent = 1;
    // }
    else {
        if (!word || word[word.length - 1] === newWord[0]) {
            word = newWord;
            $word.textContent = word;
            if (order + 1 > number) {
                if (fallp.includes(1))
                     
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1; 
            }
        } else {
            alert("올바르지 않은 단어입니다! [ 틀린 사람 : " + order + "]");
            scorenum.append(order + " 번쨰 유저 탈락\n");
            
            fallp.push(order);
            console.log(fallp)
            
            if (order+1 > number) {
                order.textContent = 1;
            }
            else{
                $order.textContent = order + 1; 
            }
        }
    }
    $input.value = '';
    $input.focus();
    
};
const onInput = (event) => {
    newWord = event.target.value;
};




$Button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);