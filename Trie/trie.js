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

   autocomplete(prefix){
        let newNode = this.root
        for(let char of prefix){
            if(!newNode.childrenNode[char]){
                return 
            }
            newNode = newNode.childrenNode[char]
        }

        let words=[]
        function collectwords(node,prefix){
            if(node.isEnd){
                words.push(prefix)
            }
            for(let char in node.childrenNode){
                collectwords(node.childrenNode[char],prefix+char)
            }
        }
        collectwords(newNode,prefix)
        return words
   }
}

const trie = new Trie()
trie.insert('hel')
console.log(trie.autocomplete('h'))

// console.log(trie.search("hel"))
// console.dir(trie,{depth:null})
