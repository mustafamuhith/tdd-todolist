class TodoList {
  constructor () {
    this.id = 0
    this.items = []
  }
  
  create (str) {
    this.id++
    const item = { id: this.id, text: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  showAll () {
    return this.items
  }

  setComplete (id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getStatusBy (status) {
    return this.items.filter(item => item.status === status)
    
  }
}

module.exports = {
  TodoList
}