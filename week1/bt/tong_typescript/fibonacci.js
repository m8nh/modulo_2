var calculateValue = function (input) {
    if (input < 1)
        return 0;
    if (input < 2)
        return 1;
};
// example:
for (var n = 0; n < 10; n++) {
    var value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}
