let name = "Pisti";

console.log(name + "'s apples");
console.log("Hello World!");

$('h1').text('We are having a 10 minute break until 17:05');
$('p').html('StayAtHome Coding Camp, Like:<span><strong>13</strong></span>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass(color);
$('h2').toggleClass(color);

$('ul').append('<li>My name is ' + name + '</li>');
$('#special-list-item').remove();

let addButtonHandler = () => {
    if ($('li').length < 5) {
        $('ul').append('<li>My name is ' + name + '</li>');
    } 
}

$('#add-button').click(addButtonHandler);

/*
ez ugyanaz mint 2 sorral feljebb, csak ott egy változóba raktuk, hogy később máshol is felhasználhassuk
$('#add-button').click(() => {
    $('ul').append('<li>My name is ' + name + '</li>');
})
*/

$('#remove-button').click(() => {
    $('li:last-child').remove();
})

let age = 33;

console.log('Starting the if');
console.log('This Is a Sentence'.toLowerCase());
console.log('This Is a Sentence'.toUpperCase());

if (age < 18) {
    console.log('Not old enough to drink');
} else {
    console.log('Odl enought to drink');
}

console.log('This is after the if');



//This is a single line JavaScript comment

/*
This is a multiline
JavaScript comment
*/ 

