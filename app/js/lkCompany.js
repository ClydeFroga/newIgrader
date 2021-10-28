document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#opener').forEach((item) => {
      item.addEventListener('click', () => {
          let parent = item.parentElement
          parent.classList.toggle('open')
          if(parent.classList.contains('open')) {
              item.childNodes[0].textContent = 'Свернуть '
          } else {
              item.childNodes[0].textContent = 'Показать все '
          }
      })
    })

    document.querySelectorAll('#addName').forEach((item) => {
        item.addEventListener('click', () => {
            gsap.to('#modalAddName', {opacity: 1, display: 'block'})
            
            document.querySelector('#modalAddName #closeModal').addEventListener('click', () => {
              gsap.to('#modalAddName', {opacity: 0, display: 'none'})
            })
        })
      })
} )