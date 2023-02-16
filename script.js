// 1st Slideshow  NECESSARY SELECTORS

const productContainer01 = document.querySelector('#product-container01');
const nxtBtn01 = document.querySelector('#nxt-btn01');
const preBtn01 = document.querySelector('#pre-btn01');
currentIndicatorIndexSliderShow01 = 0;
let sliderShowIndicatorFlex01 = document.querySelector("#slider-show-indicator-flex01");
let transformatTablet01 = false;
let transformatTel01 = false;

// BUTONS CLICK EVENTS 1st CAROUSEL 

nxtBtn01.addEventListener('click', () => {
    
    scrollLeft(productContainer01);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex01);
    
    if(currentIndicatorIndexSliderShow01 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow01 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex01);
        update_Indicator(currentIndicatorIndexSliderShow01, sliderShowIndicatorFlex01);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn01, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex01, 350);
    

})

preBtn01.addEventListener('click', () => {
    
    scrollRight(productContainer01);
    
    if(currentIndicatorIndexSliderShow01 > 0)
    {
        currentIndicatorIndexSliderShow01 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex01);
        update_Indicator(currentIndicatorIndexSliderShow01, sliderShowIndicatorFlex01);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn01, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex01, 350);
    
    
    
})

// INITIAL RESPONSIVE 1st Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    transformatTablet01 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet01 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);;
    transformatTablet01 = true;
    transformatTel01 = false;
}
if(window.innerWidth <= 1020 && transformatTel01 == false)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    transformatTablet01 = false;
    transformatTel01 = true;
       
}

let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
sliderShowIndicators01.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            remove_Current_from_All(sliderShowIndicatorFlex01);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer01);
            currentIndicatorIndexSliderShow01 += neededScrolls;
            dezactivate_All_Arrows(preBtn01, nxtBtn01);
            dezactivate_Indicators(sliderShowIndicatorFlex01, 350);
        }

))

// ACTUAL RESPONSIVE DESIGN 1st Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet01 == true || transformatTel01 == true))
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = false;
        transformatTel01 = false;
        scroll4Right(productContainer01);
        currentIndicatorIndexSliderShow01 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet01 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = true;
        transformatTel01 = false;
        scroll4Right(productContainer01);
        currentIndicatorIndexSliderShow01 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel01 == false)
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = false;
        scroll4Right(productContainer01);
        transformatTel01 = true;
        currentIndicatorIndexSliderShow01 = 0;
    }

    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    

    sliderShowIndicators01.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            remove_Current_from_All(sliderShowIndicatorFlex01);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer01);
            currentIndicatorIndexSliderShow01 += neededScrolls;
            dezactivate_All_Arrows(preBtn01, nxtBtn01)
            dezactivate_Indicators(sliderShowIndicatorFlex01, 350);

        }


    
    ))
})


// USEFULL FUNCTIONS
function dezactivate_All_Arrows(arrow01, arrow02)
{
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(arrow01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(arrow01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(arrow02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(arrow02, 350)
    }
}
function dezactivate_Indicator(indicator, ms)
{
    indicator.classList.add('dezactivated-arrow');
    setTimeout(() =>
        {
            indicator.classList.remove('dezactivated-arrow');
        }, ms);
}
function dezactivate_Indicators(sliderShowIndicatorFlex, ms)
{
    indicators = Array.from(sliderShowIndicatorFlex.children);
    indicators.forEach((i) =>
    {
        i.classList.add('dezactivated-arrow');
        setTimeout(() =>
        {
            i.classList.remove('dezactivated-arrow');
        }, ms);
    })
    
}
function dezactivate_Arrow(arrow, ms)
{
    arrow.classList.add('dezactivated-arrow');
    setTimeout(() =>
    {
        arrow.classList.remove('dezactivated-arrow');
    }, ms);
}

function scroll_to_Indicator(neededScrolls, productContainer)
{

    if(neededScrolls == -1)
    {
        scrollRight(productContainer);
    }
    if(neededScrolls == -2)
    {
        scroll2Right(productContainer)
    }
    if(neededScrolls == -3)
    {
        scroll3Right(productContainer)
    }
    if(neededScrolls == -4)
    {
        scroll4Right(productContainer)
    }
    if(neededScrolls == 1)
    {
        scrollLeft(productContainer);
    }
    if(neededScrolls == 2)
    {
        scroll2Left(productContainer);
    }
    if(neededScrolls == 3)
    {
        scroll3Left(productContainer);
    }
    if(neededScrolls == 4)
    {
        scroll4Left(productContainer);
    }
}

function create_Indicator(sliderShowIndicatorFlex)
{
    indicatorButton = document.createElement('button');
    indicatorButton.classList.add('slider-show-indicator');
    indicatorBonus = document.createElement('div');
    indicatorBonus.classList.add('slider-show-indicator-bonus');

    indicatorButton.appendChild(indicatorBonus);

    sliderShowIndicatorFlex.appendChild(indicatorButton);
}



function get_current_index(sliderShowIndicatorFlex)
{
    let sliderShowIndicators = Array.from(sliderShowIndicatorFlex.children);
    let currentIndicatorIndex = 1;
    let actualIndicatorIndex;

    sliderShowIndicators.forEach(indicator =>
        {
            if(!indicator.children[0].classList.contains('current-indicator'))
            {
                    currentIndicatorIndex += 1;
            }
            else 
            {
                    actualIndicatorIndex = currentIndicatorIndex;
            }
        }

    )

    return actualIndicatorIndex;
}

function remove_Current_from_All(sliderShowIndicatorFlex)
{
    indicatorParents = Array.from(sliderShowIndicatorFlex.children);
    indicatorParents.forEach((child) =>
    {
        indicator = child.children[0];
        indicator.classList.remove('current-indicator');
    })
}

function update_Indicator(currentIndicatorIndex, sliderShowIndicatorFlex) {
    indicatorParent = sliderShowIndicatorFlex.children[currentIndicatorIndex];
    currentIndicator = indicatorParent.children[0];
    currentIndicator.classList.add('current-indicator');

}

function count_indicators(sliderShowIndicatorFlex) {
    indicatorParents = Array.from(sliderShowIndicatorFlex.children);
    indicators = 0;
    
    indicatorParents.forEach(parent =>
    {
        indicators += 1;
    })
    return indicators;
}

// SCROLLS

// SCROLL LEFT

function scrollLeft(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth;
}

function scroll2Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth;
}
function scroll3Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth + containerWidth;
}
function scroll4Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth + containerWidth + containerWidth;
}
// SCROLL RIGHT
function scrollRight(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth;
}
function scroll2Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth;
}
function scroll3Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth + containerWidth;
}
function scroll4Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth + containerWidth + containerWidth;
}

// Responsive layout text



const welcomeText = document.querySelector('.naked-styled-header')
const ustensileBucatarie = document.querySelector('#ustensile-de-bucatarie');

if(window.innerWidth <= 1150)
    {
        ustensileBucatarie.innerHTML = 'Ustensile de Bucatarie';
    }
    else
    {
        ustensileBucatarie.innerHTML = 'Ustensile de <br> Bucatarie';
    }
if(window.innerWidth <= 950)
    {
        welcomeText.innerHTML = 'Bine ati venit la <br><span class="green-styled-text">Divers Angro Shop!</span>'
    }
else
{
    welcomeText.innerHTML = 'Bine ati venit la <span class="green-styled-text">Divers Angro Shop!</span>'
}

window.addEventListener('resize', () =>
{
    if(window.innerWidth <= 1150)
    {
        ustensileBucatarie.innerHTML = 'Ustensile de Bucatarie';
    }
    else
    {
        ustensileBucatarie.innerHTML = 'Ustensile de <br> Bucatarie';
    }
    if(window.innerWidth <= 950)
    {
        welcomeText.innerHTML = 'Bine ati venit la <br><span class="green-styled-text">Divers Angro Shop!</span>'
    }
    else
    {
        welcomeText.innerHTML = 'Bine ati venit la <span class="green-styled-text">Divers Angro Shop!</span>'
    }
    
})
