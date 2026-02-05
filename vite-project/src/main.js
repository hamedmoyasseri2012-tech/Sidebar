const menu = document.getElementById("btnm");
const hidemenu = document.getElementById("btnx");

console.log(menu);
console.log(hidemenu);

menu.addEventListener("click", () => {
  console.log("Clicked");
  hidemenu.classList.toggle("showsidebar");
});
hidemenu.addEventListener("click", () => {
  console.log("clicked1");
  hidemenu.classList.toggle("remove");
});
