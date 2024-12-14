const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

  const inputbox = document.getElementById("text")
  const listcontainer = document.getElementById("list-container")
  
  function addtask(){
      if(inputbox.value === ""){
          alert("Please Enter Something")
      }
      else{
          let li = document.createElement("li");
          li.innerHTML = inputbox.value;
          listcontainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
      }
      inputbox.value = " ";
      saveData();
  }
  
  listcontainer.addEventListener("click",(e)=>{
      if(e.target.tagName === "LI"){
          e.target.classList.toggle("checked");
          saveData();
      }
      else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
          saveData();
      }
  },false);
  
  function saveData(){
      localStorage.setItem("data",listcontainer.innerHTML);
  }
  function showtask(){
      listcontainer.innerHTML = localStorage.getItem("data");
  }
  showtask();