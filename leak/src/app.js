(function() {

    var default_colors = [
        '#ff0000',
        '#00ff00',
        '#0000ff'
    ];

    $(document).ready(setup);

    function setup() {
        $('.wrapper')[0].innerHTML = '';
        for (var i = 0, l = 2; i <= l; i++) {
            var div = $('<div>').addClass('bar');
            $('.wrapper').append(div);
        }
        $('.bar').each(function(i) {
            $(this).css('background-color', default_colors[i]);
            $(this).click(function setColor() {
                $(this).css('background-color', randomColor());
            });
        });
    }

    function reorder() {
        var elements = [];
        $('.bar').each(function removeElement() {
            elements.push($(this).detach());
        });
        elements = shuffle(elements);
        for (var i = 0, l = elements.length; i < l; i++) {
            $('.wrapper').append(elements[i]);
        }
    }

    function randomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    //http://stackoverflow.com/a/2450976/957731
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    $('.shuffle-button').click(reorder);
    $('.reset-button').click(setup);

}());
