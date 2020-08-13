class Stack {
  constructor() {
    this.stackItems = [];
  }

  push(item) {
    this.stackItems.push(item);
  }

  pop() {
    if (this.stackItems.length !== 0) {
      this.stackItems.pop();
    } else {
      console.log("Empty Stack");
      return this.stackItems;
    }
  }

  printStack() {
    console.log(this.stackItems);
  }
}

var stackObject = new Stack();

function pushIntoStack() {
  var stackInput = document.getElementById("stackInput").value;
  stackObject.push(stackInput);
  stackObject.printStack();
}

function popOutOfStack() {
  stackObject.pop();
  stackObject.printStack();
}
