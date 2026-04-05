class Node {
     constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.current = null;
        this.tail = null;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.remove(node);
        this.setHead(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.remove(node);
            this.setHead(node);
        } else {
            const newNode = new Node(key, value);
            if (this.map.size >= this.capacity) {
                this.map.delete(this.tail.key);
                this.remove(this.tail);
            }
            this.setHead(newNode);
            this.map.set(key, newNode);
        }
    }

    remove(node) {
        if (node.prev) node.prev.next = node.next;
        else this.current = node.next;
        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev;
    }

    setHead(node) {
        node.next = this.current;
        node.prev = null;
        if (this.current) this.current.prev = node;
        this.current = node;
        if (!this.tail) this.tail = node;
    }
}