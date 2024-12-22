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

    produce(word){
        let newNode = this.root
        let arr = []
        for(let char of word){
            if(!newNode.childrenNode[char]){
                return false
            }
            arr.push(newNode.childrenNode[char])
            newNode = newNode.childrenNode[char]
        }
        return arr
        return newNode.childrenNode
    }

}

const trie = new Trie()
trie.insert('hel')
console.log(trie.produce('he'))
// console.log(trie.search("hel"))
// console.dir(trie,{depth:null})
