class TrieNode{
    constructor(){
        this.children = {}
        this.isEndoFword = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let newNode = this.root
        for(let char of word){
            if(!newNode.children[char]){
                newNode.children[char] = new TrieNode()
            }
            newNode = newNode.children[char]
        }       
        newNode.isEndoFword = true
    }
}

const trie = new Trie()
trie.insert('helo')
console.dir(trie,{depth:null})
