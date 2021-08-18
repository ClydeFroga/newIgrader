function stickyScrollWatch() {
  if (document.documentElement.clientWidth >= 768) {
    let foxy = document.querySelectorAll(".single__secondary .foxy");

    let list = [];
    foxy.forEach((item) => {
      list.push(item);
    });
    list.push(document.querySelector(".foxyA"));

    let rand = Math.floor(Math.random() * 3);

    let sidebarHeight = document.querySelector(".single__secondaryEnd").offsetTop + 300;

    document.addEventListener("scroll", foxySticky);

    function foxySticky() {
      if (scrollY > sidebarHeight) {
        if (!list[rand].classList.contains("stickyFox")) {
          list[rand].classList.add("stickyFox");
        }
      } else {
        if (list[rand].classList.contains("stickyFox")) {
          list[rand].classList.remove("stickyFox");
        }
      }
    }
  }
}
