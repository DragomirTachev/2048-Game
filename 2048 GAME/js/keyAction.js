$('body').on('keydown', function (key) {
    if (key.which >= 37 && key.which <= 40) {
        switch (key.which) {
            case 37:
                var hasMovesTowardsLeftSide = true;
                var hasBrokenLoop = false;
                var counter = 0;

                while (hasMovesTowardsLeftSide) {
                    counter = 0;
                    hasBrokenLoop = false;

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            if (((4 * i) + j)%4 !== 1) {
                                 
                                if( !$('#' + ((4 * i) + j).toString()).hasClass('hasUnit') ||
                                    ($('#' + ((4 * i) + j-1).toString()).hasClass('hasUnit') && ($('#' + ((4 * i) + j-1).toString()).find('span').text() !== $('#' + ((4 * i) + j).toString()).find('span').text()))
                                    ) {
                                    counter += 1;
                                }
                                else {
                                    hasBrokenLoop = true;
                                    break;
                                }

                            }
                        }
                        if (hasBrokenLoop) {
                            break;
                        }
                    }
                    if (counter == 12) {
                        hasMovesTowardsLeftSide = false;
                    }

                    if (!hasMovesTowardsLeftSide) {
                        break;
                    }

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            changeToLeft((4 * i) + j);
                        }
                    }
                }

                importNewNumber();

                break;
            case 38:

                var hasMovesTowardsTopSide = true;
                var hasBrokenLoop = false;
                var counter = 0;

                while (hasMovesTowardsTopSide) {
                    counter = 0;
                    hasBrokenLoop = false;

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            if ((((4 * i) + j) / 4 )> 1) {

                                if (!$('#' + ((4 * i) + j).toString()).hasClass('hasUnit') ||
                                    ($('#' + ((4 * i) + j - 4).toString()).hasClass('hasUnit') && ($('#' + ((4 * i) + j - 4).toString()).find('span').text() !== $('#' + ((4 * i) + j).toString()).find('span').text()))
                                    ) {
                                    counter += 1;
                                }
                                else {
                                    hasBrokenLoop = true;
                                    break;
                                }

                            }
                        }

                        if (hasBrokenLoop) {
                            break;
                        }

                    }

                    if (counter == 12) {
                        hasMovesTowardsTopSide = false;
                    }

                    if (!hasMovesTowardsTopSide) {
                        break;
                    }

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            changeToUp((4 * i) + j);
                        }
                    }

                }

                importNewNumber();

                break;
            case 39:
             
                var hasMovesTowardsRightSide = true;
                var hasBrokenLoop = false;
                var counter = 0;

                while (hasMovesTowardsRightSide) {
                    counter = 0;
                    hasBrokenLoop = false;

                    for (var i = 0; i < 4 ; i += 1) {

                        for (var j = 1; j <= 4; j += 1) {

                            if (((4 * i) + j) % 4 !== 0) {

                                if (!$('#' + ((4 * i) + j).toString()).hasClass('hasUnit') ||
                                    ($('#' + ((4 * i) + j + 1).toString()).hasClass('hasUnit') && ($('#' + ((4 * i) + j + 1).toString()).find('span').text() !== $('#' + ((4 * i) + j).toString()).find('span').text()))
                                    ) {
                                    counter += 1;
                                }
                                else {
                                    hasBrokenLoop = true;
                                    break;
                                }

                            }
                        }
                        if (hasBrokenLoop) {
                            break;
                        }
                    }
                    if (counter == 12) {
                        hasMovesTowardsRightSide = false;
                    }

                    if (!hasMovesTowardsRightSide) {
                        break;
                    }

                    for (var i = 0; i < 4 ; i += 1) {

                        for (var j = 1; j <= 4; j += 1) {

                            changeToRight((4 * i) + j);
                        }
                    }
                }

                importNewNumber();

                break;
            case 40:
             
                var hasMovesTowardsBottomSide = true;
                var hasBrokenLoop = false;
                var counter = 0;

                while (hasMovesTowardsBottomSide) {
                    counter = 0;
                    hasBrokenLoop = false;

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            if ((((4 * i) + j) / 4) <=3) {

                                if (!$('#' + ((4 * i) + j).toString()).hasClass('hasUnit') ||
                                    ($('#' + ((4 * i) + j + 4).toString()).hasClass('hasUnit') &&
                                    ($('#' + ((4 * i) + j + 4).toString()).find('span').text() !== $('#' + ((4 * i) + j).toString()).find('span').text()))
                                    ) {
                                    counter += 1;
                                }
                                else {
                                    hasBrokenLoop = true;
                                    break;
                                }

                            }
                        }
                        if (hasBrokenLoop) {
                            break;
                        }
                    }
                    if (counter == 12) {
                        hasMovesTowardsBottomSide = false;
                    }

                    if (!hasMovesTowardsBottomSide) {
                        break;
                    }

                    for (var i = 0; i < 4 ; i += 1) {
                        for (var j = 1; j <= 4; j += 1) {
                            changeToDown((4 * i) + j);
                        }
                    }
                }

                importNewNumber();

                break;
        }
    }
});

function changeToLeft(current) {

    var currentLine = (current / 4) | 0;
   
    if ($('#' + current.toString()).hasClass('hasUnit')) {
       
            //check if next left can take moves
            if (current != (((currentLine) * 4) + 1)) {               

                if (!$('#' + (current - 1).toString()).hasClass('hasUnit')) {

                    $('#' + current.toString()).removeClass('hasUnit');
                    $('#' + (current - 1).toString()).find('span').text($('#' + current.toString()).find('span').text());
                    $('#' + current.toString()).find('span').text('');
                    $('#' + (current - 1).toString()).addClass('hasUnit');
                }
                else if ($('#' + (current - 1).toString()).hasClass('hasUnit') && 
                    ($('#' + (current).toString()).find('span').text() === $('#' + (current - 1).toString()).find('span').text() )) {

                    $('#' + current.toString()).removeClass('hasUnit');
                    $('#' + (current - 1).toString()).find('span').text((parseInt($('#' + current.toString()).find('span').text()) * 2));
                    refreshScore(parseInt($('#' + current.toString()).find('span').text()));
                    $('#' + current.toString()).find('span').text('');
                    $('#' + (current - 1).toString()).addClass('hasUnit');
                }
            }
    }
}


function changeToRight(current) {

    var currentLine = (current / 4) | 0;

    if ($('#' + current.toString()).hasClass('hasUnit')) {

        //check if next right can take moves
        if (current != (((currentLine) * 4))) {

            if (!$('#' + (current + 1).toString()).hasClass('hasUnit')) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current + 1).toString()).find('span').text($('#' + current.toString()).find('span').text());
                $('#' + current.toString()).find('span').text('');
                $('#' + (current + 1).toString()).addClass('hasUnit');
            }
            else if ($('#' + (current + 1).toString()).hasClass('hasUnit') &&
                ($('#' + (current).toString()).find('span').text() === $('#' + (current + 1).toString()).find('span').text())) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current + 1).toString()).find('span').text((parseInt($('#' + current.toString()).find('span').text()) * 2));
                refreshScore(parseInt($('#' + current.toString()).find('span').text()));
                $('#' + current.toString()).find('span').text('');
                $('#' + (current + 1).toString()).addClass('hasUnit');
            }
        }
    }
}


function changeToUp(current) {


    if ($('#' + current.toString()).hasClass('hasUnit')) {

        //check if next up can take moves
        if (current > 4) {

            if (!$('#' + (current - 4).toString()).hasClass('hasUnit')) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current - 4).toString()).find('span').text($('#' + current.toString()).find('span').text());
                $('#' + current.toString()).find('span').text('');
                $('#' + (current - 4).toString()).addClass('hasUnit');
            }
            else if ($('#' + (current - 4).toString()).hasClass('hasUnit') &&
                ($('#' + (current).toString()).find('span').text() === $('#' + (current - 4).toString()).find('span').text())) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current - 4).toString()).find('span').text((parseInt($('#' + current.toString()).find('span').text()) * 2));
                refreshScore(parseInt($('#' + current.toString()).find('span').text()));
                $('#' + current.toString()).find('span').text('');
                $('#' + (current - 4).toString()).addClass('hasUnit');
            }
        }
    }
}


function changeToDown(current) {

    if ($('#' + current.toString()).hasClass('hasUnit')) {

        //check if next bottom can take moves
        if (current <= 12) {

            //alert('in');
            if (!$('#' + (current + 4).toString()).hasClass('hasUnit')) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current + 4).toString()).find('span').text($('#' + current.toString()).find('span').text());
                $('#' + current.toString()).find('span').text('');
                $('#' + (current + 4).toString()).addClass('hasUnit');
            }
            else if ($('#' + (current + 4).toString()).hasClass('hasUnit') &&
                ($('#' + (current).toString()).find('span').text() === $('#' + (current + 4).toString()).find('span').text())) {

                $('#' + current.toString()).removeClass('hasUnit');
                $('#' + (current + 4).toString()).find('span').text((parseInt($('#' + current.toString()).find('span').text()) * 2));
                refreshScore(parseInt($('#' + current.toString()).find('span').text()));
                $('#' + current.toString()).find('span').text('');
                $('#' + (current + 4).toString()).addClass('hasUnit');
            }
        }
    }
}

function importNewNumber() {
    var canImportDigit = false;
    var possibleNewPositionsCounter = 0;
    var arrayOfOptions = [];

    for (var i = 1; i <= 16; i += 1) {
        if( !($('#' + i.toString())).hasClass('hasUnit' )) { 
            possibleNewPositionsCounter += 1;
            arrayOfOptions.push(i);
        }
    }
    if (possibleNewPositionsCounter === 0) {

        var canMakeMove = false;
        var topAvailable = true;
        var bottomAvailable = true;
        var leftAvailable = true;
        var rightAvailable = true;

        for (var j = 1; j <= 16 ; j += 1) {

            topAvailable = false;
            bottomAvailable = false;
            leftAvailable = false;
            rightAvailable = false;

            //TOP
            if (j > 4) {
                if ($('#' + j.toString()).find('span').text() === $('#' + (j - 4).toString()).find('span').text()) {
                    topAvailable = true;
                }
            }
            //BOTTOM
            if (j <13) {
                if ($('#' + j.toString()).find('span').text() === $('#' + (j + 4).toString()).find('span').text()) {
                    bottomAvailable = true;
                }
            }
            //LEFT
            
            var row = Math.ceil(j / 4);
			
            if (j - 1 >= (row - 1) * 4 + 1) {

                if ($('#' + j.toString()).find('span').text() === $('#' + (j - 1).toString()).find('span').text()) {
                    leftAvailable = true;
                }
             
            }
            //RIGHT
            if (j + 1 <= row* 4) {

                if ($('#' + j.toString()).find('span').text() === $('#' + (j + 1).toString()).find('span').text()) {
                    rightAvailable = true;
                }

            }

            if (topAvailable || bottomAvailable || leftAvailable || rightAvailable) {
                canMakeMove = true;
                break;
            }
        }

        //IF NO MORE MOVES AVAILABLE - GAME OVER
        if (!canMakeMove) {

            var currentPoints = parseInt($('#pointsContainer').text());

            if (currentPoints > parseInt(localStorage.getItem('MAX_HIGH_SCORE'))) {
                toastr.success('Congratulations,you have reached a new highscore!');
                localStorage.setItem('MAX_HIGH_SCORE', currentPoints);
            }
    
            swal('GAME OVER', '', 'warning');

                setTimeout(function () {
                    $('#newGameBtn').css('display', 'inline-block');
                }, 3500);           
           
        }
     
    }
    else if (possibleNewPositionsCounter === 1) {
        $('#' + arrayOfOptions[0].toString()).addClass('hasUnit');
        $('#' + arrayOfOptions[0].toString()).find('span').text('2');
    }
    else {
        var random = Math.round(Math.random() * (arrayOfOptions.length - 1));
        $('#' + (arrayOfOptions[random]).toString()).addClass('hasUnit');
        $('#' + (arrayOfOptions[random]).toString()).find('span').text('2');
    }

    checkMaxNumberLenght();
}


function checkMaxNumberLenght() {
    var arrayOfNumbers = [];

    for (var i = 1 ; i <= 16; i += 1) {
        if ($('#' + i.toString()).hasClass('hasUnit')) {
            arrayOfNumbers.push(parseInt($('#' + i.toString()).find('span').text()));
        }       
    }
    arrayOfNumbers.sort(function (a, b) {
        return b-a;
    });

    switch(arrayOfNumbers[0].toString().length) { 
        case 1: $('#gameContainer').css('font-size', '140px');
            $('.innerSpan').css('display', 'inline');
            $('.innerSpan').css('margin-top', '0%');
            break;
        case 2: $('#gameContainer').css('font-size', '140px');
            $('.innerSpan').css('display', 'inline');
            $('.innerSpan').css('margin-top', '0%');
            break;
        case 3: $('#gameContainer').css('font-size', '100px');
            $('.innerSpan').css('display', 'inline-block');
            $('.innerSpan').css('margin-top', '10%');
            break;
        case 4: $('#gameContainer').css('font-size', '30px');
            break;
    }
}


function refreshScore(newEntry) {
    $('#pointsContainer').text( parseInt($('#pointsContainer').text()) + newEntry);
}

$('#newGameBtn').on('click', function () {

    var $this = $(this);
    $this.css('display', 'none');

    $('.innerContainer').removeClass('hasUnit');
    $('.innerContainer').find('span').text('');
    $('#pointsContainer').text('0');

    setStartUpValues();
});