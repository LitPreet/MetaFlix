
const hammburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const cursor = document.querySelector(".cursor");
const navItem = document.querySelectorAll(".nav-menu li");
const navlink = document.querySelectorAll(".nav-item a");

hammburger.addEventListener("click",()=>{
    hammburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click"),()=>{
//     hammburger.classList.remove("active");
//     navmenu.classList.remove("active")
// })
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})
navItem.forEach(box => {
    box.addEventListener('mouseenter', (e)=>{
     cursor.classList.add("hover");
    navlink.classList.add("black");
     console.log("hovered");
    });
  });
  navItem.forEach(box => {
    box.addEventListener('mouseleave', (e)=>{
     cursor.classList.remove("hover");
    });
  });