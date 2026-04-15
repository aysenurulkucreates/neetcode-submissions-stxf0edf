
class TrieNode {
    constructor() {
        this.children = {}; 
        this.isWord = false; 
    }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
          
            curr = curr.children[char];
        }
      
        curr.isWord = true; 
    }

    search(word) {
        const dfs = (index, node) => {
            if (index === word.length) {
                return node.isWord;
            }

            const char = word[index];

            if (char === '.') {
                for (const childKey in node.children) {
                    if (dfs(index + 1, node.children[childKey])) {
                        return true;
                    }
                }
                return false; 
            } 
            
            else {
                if (!node.children[char]) {
                    return false;
                }
            
                return dfs(index + 1, node.children[char]);
            }
        };

        return dfs(0, this.root);
    }
}