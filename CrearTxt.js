var fs = require('fs');

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var stream = fs.createWriteStream("matriz.txt");

//función de generación de células con stream
stream.once('open', function (fd) {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 8; j++) {
            let c = random(0, 8);
            let a = random(0, 8);
            if (c == 2) {
                stream.write("*");
            }
            else if (a == 4) {
                stream.write("*");
            } else {
                stream.write(".");
            }
        }
        stream.write("\n");
    }
    stream.end();
});
