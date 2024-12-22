class TrieNode{
    constructor(){
        this.childrenNode = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let newNode = this.root

        for(let char of word){
            if(!newNode.childrenNode[char]){
                newNode.childrenNode[char] = new TrieNode()              
            }
            newNode = newNode.childrenNode[char]
        }
        newNode.isEnd = true
    }

    search(word){
        let newNode = this.root
        for(let char of word){
            if(!newNode.childrenNode[char]){
                return false
            }
            newNode = newNode.childrenNode[char]
        }
        return newNode.isEnd
    }

    autocomplete(prefix) {
        let newNode = this.root;
        // Traverse to the node corresponding to the prefix
        for (let char of prefix) {
            if (!newNode.childrenNode[char]) {
                return []; // Prefix not found
            }
            newNode = newNode.childrenNode[char];
        }
        // Helper function to collect all words from the current node
        const words = [];
        const collectWords = (node, path) => {
            if (node.isEnd) {
                words.push(path); // Add the word to the list
            }
            for (let char in node.childrenNode) {
                collectWords(node.childrenNode[char], path + char);
            }
        };

        // Collect words starting from the prefix node
        collectWords(newNode, prefix);
        return words;
    }
}

const trie = new Trie()
trie.insert('hel')

// console.log(trie.search("hel"))
// console.dir(trie,{depth:null})
