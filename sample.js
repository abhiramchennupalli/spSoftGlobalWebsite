document.getElementById("year").textContent = new Date().getFullYear();
//ANIMATION
{//refresh to top 
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
}


//footer button to scroll up
{
  document.querySelector(".footer-button").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

//NAV BAr TOGGLE
{
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeMenu");

  // Open menu
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  // Close menu (cross button)
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = sideMenu.contains(e.target);
    const isClickOnButton = menuBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      sideMenu.classList.remove("active");
    }
  });
  {
    const menuBtn = document.getElementById("SmallScreenMenuBtn");
    const sideMenu = document.getElementById("SmallScreenSideMenu");
    const closeBtn = document.getElementById("SmallScreenCloseMenu");

    // OPEN MENU
    menuBtn.addEventListener("click", () => {
      sideMenu.classList.add("active");
    });

    // CLOSE MENU
    closeBtn.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });
  }

}

//sidebar active code
{
  const links = document.querySelectorAll(".side-menu-anchor");

  links.forEach(link => {
    link.addEventListener("click", () => {

      links.forEach(l => l.classList.remove("active"));


      link.classList.add("active");
    });
  });
}