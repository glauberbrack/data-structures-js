function Stack() {
  var items = [];

  this.push = function (element) {
    // add a new item on the top
    items.push(element);
  };

  this.pop = function () {
    // remove the item from the top
    return items.pop();
  };

  this.peek = function () {
    // returns the element from the top
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    // returns if the stack is or isn't empty
    return items.length === 0;
  };

  this.clear = function () {
    // clear all the stack
    items = [];
  };

  this.size = function () {
    // returns the size of the stack
    return items.length;
  };

  this.print = function () {
    // prints the stack on the console
    console.log(items.toString());
  };
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();

console.log("Last element", stack.peek());
console.log("Stack size", stack.size());
console.log("IsEmpty", stack.isEmpty());
stack.clear();
console.log("IsEmptyNow?", stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();
