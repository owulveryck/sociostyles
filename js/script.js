document.getElementById("submit1").addEventListener("click", function () {
    var ascendant = 0;
    for (var j = 0; j < 10; j++) {
        var radios = document.getElementsByName('field1' + j);

        if (radios[0].checked) {
            ascendant++;// only one radio can be logically checked, don't check the rest
        }
    }
    var total = document.getElementById('total1');
    total.value = ascendant;
});

document.getElementById("submit2").addEventListener("click", function () {
    var ascendant = 0;
    for (var j = 0; j < 10; j++) {
        var radios = document.getElementsByName('field2' + j);

        if (radios[0].checked) {
            ascendant++;// only one radio can be logically checked, don't check the rest
        }
    }
    var total = document.getElementById('total2');
    total.value = ascendant;
});