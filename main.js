

      let btnmenu=document.getElementById("btnmenu")
      let navbar=document.querySelector(".navbar")
      btnmenu.onclick = function(){
        btnmenu.classList.toggle("fa-times")
      navbar.classList.toggle("active")
      }