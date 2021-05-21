document.addEventListener('DOMContentLoaded', () => {
  
  let width = document.documentElement.clientWidth;
  
  function headerContainer() {
    function expand(toggle = true) {
      let block = document.querySelector('.ridgepole__container')
    
      if (block.classList.contains('collapsed')) {
        expandAgain()
        return;
      }
    
      if(!block.classList.contains('expanded') && toggle) {
        gsap.to(".ridgepole__containerHiddenBlock", {display: 'flex', opacity: 1, duration: .2})
      } else {
        let duration = 0.2;
        if(!toggle) {
          duration = 0;
        }
        gsap.to(".ridgepole__containerHiddenBlock", {display: 'none', opacity: 0, duration: duration})
      }
      if(toggle) {
        block.classList.toggle('expanded')
      }
    }
  
    let expandBut = document.querySelectorAll('.ridgepole .turnUp')
  
    if (expandBut.length > 0) {
      for (let item of expandBut) {
        item.addEventListener('click', expand)
      }
    }
  
    function collapse() {
      let block = document.querySelector('.ridgepole__container')
      
      block.classList.remove('expanded')
      expand(false)
      block.classList.add('collapsed')
      localStorage.setItem('topCollapsed', 'true')
      
    }
  
    let collapseBut = document.querySelectorAll('.ridgepole .close')
  
    if (collapseBut.length > 0) {
      for(let item of collapseBut) {
        item.addEventListener('click', collapse)
      }
    }
  
    function expandAgain() {
      let block = document.querySelector('.ridgepole__container')
      block.classList.remove('collapsed')
      localStorage.removeItem('topCollapsed')
      setTimeout(expand, 100)
    }
  }
  headerContainer()
  
  
  function menu() {
    function subMenu(menu, parent) {
      parent.classList.toggle('open')
      menu.classList.toggle('expanded')
    }
  
    let subMenus = document.querySelectorAll('.sub-menu')
    if(subMenus.length > 0) {
      for(let item of subMenus) {
        item.parentNode.addEventListener('click', () => subMenu(item, item.parentNode) )
      }
    }
  }
  menu()
  
  function search() {
    let searchBut = document.querySelector('.header .search')
    searchBut.addEventListener('click', (e) => {
      searchBut.classList.toggle('open')
      if(searchBut.classList.contains('open')) {
        document.querySelector('.header .search input').focus()
      }
      document.addEventListener('click', (e) => {
        if (e.target !== searchBut) {
          searchBut.classList.remove('open')
        }
      })
    })

  }
  
  if(width <= 1023) {
    search()
  }
  
  

  
  
  
  

})
