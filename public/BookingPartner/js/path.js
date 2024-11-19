
let down= document.getElementById('down');
let book= document.getElementById('book-pac');


book.addEventListener('click',()=>{
 document.cookie = "url =" + window.location.href
})

down.addEventListener('click',()=>{
  document.cookie = "url =" + window.location.href
 })
 


