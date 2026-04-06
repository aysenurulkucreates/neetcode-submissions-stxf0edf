
class Node {
    constructor(key, value) {
        this.key = key; 
        
        
        this.value = value; 
       
        
        this.prev = null; 
       
        
        this.next = null; 
       
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; 
       
        
        this.map = new Map(); 
       

        this.head = new Node(0, 0); 
       
        
        this.tail = new Node(0, 0); 
      

        this.head.next = this.tail; 
       
        
        this.tail.prev = this.head; 
        
    }

    
    remove(node) {
        let prevNode = node.prev; 
      
        
        let nextNode = node.next; 
       

        prevNode.next = nextNode; 
  
        
        nextNode.prev = prevNode; 
       
    }

   
    insert(node) {
        let prevNode = this.head; 
        
        
        let nextNode = this.head.next; 
       

        prevNode.next = node; 
        
        nextNode.prev = node; 
        
        
        node.prev = prevNode; 
        
        
        node.next = nextNode; 
        
    }

   

    get(key) {
        if (this.map.has(key)) { 
           
            
            let node = this.map.get(key); 
           
            
            this.remove(node); 
            
            
            this.insert(node); 
            
            return node.value; 
            
        }
        return -1; 
        
    }

    put(key, value) {
        if (this.map.has(key)) { 
            
            
            this.remove(this.map.get(key)); 
            
        }

        let newNode = new Node(key, value); 
       
        
        this.insert(newNode); 
        
        
        this.map.set(key, newNode); 
        

        if (this.map.size > this.capacity) { 
            
            
            let lruNode = this.tail.prev; 
           
            
            this.remove(lruNode); 
           
            
            this.map.delete(lruNode.key); 
            
        }
    }
}
