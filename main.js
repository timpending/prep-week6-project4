$(document).ready(function(){

$('#submitBtn').on('click', function(){
  $( "<p>" + $('#textInput').val() + "</p>" ).insertAfter( "#submitBtn" );
})


$('input[type=checkbox]').on('click', function(){
  $('.jGod').toggleClass('hidden');
})

$('.table').append('<tr><td>Picnic</td><td>13</td><td>HUNGRY FOR SOULS</td><tr>')


$('td').each(function(){
  if (this.innerHTML== 'Hangry') {
    this.style.color = 'red';
  } else if (this.innerHTML== 'Content'){
    this.style.color = 'green';
  }
})

$('.heavy').on('click', function(){
  $('td').each(function(){
    let weight = Number(this.innerHTML)
    if (weight < 10 ){
      $(this).parent().hide();
    }
  })
})

$('.yell').on('click', function(){
  $('td:nth-child(1)').each(function(){
    let temp = this.innerHTML.toUpperCase()
    this.innerHTML = temp
  })
})

$('.hide-table').on('click', function(){
  $('table').toggle();
})


$('#disableUs').on('click', function(e){
  e.preventDefault();
})
//
// let temp = $('select.dropdown').find('option:last')
//
// temp.on('click', function(){
//   console.log(this);
// })

function countList() {
  return $('#alertList').children().length
}

$('.count-list').on('click', function(){
  alert('Total Amount in List: ' + countList())
})

function addToList(input) {
  $('#alertList').append('<li>' + input + '</li>')
}

$('.add-list').on('click', function() {
  let newAdd = prompt('What would you like to add');
  addToList(newAdd)
})

$('.remove-list').on('click', function(){
  $('#alertList li:last').remove();
})



});
