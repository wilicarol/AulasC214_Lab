import { ToDoList, Task, UpdateTask } from './ToDoList'

describe('ToDoList', () => {
  let todoList: ToDoList
  let task: Task

  beforeEach(() => {
    todoList = new ToDoList()
    task = {
      title: 'Teste',
      description: 'Descrição do teste',
      targetDate: '2024-12-31'
    }
    todoList.add(task)
  })

  describe('updateTask', () => {
    it('deve atualizar uma tarefa existente', () => {
      const updateTask: UpdateTask = {
        title: 'Teste atualizado'
      }
      todoList.updateTask(0, updateTask)
      expect(todoList.getTasks()[0].title).toBe('Teste atualizado')
    })

    it('não deve alterar o número total de tarefas', () => {
      const updateTask: UpdateTask = {
        title: 'Teste atualizado'
      }
      todoList.updateTask(0, updateTask)
      expect(todoList.getTasks().length).toBe(1)
    })
  })

  describe('removeTask', () => {
    it('deve remover uma tarefa existente', () => {
      todoList.removeTask(0)
      expect(todoList.getTasks().length).toBe(0)
    })

    it('não deve afetar outras tarefas', () => {
      const anotherTask: Task = {
        title: 'Outro teste',
        description: 'Descrição do outro teste',
        targetDate: '2024-12-31'
      }
      todoList.add(anotherTask)
      todoList.removeTask(0)
      expect(todoList.getTasks()[0].title).toBe('Outro teste')
    })
  })
})
