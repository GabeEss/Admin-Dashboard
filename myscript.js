    // Some scripting to color in the favorite and track buttons in the project grid when they are clicked.
    

      const myButtons1 = document.querySelectorAll(".fave");
        myButtons1.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
        });
        });

      const myButtons2 = document.querySelectorAll(".track");
        myButtons2.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
        });
        });
      