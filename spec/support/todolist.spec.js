const { TodoList } = require('./todolist')

describe('TodoList', () => {
  beforeEach(() => {
    resetToDoList()
  })

  it('creates a todo item', () => {
    const item = create('make the bed')

    expect(item).toEqual({
      id: 1,
      description: 'make the bed',
      status: 'incomplete'
    })
  })
  it('creates multiple todos', () => {
    create('tidy the room')
    const item2 = create('workout')

    expect(item2).toEqual({
      id: 2,
      description: 'workout',
      status: 'incomplete'
    })
  })

  it('should get all todo', () => {
    create('tidy the room')
    create('workout')

    const todos = getAll()

    expect(todos).toEqual([
      {
        id: 1,
        description: 'tidy the room',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'workout',
        status: 'incomplete'
      }
    ])
  })
  it("should get all incomplete todos", () => {
    create('tidy the room')
    create('workout')
    create('make the bed')

    const todos = getAll()

    expect(todos).toEqual([
      {
        id: 1,
        description: 'tidy the room',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'workout',
        status: 'incomplete'
      },
      {
        id: 3,
        description: 'make the bed',
        status: 'incomplete'
      }  
    ])
  })
})
