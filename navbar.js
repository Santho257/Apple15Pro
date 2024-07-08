document
  .querySelectorAll(".responsive-nav > li:not(:first-child) > div.submenu")
  .forEach((submenu) => {
    const submenuRows = submenu.querySelectorAll(
      "div.row1, div.row2, div.row3"
    );
    submenuRows.forEach((row) => {
      const rowItems = row.querySelector("ul").querySelectorAll("li, .subspan");
      gsap.set(row, { height: 0 });
      submenu.closest("li").addEventListener("mouseenter", () => {
        submenu.closest('.header').classList.remove('dark-theme');
        submenu.closest('.header').classList.add('background-alt');
        // row.style.paddingTop = "2em";
        gsap.to(submenu, {
          height: submenu.scrollHeight + 100,
          paddingTop: 50,
          duration: 0.1,
          ease: "power2.inOut",
        });
        rowItems.forEach((item, index) => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.1,
            delay: index * 0.05,
          });
        });
      });

      submenu.closest("li").addEventListener("mouseleave", () => {

        submenu.closest('header').classList.remove('background-alt');
        submenu.closest('header').classList.add('dark-theme');
        row.style.paddingTop = "0em";

        gsap.to(submenu, {
          height: 0,
          duration: 0.1,
          paddingTop: 0,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(submenu, { height: 0 });
          },
        });
        rowItems.forEach((item) => {
          gsap.to(item, {
            opacity: 0,
            y: -20,
            duration: 0.1,
          });
        });
      });
    });
  });