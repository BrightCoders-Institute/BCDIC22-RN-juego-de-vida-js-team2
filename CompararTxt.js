var fs = require('fs');
var stream2 = fs.createWriteStream("matrizCopia.txt");

//función de comparación con stream2
stream2.once('open', function (fd) {
    for (i = 0; i < 4; i++){
        if(i == 0){
            for(j = 0; j < 8; j++){
                if (j == 0){
                    stream2.write("*");
                }else{
                    stream2.write(".");
                }
            }
        }else{
            for(j = 0; j < 8; j++){
                stream2.write(".");
            }
        }
        stream2.write("\n");
    }
    stream2.end();
});