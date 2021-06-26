// const mainMenu = document.querySelector('.mainMenu');
 // const closeMenu = document.querySelector('.closeMenu');
 // const openMenu = document.querySelector('.openMenu');
 const mainMenu = document.querySelector('.mainMenu');
 const closeMenu = document.querySelector('.closeMenu');
 const openMenu = document.querySelector('.openMenu');
 const spinIcon = document.getElementById('close');




 // openMenu.addEventListener('click',show);
 // closeMenu.addEventListener('click',close);
 openMenu.addEventListener('click',show);
 closeMenu.addEventListener('click',close);
 spinIcon.addEventListener('click',spin);


 function show(){
     mainMenu.style.display = 'flex';
     mainMenu.style.top = '0';
 }
 function close(){
     mainMenu.style.top = '-100%';
 }

 function spin() {
   spinIcon.style.animation = 'spin 4s infinite linear';
 }