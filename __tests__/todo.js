/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
let today = new Date(new Date().toLocaleDateString("en-CA"));
//Considering only date part of entire date

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

  test("Checking Overdue items retrieval test case", () => {
    let list = overdue();
    let flag = true;
    //Here even if one date is wrongly retrieved, the flag is set as false
    for (let i = 0; i < list.length; i++) {
      let due = new Date(list[i].dueDate);
      if (today.getDate() <= due.getDate()) {
        flag = false;
      }
    }
    expect(flag).toBe(true);
  });

  test("Checking Due Today items retrieval test case", () => {
    let list = dueToday();
    let flag = true;
    //Here even if one retrieved date is not same as today, the flag is set as false and test fails
    for (let i = 0; i < list.length; i++) {
      let due = new Date(list[i].dueDate);
      if (today.getDate() == due.getDate()) {
        //Do Nothing
      } else {
        flag = false;
      }
    }
    expect(flag).toBe(true);
  });

  test("Checking Due Later items retrieval test case", () => {
    let list = dueLater();
    let flag = true;
    //Here even if one date is wrongly retrieved, the flag is set as false
    for (let i = 0; i < list.length; i++) {
      let due = new Date(list[i].dueDate);
      if (today.getDate() >= due.getDate()) {
        flag = false;
      }
    }
    expect(flag).toBe(true);
  });
});
