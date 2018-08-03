

word = "programming"

display = "-" * len(word)

guess = raw_input("Guess a letter in the mystery word: ")

for i in range(0, len(word)):
    if (guess == word[i]):
        display[i] = guess

print(display)
