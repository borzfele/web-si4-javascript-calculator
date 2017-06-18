
function main() {
    var formerNum = '';
    var currentNum = '';

    $('.numbers').on('click', function(){
        currentNum = currentNum + $(this).text();
        $('#result').text(currentNum);
    })

}

$(document).ready(main);