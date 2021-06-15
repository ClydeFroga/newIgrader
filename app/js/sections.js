class SectionButton {
  constructor(button, order) {
    this.button = button
    this.order = order
  }
  doThings() {
    this.makeClasses()
    this.showBlock()
  }
  //block with selected category
  showBlock() {
    let all = document.querySelectorAll(`.sectionSelect__blocksHidden`)
    
    for (let item of all) {
      item.classList.remove('active')
    }
    
    document.querySelector(`.sectionSelect__blocksHidden:nth-child(${this.order})`)
      .classList.add('active')
    
  }
  //line with clicked category
  makeClasses() {
    let all = document.querySelectorAll(`.sectionSelect__sectionsLine`)
    
    for (let item of all) {
      item.classList.remove('active')
    }
    
    this.button.classList.add('active')
  }
  //add response from click on category
  listen() {
    this.button.addEventListener('click', this.doThings.bind(this))
  }
}

let sectionButtons = document.querySelectorAll('.sectionSelect__sectionsLine')

sectionButtons.forEach((item, index) => {
  let bb = new SectionButton(item, index + 1)
  bb.listen()
})