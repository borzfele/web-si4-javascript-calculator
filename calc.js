function main() {
    var result = '';
    var operators = ['+', '-', '*', '/', '.'];

    $('.buttons').on('click', function() {
        result = result + $(this).text();
        $('#result').text(result);
    });
    
    $('.operators').on('click', function() {
        if (operators.indexOf(result.slice(-1)) === -1) {
            result = result + $(this).text();
        } else {
            alert('You already used an operator. Please put in a number.');
        }
        $('#result').text(result);
    });

    $('#clear').on('click', function() {
        result = '';
        $('#result').text(result);
    });

    $('#get_result').on('click', function() {
        result = eval(result);
        $('#result').text(result);
    });
}

$(document).ready(main);