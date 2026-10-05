---
duration: 20
---

# Project: Guess the number

It's time to use everything you've learned to build a complete game. The computer picks a secret number between 1 and 100, and the player tries to find it. After each guess, the game says whether the guess was too high or too low.

You'll build the game in small steps. After each step you'll have a program that runs, so you can test as you go. The highlighted lines in each listing show what changed since the previous version.

## The plan

:::steps
1. **Pick a secret number.** Let Python choose a random whole number between 1 and 100.
2. **Ask for a guess.** Read the player's guess and compare it with the secret number.
3. **Keep guessing.** Use a loop that gives hints until the player finds the number.
4. **Handle bad input.** Make sure the game doesn't crash when someone types letters.
5. **Count the attempts.** Tell the player how many guesses they needed.
6. **Play again.** Wrap the game in a function and offer another round.
:::

Create a new file called `guess.py` in your `python-basics` folder, and let's begin.

## Step 1: Pick a secret number

```python title="guess.py"
import random

secret = random.randint(1, 100)
print("I'm thinking of a number between 1 and 100.")
print(secret)  # Temporary, so you can check it works
```

Python comes with a large **standard library**: a collection of ready-made **modules** for all kinds of jobs. The `random` module deals with random numbers, and `import random` makes it available in your program. Then `random.randint(1, 100)` gives you a random whole number from 1 to 100.

:::info
Unlike `range()`, `randint()` includes **both** ends, so the secret number can be 1 or 100.
:::

Run the program a few times. You should see a different number most times:

```console
$ python3 guess.py
I'm thinking of a number between 1 and 100.
73
```

## Step 2: Ask for a guess

Now remove the temporary ~~`print(secret)`~~ line, and let the player make a guess:

```python title="guess.py" hl_lines="6-10"
import random

secret = random.randint(1, 100)
print("I'm thinking of a number between 1 and 100.")

guess = int(input("Your guess: "))
if guess == secret:
    print("You got it!")
else:
    print(f"Sorry, it was {secret}.")
```

Remember that `input()` returns a string, so `int()` converts it to a number before the comparison. With a single guess, though, the player has to be very lucky to win.

## Step 3: Keep guessing with a loop

To let the player keep trying, put the guessing code inside a `while True` loop, and `break` out of it when they find the number. Instead of a simple "sorry", give a hint after each wrong guess:

```python title="guess.py" hl_lines="6 8-11 14"
import random

secret = random.randint(1, 100)
print("I'm thinking of a number between 1 and 100.")

while True:
    guess = int(input("Your guess: "))
    if guess < secret:
        print("Too low! Try again.")
    elif guess > secret:
        print("Too high! Try again.")
    else:
        print("You got it!")
        break
```

The lines that ask for a guess and check it now live inside the loop, so they're indented one more level. Every pass through the loop asks for one guess. Only a correct guess reaches `break`, which ends the loop and therefore the program.

:::tip Finding the number quickly
Always guess the middle of the range that's left. Start with 50; if that's too high, try 25; and so on. Each guess cuts the possibilities in half, so you never need more than 7 guesses for numbers from 1 to 100.
:::

## Step 4: Handle invalid input

Try typing `abc` as your guess. The program crashes with a `ValueError`, because `int()` can't turn `abc` into a number. A game shouldn't crash just because of a typo, so check the text *before* converting it:

```python title="guess.py" hl_lines="7-11"
import random

secret = random.randint(1, 100)
print("I'm thinking of a number between 1 and 100.")

while True:
    text = input("Your guess: ")
    if not text.isdigit():
        print("Please type a whole number, like 42.")
        continue
    guess = int(text)
    if guess < secret:
        print("Too low! Try again.")
    elif guess > secret:
        print("Too high! Try again.")
    else:
        print("You got it!")
        break
```

The string method `isdigit()` returns `True` when a string is made up only of digits[^isdigit], and `False` otherwise, including for an empty string. Combined with `not`, the condition reads "if the text is not all digits".

When the input isn't a number, the new `continue` statement comes into play. It's a relative of `break`:

- `break` leaves the loop completely.
- `continue` skips the rest of the current pass and jumps straight back to the top of the loop, which asks for a new guess.

## Step 5: Count the attempts

Players love to know how well they did. Add a counter that starts at zero and goes up with every valid guess:

```python title="guess.py" hl_lines="4 13 19"
import random

secret = random.randint(1, 100)
attempts = 0
print("I'm thinking of a number between 1 and 100.")

while True:
    text = input("Your guess: ")
    if not text.isdigit():
        print("Please type a whole number, like 42.")
        continue
    guess = int(text)
    attempts += 1
    if guess < secret:
        print("Too low! Try again.")
    elif guess > secret:
        print("Too high! Try again.")
    else:
        print(f"You got it in {attempts} attempts!")
        break
```

Because `attempts += 1` comes *after* the `continue`, invalid input doesn't count as an attempt. That's only fair!

## Step 6: Play again

For the last step, you'll let the player start a new round without restarting the program. Try making these changes yourself:

1. Add the line `def play_round():` and a docstring just above `secret = random.randint(1, 100)`.
2. Indent everything from `secret = ...` to the end of the file by one level, so it becomes the body of `play_round()`. In most editors you can select the lines and press <kbd>Tab</kbd>. Leave `import random` at the top, unindented.
3. At the bottom of the file, with no indentation, add a loop that calls the function and asks whether to play again:

```python
print("Welcome to Guess the number!")
while True:
    play_round()
    again = input("Play again? (y/n): ").lower()
    if again != "y":
        break
print("Thanks for playing!")
```

The `break` inside `play_round()` ends only the guessing loop; the function then finishes, and the outer loop continues with the "Play again?" question. Calling `.lower()` means that both `y` and `Y` count as yes.

When you're done, compare your work with the complete program:

:::solution
```python title="guess.py" linenums hl_lines="4-5 26-32"
import random


def play_round():
    """Play one round of Guess the number."""
    secret = random.randint(1, 100)
    attempts = 0
    print("I'm thinking of a number between 1 and 100.")

    while True:
        text = input("Your guess: ")
        if not text.isdigit():
            print("Please type a whole number, like 42.")
            continue
        guess = int(text)
        attempts += 1
        if guess < secret:
            print("Too low! Try again.")
        elif guess > secret:
            print("Too high! Try again.")
        else:
            print(f"You got it in {attempts} attempts!")
            break


print("Welcome to Guess the number!")
while True:
    play_round()
    again = input("Play again? (y/n): ").lower()
    if again != "y":
        break
print("Thanks for playing!")
```

Python's style guide recommends two blank lines before and after a function definition at the top level of a file, which is why lines 2–3 and 24–25 are empty.
:::

## Try it out

Run your finished game and play a couple of rounds:

```console
$ python3 guess.py
Welcome to Guess the number!
I'm thinking of a number between 1 and 100.
Your guess: 50
Too low! Try again.
Your guess: 75
Too high! Try again.
Your guess: sixty
Please type a whole number, like 42.
Your guess: 62
You got it in 3 attempts!
Play again? (y/n): n
Thanks for playing!
```

Go through this checklist to make sure everything works. Your progress is saved, so you can come back to it later.

- [ ] The game tells you whether each guess is too low or too high.
- [ ] Typing letters, such as `abc`, shows a friendly message instead of crashing.
- [ ] Pressing <kbd>Enter</kbd> without typing anything is handled too.
- [ ] Invalid input isn't counted as an attempt.
- [ ] The round ends when you guess the number, and the attempt count is correct.
- [ ] Answering `y` or `Y` starts a new round with a new secret number.
- [ ] Any other answer ends the program with a goodbye message.

:::success Well done!
You've written a complete, interactive program that uses variables, input, decisions, loops, functions and a module from the standard library.
:::

## Stretch goals

Want to keep going? Try one or more of these improvements. There's no single right answer, so experiment!

- **Fix the grammar.** If you guess right the first time, the game says "1 attempts". Make it say "1 attempt".
- **Stay in range.** Reject numbers below 1 or above 100 with a helpful message, and don't count them as attempts.
- **Limit the guesses.** Give the player at most 7 tries. If they run out, reveal the secret number.
- **Choose the difficulty.** Ask for the highest possible number before each round, and pass it to `play_round()` as a parameter.
- **Track the best score.** Make `play_round()` return the number of attempts, and show the best score so far after each round.

:::details Hint for "Track the best score"
Replace `break` in `play_round()` with `return attempts`. In the outer loop, store the result with `score = play_round()`. Before the loop, create a variable `best = 0`, where `0` means "no score yet". After each round, update it when `best == 0 or score < best`, then print it.
:::

[^isdigit]: Strictly speaking, `isdigit()` also accepts a few unusual characters that look like digits, such as the superscript `²`, which `int()` can't convert. You're very unlikely to type one by accident. Later in your Python journey you'll learn about `try` and `except`, which can handle any kind of invalid input.
