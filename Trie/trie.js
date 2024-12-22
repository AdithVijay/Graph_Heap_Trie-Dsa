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


}

const trie = new Trie()
trie.insert('hel')
trie.insert('hero')
console.dir(trie,{depth:null})
