#!/usr/bin/python

#Exerise 1

def longest_word(word1, word2, word3):
    if word1.length > word2.length and word1.length > word3.length:
        return word1
    elif word2.length > word1.length and word2.length > word3.length:
        return word2
    else:
        return word3

print(longest_word("apples", "bananas", "oranges"))
