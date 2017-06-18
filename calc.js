
function main() {
    var formerNum = '';
    var currentNum = '';
    var operator = ''

    $('.numbers').on('click', function(){
        currentNum = currentNum + $(this).text();
        $('#result').text(currentNum);
    });

    $('.operators').on('click', function(){
        formerNum = currentNum;
        currentNum = '';
        operator = $(this).text();
    });
}

$(document).ready(main);