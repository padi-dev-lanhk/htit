const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

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
