// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.js-tab-btn');
    const tabContents = document.querySelectorAll('.js-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');
            
            // Add active class to clicked button and show corresponding content
            button.classList.add('active');
            const activeContent = document.querySelector(`.js-tab-content[data-content="${tabId}"]`);
            if (activeContent) {
                activeContent.style.display = 'block';
            }
        });
    });

    // Set initial active tab
    const firstTab = document.querySelector('.js-tab-btn.active');
    if (firstTab) {
        const tabId = firstTab.getAttribute('data-tab');
        const activeContent = document.querySelector(`.js-tab-content[data-content="${tabId}"]`);
        if (activeContent) {
            activeContent.style.display = 'block';
        }
    }
});
// Director tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarItems = document.querySelectorAll('.about-director__sidebar-item');
    const infoItems = document.querySelectorAll('.about-director__info-item');

    // Set initial state
    infoItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
            item.style.display = 'none';
        }
    });

    sidebarItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Remove active class from all sidebar items
            sidebarItems.forEach(sItem => sItem.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get the corresponding tab content
            const tabId = item.getAttribute('data-tab');
            
            // Hide all info items
            infoItems.forEach(info => {
                info.classList.remove('active');
                info.style.display = 'none';
            });
            
            // Show the selected info item
            const selectedInfo = document.querySelector(`.about-director__info-item[data-content="${tabId}"]`);
            if (selectedInfo) {
                selectedInfo.classList.add('active');
            }
        });
    });
});

const $navContent = $('.js-slider-content');
// $navSlider.slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   infinite: true,
//   focusOnSelect: true,
//   cssEase: 'linear',
//   touchMove: true,
//   asNavFor: '.js-slider-content',
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         centerMode: true,
//         variableWidth: true,
//         spaceBetween: 0
//       }
//     }
//   ]
// });

$navContent.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: false,
  variableWidth: false,
  infinite: true,
  adaptiveHeight: true,
  focusOnSelect: false,
  cssEase: 'linear',
  touchMove: true,
  fade: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        spaceBetween: 0
      }
    }
  ]
});

$navContent.slick('setPosition');
// hover change
$('.list-item-case .item-case:first-child').addClass('active');

$('.list-item-case .item-case').click(function(){
  $('.list-item-case .item-case').removeClass('active');
  $(this).addClass('active');
  return false;
});

// counter

let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},5)

})
let count1 = document.querySelectorAll(".count1")
let arr1 = Array.from(count1)


arr1.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},5)

})
let count2 = document.querySelectorAll(".count2")
let arr2 = Array.from(count2)



arr2.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},8)

})
let count3 = document.querySelectorAll(".count3")
let arr3 = Array.from(count3)



arr3.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},20)

})

$(function() { // Dropdown toggle
  $('#md-lang .dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
  });

  $(document).click(function(e) 
  { 
  var target = e.target; 
  if (!$(target).is('#md-lang  .dropdown-toggle') && !$(target).parents().is('#md-lang  .dropdown-toggle')) 
  //{ $('.dropdown').hide(); }
    { $('#md-lang  .dropdown').slideUp(); }
  });
});
