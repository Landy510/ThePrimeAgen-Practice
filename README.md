## Test Case
Trie trie = new Trie(); </br>
trie.insert("apple"); </br>
trie.searchWord("apple");   // return Node of "e" which is the end Node of "apple" </br>
trie.search("app");     // return false </br>
trie.find("app"); // return ["apple"] </br>
trie.insert("app"); </br>
trie.search("app");     // return Node of "p" which is the end node of "app"
