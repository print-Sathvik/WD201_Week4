/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo task",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo test case", () => {
    let todoListCount = all.length;
    add({
      title: "L4 Submission",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoListCount + 1);
  });

  test("Mark a todo item as complete test case", () => {
    let last_index = all.length - 1;
    //Last element is always incomplete because it was newly added
    expect(all[last_index].completed).toBe(false);
    markAsComplete(last_index); //marking last element as Complete
    expect(all[last_index].completed).toBe(true);
  });
});
