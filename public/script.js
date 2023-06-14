
// DROP DOWN MENU

const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.interceptor-dropdown')
// wat doet from? maakt een array aan van de kinderen van dropdownmenu aka interceptor-dropdown
const dropdownMenuItems = Array.from(dropdownMenu.children)
// waar is -1 voor?
let active = -1
const code = 'ArrowDown'

dropdownToggle.addEventListener('click', function() {
    // dit zorgt ervoor dat de class "show" aan en uit wordt gezet. Die class staat op display block zodat je de menu items krijgt te zien.
  dropdownMenu.classList.toggle('show')
//   again waar is de -1 voor??
  active = -1
})

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    // 40 is de code van pijltje naar beneden
    if(e.key === 'ArrowDown') {
      if(active < dropdownMenuItems.length - 1) {
        active++
        dropdownMenuItems[active].focus()
      }
    } else if(e.key === 'ArrowUp') {
      if(active > 0) {
        active--
        dropdownMenuItems[active].focus()
      }
    }
  })

dropdownMenuItems.forEach(item=> {
  item.addEventListener('click', function() {
    dropdownMenu.classList.remove('show')
  })
})

// GRAPH

