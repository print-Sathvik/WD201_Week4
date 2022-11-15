const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    let ret = [];
    for (let i = 0; i < all.length; i++) {
      let due = new Date(all[i].dueDate);
      if (dateToday.getDate() > due.getDate()) {
        ret.push(all[i]);
      }
    }
    return ret;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    let ret = [];
    for (let i = 0; i < all.length; i++) {
      let due = new Date(all[i].dueDate);
      if (dateToday.getDate() == due.getDate()) {
        ret.push(all[i]);
      }
    }
    return ret;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    let ret = [];
    for (let i = 0; i < all.length; i++) {
      let due = new Date(all[i].dueDate);
      if (dateToday.getDate() < due.getDate()) {
        ret.push(all[i]);
      }
    }
    return ret;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    let s = "";
    let printDate = true;
    if (list[0].dueDate == today) {
      printDate = false;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed == true) {
        s = s + "[x] ";
      } else {
        s = s + "[ ] ";
      }
      s = s + list[i].title;
      if (printDate == true) {
        s = s + " " + list[i].dueDate;
      }
      if (i != list.length - 1) {
        s = s + "\n";
      }
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);

module.exports = todoList;
