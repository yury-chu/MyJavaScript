var word = "botteles";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("take one down, pass it around,");
    count = count - 1;
    
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall");
    } else {
        console.log("no more " + word + " of beer on the wall");
    }
}