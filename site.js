var apiUrl = 'https://reqres.in/api/';

// documentation

// users list - 'users'
// user by id - 'users/6' 
// resources list - 'unknown'
// resource by id - 'unknown/4'


$('showques_1').on('click', function () {
    $('showques_1').fadeOut().promise().done(function(){
        $('ques_1').fadeIn(1000);
    });
});
$('showques_2').on('click', function () {
    $('ques_1').fadeOut().promise().done(function(){
        $('ques_2').fadeIn(1000);
    });
});
$('showques_3').on('click', function () {
    $('ques_2').fadeOut().promise().done(function(){
        $('ques_3').fadeIn(1000);
    });
});
