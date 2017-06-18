
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
        if (operator !== '') {
            alert('You have used an operator already. Please insert a number.')
        } else {
            if (result === ''){
                formerNum = currentNum;
                currentNum = '';
                operator = $(this).text();
            } else {
                formerNum = result;
                currentNum = '';
                operator = $(this).text();
            }
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
}

$(document).ready(main);