class TrieNode {
    public children: {[key: string]: TrieNode};
    public isEndOfWord;
    public character;

    constructor(isEnd: boolean, value: string) {
        this.children = {};
        this.isEndOfWord = isEnd;
        this.character = value;
    }
}

export default class Trie {
    public root;
    public length;

    constructor() {
        this.root = new TrieNode(true, "*")
        this.length = 0;
    }

    insert(word: string): void {
        var currentValue = this.root;
        for(let char of word) {
            if(currentValue.children[char]) {
                currentValue = currentValue.children[char]
            }
            else {
                this.length++;
                const newNode = new TrieNode(false, char);
                currentValue.children[char] = newNode;
                currentValue = newNode;
            }
        }
        currentValue.isEndOfWord = true;
    }
    
    remove(word: string): boolean {
        if(!this.find(word)) return false;
        return this._remove(this.root, word, 0);
    }

    _remove(node: TrieNode, word: string, index: number): boolean {
        var char = word[index];
        var currentNode = node.children[char];
        if(!currentNode) return true;
        else {
            const shouldBeRemoved = this._remove(currentNode, word, index + 1);
            if(shouldBeRemoved && this.hasChild(node.children[char].children)) {
                this.length--;
                const isTheLastCharOfWord = word.charAt(word.length - 1) == char;
                isTheLastCharOfWord && (node.children[char].isEndOfWord = false);
                return true;
            }
            return false;
        }
    }

    hasChild(childrenOfNode: TrieNode["children"]): boolean {
        var count = 0;
        for(let key in childrenOfNode) {
            if(Object.hasOwn(childrenOfNode, key)) count += 1;
        }

        return count > 0 ? true : false;
    }

    searchWord(word: string): TrieNode | false {
        var currentNode = this.root;
        for(let char of word) {
            if(!currentNode.children[char]) return false;
            currentNode = currentNode.children[char];
        }
        if(!currentNode.isEndOfWord) return false;
        return currentNode;
    }

    find(prefix: string): string[] {
        var searchedNode = this.searchWord(prefix);
        if(searchedNode) {
            let suggestions = [] as string[];
            if(searchedNode.isEndOfWord) {
                suggestions.push(prefix);
            }
            return this._find(searchedNode, prefix, suggestions);
        }

        return [];
    }

    _find(node: TrieNode, lastWord: string, suggestions: string[]): string[] {
        var letters = Object.keys(node.children);
        for(let char of letters) {
            if(node.children[char].isEndOfWord) {
                suggestions.push(lastWord + node.children[char].character)
            }
            const rest = lastWord + node.children[char].character;
            this._find(node.children[char], rest, suggestions);
        }

        return suggestions;
    }
}