
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
function newItem(url, left, bottom,) {
    let object = newImage(url, left, bottom)
    
    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)
newItem('assets/sword.png', 500, 555)
newItem('assets/sheild.png', 165, 335)
newItem('assets/staff.png', 600, 250)

