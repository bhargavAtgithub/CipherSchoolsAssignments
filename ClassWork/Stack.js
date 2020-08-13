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
      return "Empty Stack";
    }
  }

  printStack() {}
}
