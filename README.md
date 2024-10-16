## Test Case
Trie trie = new Trie();
trie.insert("apple");
trie.searchWord("apple");   // return Node of "e" which is the end Node of "apple"
trie.search("app");     // return false
trie.find("app"); // return ["apple"]
trie.insert("app");
trie.search("app");     // return Node of "p" which is the end node of "app"