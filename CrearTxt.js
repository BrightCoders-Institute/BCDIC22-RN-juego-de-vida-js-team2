var fs = require('fs');

var stream = fs.createWriteStream("matriz.txt");

let campo = new Array(4);
for (var i = 0; i < 4; i++) {
    campo[i] = new Array(8);
}

function llenar(campo){
    for (var i = 0; i < 4; i++) {
        for(var j = 0; j < 8; j++){
            let random = Math.floor(Math.random() * 2);
            random == 1 ? campo[i][j] = "*" : campo[i][j] = ".";
        }
    }
    return campo;
}
//console.log(llenar(campo));
//console.log(c);

//función de generación de células con stream
stream.once('open', function (fd) {
    stream.write(".");
    stream.end();
});
