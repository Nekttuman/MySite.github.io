document.querySelector('#more_button').addEventListener('click', function() {
  document.querySelector('#all_items').style.height = 'auto';
  console.log("huhu");
  this.style.display = 'none';
  document.querySelector('#hide_button').style.display = 'flex';
});
document.querySelector('#hide_button').addEventListener('click', function() {
  document.querySelector('#all_items').style.height = '680px';
  console.log("huhu");
  this.style.display = 'none';
  document.querySelector('#more_button').style.display = 'flex';
});
