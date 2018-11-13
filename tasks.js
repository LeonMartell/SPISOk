function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.show = function() {
 
    let currentNode = this.head;
    while(currentNode){
     console.log(currentNode.data);
     currentNode = currentNode.next;
 }
}

SinglyList.prototype.add = function(value) {
    let node = new Node(value),
        currentNode = this.head;

    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2-ой случай: непустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;
    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position < 0 || position > length) {
        console.log(message.failure);
    }

    // 2-ой случай: первый узел удален
    else if (position == 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }
    else {
    // 3-ий случай: все другие узлы удалены
        while (count <= position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;
    }   
    return deletedNode;
};



function add(){
 let Value = document.getElementById("text").value;
 document.getElementById("text").value = " ";
 SinglyList.prototype.add(Value);
 console.log();
}
function show(){
    SinglyList.prototype.show();
}
function rem(){
    let position = document.getElementById("text").value;
    document.getElementById("text").value = " ";
    SinglyList.prototype.remove(position);
}