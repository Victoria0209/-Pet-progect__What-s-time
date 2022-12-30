let oclock = [{
    rus: '12:00',
    eng: 'twelve oclock',
}, {
    rus: '12:05',
    eng: 'five past twelve',
}, {
    rus: '12:15',
    eng: 'quarter past twelve',
}, {
    rus: '12:30',
    eng: 'half past twelve',
}, {
    rus: '12:35',
    eng: 'twenty-five to one',
}, {
    rus: '12:45',
    eng: 'quarter to one',
}, {
    rus: '12:55',
    eng: 'five to one',
}, {
    rus: '13:00',
    eng: 'one oclock',
}, {
    rus: '13:05',
    eng: 'five past one',
}, {
    rus: '13:10',
    eng: 'ten past one',
}, {
    rus: '13:15',
    eng: 'quarter past one',
}, {
    rus: '13:20',
    eng: 'twenty past one',
}, {
    rus: '15:20',
    eng: 'twenty past three',
}, {
    rus: '15:00',
    eng: 'three oclock',
}, {
    rus: '16:00',
    eng: 'four oclock',
}, {
    rus: '16:25',
    eng: 'twenty-five past four',
}, {
    rus: '16:30',
    eng: 'half past four',
}, {
    rus: '16:45',
    eng: 'quarter to five',
}, {
    rus: '20:00',
    eng: 'eight oclock',
}, {
    rus: '20:05',
    eng: 'five past eight',
}, {
    rus: '20:15',
    eng: 'quarter past eight',
}, {
    rus: '9:00',
    eng: 'nine oclock',
}, {
    rus: '9:30',
    eng: 'half past nine',
}, {
    rus: '9:55',
    eng: 'five to ten',
}, {
    rus: '10:00',
    eng: 'ten oclock',
}, {
    rus: '10:35',
    eng: 'twenty-five to eleven',
}, {
    rus: '11:35',
    eng: 'twenty-five to twelve',
}, {
    rus: '11:45',
    eng: 'quarter to twelve',
}, ]

let rusTime = document.querySelector('.task__rus');
let btn = document.querySelector('.task__eng-btn');
let input = document.querySelector('.task__eng-input');
let task = document.querySelector('.task');

const rightAnswerTemplate = document.querySelector('#right')
    .content
    .querySelector('.rightAnswerBlock');
const similarLinkRightFragment = document.createDocumentFragment();

const errorAnswerTemplate = document.querySelector('#error')
    .content
    .querySelector('.errorAnswerBlock');
const similarLinkErrorFragment = document.createDocumentFragment();

let randomNum = ''

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function insertRandomTime() {
    randomNum = getRandomInt(oclock.length)
    rusTime.innerHTML = oclock[randomNum].rus
}
insertRandomTime()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === oclock[randomNum].eng) {
        errorAnswerTemplate.remove();
        console.log('ok');

        similarLinkRightFragment.append(rightAnswerTemplate);
        task.append(similarLinkRightFragment);

        setTimeout(function run() {
            rightAnswerTemplate.remove();
        }, 500)

        insertRandomTime();
        input.value = '';

    } else {
        console.log('error');
        input.value = '';
        similarLinkErrorFragment.append(errorAnswerTemplate);
        task.append(similarLinkErrorFragment);
    }

})