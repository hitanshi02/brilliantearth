$(function () {
    $(".fold-table tr.view").on("click", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open").next(".fold").removeClass("open");
        } else {
            $(".fold-table tr.view").removeClass("open").next(".fold").removeClass("open");
            $(this).addClass("open").next(".fold").addClass("open");
        }
    });
});

// Radion Button Js
$('.button').click(function () {
    var $this = $(this);
    $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);
    $siblings.removeClass('active');
    $this.addClass('active');
})

$('.button2').click(function () {
    var $this = $(this);
    $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);
    $siblings.removeClass('active2');
    $this.addClass('active2');
})



// Filter Button Change
$('.filter-button').first().addClass('FilterActive');
$('.filter-button').click(function () {
    var $this = $(this);
    $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);

    $('.FilterContent > .ShowContent').removeClass('FilterActive').eq(position).addClass('FilterActive');

    $siblings.removeClass('FilterActive');
    $this.addClass('FilterActive');

    if (position == 1) {

        $('.filter-arrow > .ri-arrow-left-s-fill').removeClass('filter-color');
        $('.filter-arrow > .ri-arrow-right-s-fill').addClass('filter-color');
    } else {
        $('.filter-arrow > .ri-arrow-left-s-fill').addClass('filter-color');
        $('.filter-arrow > .ri-arrow-right-s-fill').removeClass('filter-color');
    }


});


$('.filter-nav').click(function () {
    // alert($(this).attr('class'));

    var $this = $(this);
    $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);

    $siblings.removeClass('filter-color');
    $this.addClass('filter-color');

    if (position == 1) {
        $('.content-2').addClass('FilterActive');
        $('.content-1').removeClass('FilterActive');
        $('.filter-button2').addClass('FilterActive');
        $('.filter-button1').removeClass('FilterActive');
    } else {
        $('.content-1').addClass('FilterActive');
        $('.content-2').removeClass('FilterActive');
        $('.filter-button1').addClass('FilterActive');
        $('.filter-button2').removeClass('FilterActive');
    }

});

const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        next.style.zIndex1 = index++;
    })
})
option.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');

        const parent = b.target.closest('.select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
})



// Price Rabge Bar1
const slider = document.getElementById('Ring-sliderPrice');
const rangeMin = parseInt(slider.dataset.min);
const rangeMax = parseInt(slider.dataset.max);
const step = parseInt(slider.dataset.step);
const filterInputs = document.querySelectorAll('input.RingRange-filter__input');

noUiSlider.create(slider, {
    start: [rangeMin, rangeMax],
    connect: true,
    step: step,
    range: {
        'min': rangeMin,
        'max': rangeMax
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider 
slider.noUiSlider.on('update', (values, handle) => {
    filterInputs[handle].value = values[handle];
});
filterInputs.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value);
    })
});


// Price Rabge Bar2
const slider2 = document.getElementById('Ring-sliderPrice2');
const rangeMin2 = parseInt(slider2.dataset.min);
const rangeMax2 = parseInt(slider2.dataset.max);
const step2 = parseInt(slider2.dataset.step);
const filterInputs2 = document.querySelectorAll('input.RingRange-filter__input2');

noUiSlider.create(slider2, {
    start: [rangeMin2, rangeMax2],
    connect: true,
    step: step2,
    range: {
        'min': rangeMin2,
        'max': rangeMax2
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider 
slider2.noUiSlider.on('update', (values, handle) => {
    filterInputs2[handle].value = values[handle];
});
filterInputs2.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider2.noUiSlider.setHandle(indexInput, input.value);
    })
});


// Price Rabge Bar3
const slider3 = document.getElementById('Ring-sliderPrice3');
const rangeMin3 = parseInt(slider3.dataset.min);
const rangeMax3 = parseInt(slider3.dataset.max);
const step3 = parseInt(slider3.dataset.step);
const filterInputs3 = document.querySelectorAll('input.RingRange-filter__input3');

noUiSlider.create(slider3, {
    start: [rangeMin3, rangeMax3],
    connect: true,
    step: step3,
    range: {
        'min': rangeMin3,
        'max': rangeMax3
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider 
slider3.noUiSlider.on('update', (values, handle) => {
    filterInputs3[handle].value = values[handle];
});
filterInputs3.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider3.noUiSlider.setHandle(indexInput, input.value);
    })
});

// Price Rabge Bar4
const slider4 = document.getElementById('Ring-sliderPrice4');
const rangeMin4 = parseInt(slider3.dataset.min);
const rangeMax4 = parseInt(slider3.dataset.max);
const step4 = parseInt(slider3.dataset.step);
const filterInputs4 = document.querySelectorAll('input.RingRange-filter__input4');

noUiSlider.create(slider4, {
    start: [rangeMin4, rangeMax4],
    connect: true,
    step: step4,
    range: {
        'min': rangeMin4,
        'max': rangeMax4
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider 
slider4.noUiSlider.on('update', (values, handle) => {
    filterInputs4[handle].value = values[handle];
});
filterInputs4.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider4.noUiSlider.setHandle(indexInput, input.value);
    })
});



// Price Rabge Bar5
const slider5 = document.getElementById('Ring-sliderPrice5');
const rangeMin5 = parseInt(slider3.dataset.min);
const rangeMax5 = parseInt(slider3.dataset.max);
const step5 = parseInt(slider3.dataset.step);
const filterInputs5 = document.querySelectorAll('input.RingRange-filter__input5');

noUiSlider.create(slider5, {
    start: [rangeMin5, rangeMax5],
    connect: true,
    step: step5,
    range: {
        'min': rangeMin5,
        'max': rangeMax5
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});

// bind inputs with noUiSlider 
slider5.noUiSlider.on('update', (values, handle) => {
    filterInputs5[handle].value = values[handle];
});
filterInputs5.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider5.noUiSlider.setHandle(indexInput, input.value);
    })
});



// MObile Price Rabge Bar6
const MobSlider = document.getElementById('Mobile-Ring-sliderPrice');
const MobRangeMin = parseInt(MobSlider.dataset.min);
const MobRangeMax = parseInt(MobSlider.dataset.max);
const MobStep = parseInt(MobSlider.dataset.step);
const MobFilterInputs = document.querySelectorAll('input.Mob-RingRange-filter__input');
noUiSlider.create(MobSlider, {
    start: [MobRangeMin, MobRangeMax],
    connect: true,
    step: MobStep,
    range: {
        'min': MobRangeMin,
        'max': MobRangeMax
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider
MobSlider.noUiSlider.on('update', (values, handle) => {
    MobFilterInputs[handle].value = values[handle];
});
MobFilterInputs.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        MobSlider.noUiSlider.setHandle(indexInput, input.value);
    })
});

// MObile Price Rabge Bar1
const MobSlider1 = document.getElementById('Mobile-Ring-sliderPrice1');
const MobRangeMin1 = parseInt(MobSlider.dataset.min);
const MobRangeMax1 = parseInt(MobSlider.dataset.max);
const MobStep1 = parseInt(MobSlider.dataset.step);
const MobFilterInputs1 = document.querySelectorAll('input.Mob-RingRange-filter__input1');
noUiSlider.create(MobSlider1, {
    start: [MobRangeMin1, MobRangeMax1],
    connect: true,
    step: MobStep1,
    range: {
        'min': MobRangeMin1,
        'max': MobRangeMax1
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider
MobSlider1.noUiSlider.on('update', (values, handle) => {
    MobFilterInputs1[handle].value = values[handle];
});
MobFilterInputs1.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        MobSlider1.noUiSlider.setHandle(indexInput, input.value);
    })
});

// MObile Price Rabge Bar2
const MobSlider2 = document.getElementById('Mobile-Ring-sliderPrice2');
const MobRangeMin2 = parseInt(MobSlider2.dataset.min);
const MobRangeMax2 = parseInt(MobSlider2.dataset.max);
const MobStep2 = parseInt(MobSlider2.dataset.step);
const MobFilterInputs2 = document.querySelectorAll('input.Mob-RingRange-filter__input2');
noUiSlider.create(MobSlider2, {
    start: [MobRangeMin2, MobRangeMax2],
    connect: true,
    step: MobStep2,
    range: {
        'min': MobRangeMin2,
        'max': MobRangeMax2
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider
MobSlider2.noUiSlider.on('update', (values, handle) => {
    MobFilterInputs2[handle].value = values[handle];
});
MobFilterInputs2.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        MobSlider2.noUiSlider.setHandle(indexInput, input.value);
    })
});


// MObile Price Rabge Bar3
const MobSlider3 = document.getElementById('Mobile-Ring-sliderPrice3');
const MobRangeMin3 = parseInt(MobSlider3.dataset.min);
const MobRangeMax3 = parseInt(MobSlider3.dataset.max);
const MobStep3 = parseInt(MobSlider3.dataset.step);
const MobFilterInputs3 = document.querySelectorAll('input.Mob-RingRange-filter__input3');
noUiSlider.create(MobSlider3, {
    start: [MobRangeMin3, MobRangeMax3],
    connect: true,
    step: MobStep3,
    range: {
        'min': MobRangeMin3,
        'max': MobRangeMax3
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider
MobSlider3.noUiSlider.on('update', (values, handle) => {
    MobFilterInputs3[handle].value = values[handle];
});
MobFilterInputs3.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        MobSlider3.noUiSlider.setHandle(indexInput, input.value);
    })
});

// MObile Price Rabge Bar4
const MobSlider4 = document.getElementById('Mobile-Ring-sliderPrice4');
const MobRangeMin4 = parseInt(MobSlider4.dataset.min);
const MobRangeMax4 = parseInt(MobSlider4.dataset.max);
const MobStep4 = parseInt(MobSlider4.dataset.step);
const MobFilterInputs4 = document.querySelectorAll('input.Mob-RingRange-filter__input4');
noUiSlider.create(MobSlider4, {
    start: [MobRangeMin4, MobRangeMax4],
    connect: true,
    step: MobStep4,
    range: {
        'min': MobRangeMin4,
        'max': MobRangeMax4
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider
MobSlider4.noUiSlider.on('update', (values, handle) => {
    MobFilterInputs4[handle].value = values[handle];
});
MobFilterInputs4.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        MobSlider4.noUiSlider.setHandle(indexInput, input.value);
    })
});







