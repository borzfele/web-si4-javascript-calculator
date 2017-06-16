function main() {
    var result = $('#result').text();

    $('.buttons').on('click', function() {
        result = result + $(this).text();
        $('#result').text(result);
    });

    $('#clear').on('click', function() {
        result = '';
        $('#result').text(result);
    });
}

$(document).ready(main);