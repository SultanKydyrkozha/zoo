function replace() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
}

function replace1() {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
}

function replace2() {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div1").style.display = "block";
}


function mylinkfunction(e) {

    window.location.href="#targetDiv";

    e.preventDefault();
    e.stopPropagation();

}


jQuery(function () {
    var j = jQuery;
    var addInput = '#qty';
    var n = 0;

    j(addInput).val(n);


    j('.plus').on('click', function () {
        j(addInput).val(++n);
    })

    j('.minus').on('click', function () {

        if (n >= 1) {
            j(addInput).val(--n);
        } else {

        }
    });
});

jQuery(function () {
    var j = jQuery;
    var addInput = '#qtz';
    var n = 0;

    j(addInput).val(n);


    j('.plus1').on('click', function () {
        j(addInput).val(++n);
    })

    j('.minus1').on('click', function () {

        if (n >= 1) {
            j(addInput).val(--n);
        } else {

        }
    });
});

$('.phone1').mask('+7(999) 999-99-99', {
    autoclear: false,
    completed: function () {
        console.log('done');
    }
});

$('#my-element').datepicker([])

$('#my-element').data('datepicker')

