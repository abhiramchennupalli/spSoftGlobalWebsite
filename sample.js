document.getElementById("year").textContent = new Date().getFullYear();

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
  // const links = document.querySelectorAll(".side-menu-anchor");

  // links.forEach(link => {
  //   link.addEventListener("click", () => {

  //     links.forEach(l => l.classList.remove("active"));


  //     link.classList.add("active");
  //   });
  // });

  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".side-menu-anchor");

    // get sections from hrefs
    const sections = Array.from(links).map(link =>
      document.querySelector(link.getAttribute("href"))
    );

    let isClickScrolling = false;

    // 👉 CLICK
    links.forEach((link) => {
      link.addEventListener("click", () => {
        isClickScrolling = true;

        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        setTimeout(() => {
          isClickScrolling = false;
        }, 800);
      });
    });

    // 👉 SCROLL
    window.addEventListener("scroll", () => {
      if (isClickScrolling) return;

      let currentSection = null;

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        // section in middle of screen
        if (rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        links.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });




}
{
  //animation
  const elements = document.querySelectorAll(".animate");

  let lastScrollY = window.scrollY;

  /* -------- INTERSECTION OBSERVER -------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const currentScrollY = window.scrollY;

      if (entry.isIntersecting && currentScrollY > lastScrollY) {
        entry.target.classList.add("show");
      }

      if (!entry.isIntersecting && currentScrollY < lastScrollY) {
        entry.target.classList.remove("show");
      }

      lastScrollY = currentScrollY;
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
  });

  elements.forEach((el) => observer.observe(el));

  /* -------- SCROLL FALLBACK (IMPORTANT) -------- */
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      // If element is in viewport → ensure animation runs
      if (
        rect.top < window.innerHeight - 100 &&
        rect.bottom > 0 &&
        currentScrollY > lastScrollY
      ) {
        el.classList.add("show");
      }
    });

    lastScrollY = currentScrollY;
  });
}

{
  //number counting
  document.addEventListener("DOMContentLoaded", () => {

    const fastCounters = document.querySelectorAll(".count");
    const slowCounters = document.querySelectorAll(".count-slow");

    const TOTAL_DURATION = 18000; // 18 seconds

    let started = false;

    // 👉 FAST COUNTER (sync with total duration)
    const animateFast = (el) => {
      const target = +el.getAttribute("data-target");
      let startTime = null;

      const update = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percentage = Math.min(progress / TOTAL_DURATION, 1);

        const value = Math.floor(percentage * target);
        el.innerText = value;

        if (percentage < 1) {
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };

      requestAnimationFrame(update);
    };

    // 👉 SLOW COUNTER (2 sec per step)
    const animateSlow = (el) => {
      const target = +el.getAttribute("data-target");
      let count = 0;

      const interval = setInterval(() => {
        count++;
        el.innerText = count;

        if (count >= target) {
          clearInterval(interval);
        }
      }, 2000); // 2 sec
    };

    // 👉 START ONCE (no stopping)
    const section = document.querySelector(".section-seven-count-main-div").parentElement;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;

          fastCounters.forEach(el => animateFast(el));
          slowCounters.forEach(el => animateSlow(el));
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);

  });
}

{
  const elements = document.querySelectorAll(".section-nine-up-animation");
  const section = document.querySelector(".section-nine-image-main-div");

  let triggered = false;

  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight && !triggered) {
      triggered = true;

      elements.forEach((el, i) => {
        const height = el.offsetHeight; // 🔥 get element height

        setTimeout(() => {
          el.style.transform = `translateY(-${height}px)`;
        }, i * 80); // optional stagger
      });
    }
  });


}