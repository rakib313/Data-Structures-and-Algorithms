class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}


const newArray = new MyArray();
newArray.push("Hi");
newArray.push("are");
newArray.push("you");
newArray.push("!");
console.log(newArray);
//console.log("Popped: " + newArray.pop())
newArray.delete(1);
console.log(newArray);



