var arrayBidimensional = new Array();
for (var i = 0; i < 8; i++) {
    arrayBidimensional[i] = new Array(4);
}

for (i=0; i<8; i++){
    for (j=0; j<4; j++){
        arrayBidimensional[i][j] = 1;
    }
}

/*arrayBidimensional[0][0] = "1";
arrayBidimensional[0][1] = "2 ";
arrayBidimensional[1][0] = "3";
arrayBidimensional[1][1] = "4";*/

/*console.log("arrayBidimensional[0][1]", arrayBidimensional[0][1]);
console.log("arrayBidimensional[1][0]", arrayBidimensional[1][0]);
console.log("arrayBidimensional[1][1]", arrayBidimensional[1][1]);*/

console.log(arrayBidimensional)