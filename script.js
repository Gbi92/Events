$('#btn1').on ('click', () => {
    console.log("Yeah, you clicked me");
});

$('#btn2').on ('click', () => {
    $('#btn1').text("Why you do this?");
});

$('#btn3').on ('click', () => {
    $('button').css("background-color", "green");
});