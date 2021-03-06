
function main() {
    var formerNum = '';
    var currentNum = '';
    var operator = '';
    var result = '';

    $('.numbers').on('click', function(){
        currentNum = currentNum + $(this).text();
        $('#result').text(currentNum);
    });

    $('.operators').on('click', function(){
            if (result === ''){
                formerNum = currentNum;
                currentNum = '';
                operator = $(this).text();
            } else {
                formerNum = result;
                currentNum = '';
                operator = $(this).text();
            }
    });

    $('#get_result').on('click', function() {
        result = eval(formerNum + operator + currentNum);
        formerNum = result;
        $('#result').text(result);
    });

    $('#clear').on('click', function() {
        formerNum = '';
        currentNum = '';
        operator = '';
        result = '';
        $('#result').text(result);
    });

    $('#percent').on('click', function() {
        currentNum = eval(currentNum + '/100');
        $('#result').text(currentNum);
    });
}

$(document).ready(main);