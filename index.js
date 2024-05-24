const openMenu = document.getElementById('open-menu')
const closeMenu =  document.getElementById('close')
const menu = document.getElementById('menu')
openMenu.addEventListener('click',function (){
   openMenu.classList.add('hidden')
   closeMenu.classList.remove('hidden')
   menu.classList.remove('hidden')
})

closeMenu.addEventListener('click',function (){
    closeMenu.classList.add('hidden')
    openMenu.classList.remove('hidden')
    menu.classList.add('hidden')
 })

 function CloseMenu (){
    closeMenu.classList.add('hidden')
    openMenu.classList.remove('hidden')
    menu.classList.add('hidden')
 }