document.addEventListener('DOMContentLoaded', () => {
  
  class Quiz {
    constructor(quiz) {
      this.quiz = quiz
      this.currentNum = null
      this.answers = []
      this.current = null
      this.finishBlc = null
      this.wrapper = null
    }
    setVals() {
      this.currentNum = this.quiz.querySelector('.quiz__number > span:first-child')
      this.current = this.quiz.querySelector('.active')
      this.finishBlc = this.quiz.querySelector('.finish')
      this.wrapper = this.quiz.querySelector('.quiz__wrapper')
      
      this.startListeners()
    }
    startListeners() {
      let items = this.quiz.querySelectorAll('label')
      for (let item of items) {
        item.addEventListener('click', this.next.bind(this))
      }
    }
    next() {
      gsap.to(this.current, {display:'none', opacity:0, duration: 0.2})
      
      if(this.current.nextElementSibling !== null) {
        this.current = this.current.nextElementSibling
        
        setTimeout(() => {
          gsap.to(this.current, {display:'block', opacity:1, duration: 0.2})
  
          this.currentNum.innerText = ++this.currentNum.innerText
        }, 200)
      }
      else {
        gsap.to('.quiz > form', {display:'none', opacity:0, duration: 0.3})
        setTimeout(() => {
          this.finish()
        }, 320)
        
      }
    }
    finish() {
      let formData = new FormData(document.querySelector('form'));
  
      for (let [name, value] of formData) {
        this.answers.push(value)
      }
      gsap.to(this.finishBlc, {display:'block', opacity:1, duration: 0.3})

      console.log(this.answers)
    }
  }

  
  new Quiz(document.querySelector('.quiz')).setVals()


})