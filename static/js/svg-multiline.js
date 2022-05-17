function svg_textMultiline() {

    var x = 0;
    var y = 20;
    var width = 360;
    var lineHeight = 10;



    /* get the text */
    var element = document.getElementById('l1');
    var text = element.innerHTML;

    /* split the words into array */
    var words = text.split(' ');
    var line = '';

    /* Make a tspan for testing */
    element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var testElem = document.getElementById('PROCESSING');
        /*  Add line in testElement */
        testElem.innerHTML = testLine;
        /* Messure textElement */
        var metrics = testElem.getBoundingClientRect();
        testWidth = metrics.width;

        if (testWidth > width && n > 0) {
            element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>';
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }

    element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>';
    document.getElementById("PROCESSING").remove();

}


svg_textMultiline();