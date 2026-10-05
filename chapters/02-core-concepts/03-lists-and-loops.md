---
duration: 15
---

# Lists and loops

Computers are brilliant at doing the same thing over and over without getting bored. In this chapter you'll learn to keep many values together in a **list**, and to repeat code with **loops**.

## Creating a list

A **list** is an ordered collection of values. You write one with square brackets, separating the items with commas:

```python
fruits = ["apple", "banana", "cherry", "date"]
scores = [12, 7, 21]
empty = []
```

A list can hold any type of value, and it can grow and shrink while your program runs.

## Getting items by index

Every item in a list has a position, called its **index**. Python starts counting at **0**, so the first item is at index 0, the second at index 1, and so on. You can also count backwards from the end with negative indexes: `-1` is the last item.

![Positive and negative indexes of a four-item list](assets/list-indexing.svg "Each item can be reached by a positive index (from the start) or a negative index (from the end).")

Put the index in square brackets after the list's name:

```pycon
>>> fruits = ["apple", "banana", "cherry", "date"]
>>> fruits[0]
'apple'
>>> fruits[2]
'cherry'
>>> fruits[-1]
'date'
>>> fruits[4]
Traceback (most recent call last):
  ...
IndexError: list index out of range
```

The list has four items, so the last valid positive index is 3. Asking for `fruits[4]` is an error.

:::tip Strings have indexes too
A string is a sequence of characters, so the same tricks work on text: `"Python"[0]` is `'P'` and `"Python"[-1]` is `'n'`.
:::

## Slicing

A **slice** gets several items at once. Write a start and a stop index separated by a colon. The item at the start index is included, but the item at the stop index is **not**:

```pycon
>>> fruits[1:3]
['banana', 'cherry']
>>> fruits[:2]
['apple', 'banana']
>>> fruits[2:]
['cherry', 'date']
>>> fruits[-2:]
['cherry', 'date']
```

Leave out the start to begin at the first item, or leave out the stop to go all the way to the end. A slice gives you a new list and leaves the original unchanged.

## Changing a list

Lists can be changed after you create them:

```pycon
>>> fruits.append("elderberry")
>>> fruits
['apple', 'banana', 'cherry', 'date', 'elderberry']
>>> len(fruits)
5
>>> fruits[0] = "apricot"
>>> fruits
['apricot', 'banana', 'cherry', 'date', 'elderberry']
>>> "banana" in fruits
True
```

- `append()` adds an item to the end of the list.
- `len()` tells you how many items it has.
- Assigning to an index replaces the item at that position.
- `in` checks whether a value is in the list and gives you `True` or `False`.

## Your first loop

A `for` loop runs a block of code once for every item in a list:

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}!")
print("That's all the fruit.")
```

```text
I like apple!
I like banana!
I like cherry!
That's all the fruit.
```

On each pass through the loop, the variable `fruit` holds the next item. You choose its name, so pick one that reads well: `for fruit in fruits`, `for score in scores`. Just like with `if`, the colon and the indentation show which lines are repeated.

## Counting with range()

To repeat something a set number of times, loop over `range()`. It produces a sequence of whole numbers. To see them, you can turn the range into a list:

```pycon
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> list(range(1, 6))
[1, 2, 3, 4, 5]
>>> list(range(0, 10, 2))
[0, 2, 4, 6, 8]
```

As with slices, the stop number is never included. `range(5)` gives five numbers, from 0 to 4. A third argument sets the step size.

Here's a loop that adds up all the numbers from 1 to 100:

```python hl_lines="3"
total = 0
for number in range(1, 101):
    total += number
print(f"The sum of 1 to 100 is {total}.")
```

`total += number` is a shortcut for `total = total + number`. Run it, and you'll see that the answer is `5050`.

## Repeating with while loops

A `while` loop keeps repeating as long as its condition is `True`. It checks the condition before every pass:

```python
countdown = 3
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Liftoff!")
```

```text
3
2
1
Liftoff!
```

:::warning Watch out for infinite loops
If the condition never becomes `False`, the loop never ends. Forget the line `countdown -= 1` above and your program prints `3` forever. If that happens, press <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to stop it.
:::

## Stopping early with break

The `break` statement exits a loop immediately, wherever you are in it. A common pattern is a `while True` loop, which would run forever, combined with a `break` that ends it when something happens:

```python title="echo.py" hl_lines="3-4"
while True:
    text = input("Say something (or 'quit'): ")
    if text == "quit":
        break
    print(f"You said: {text}")
print("Bye!")
```

`break` works in `for` loops too. It only exits the loop it's in; the program carries on with the first line after the loop.

## for or while?

::::columns
:::column
**Use `for`** when you know what you're looping over: every item in a list, or a fixed number of repetitions.

```python
for i in range(3):
    print("Hip hip hooray!")
```
:::
:::column
**Use `while`** when you keep going *until something happens*, and you can't know in advance how many passes that takes.

```python
answer = ""
while answer != "yes":
    answer = input("Are we there yet? ")
```
:::
::::

## Exercise

:::exercise Shopping list
Write `shopping.py`, which lets the user type shopping items one at a time. An empty line (just pressing <kbd>Enter</kbd>) means they're done. The program then prints how many items there are, followed by a numbered list:

```text
Add an item (leave empty to finish): milk
Add an item (leave empty to finish): eggs
Add an item (leave empty to finish): bread
Add an item (leave empty to finish):
You need 3 items:
1. milk
2. eggs
3. bread
```
:::

:::hint
Start with an empty list and a `while True` loop. When the user's input is equal to the empty string `""`, `break`; otherwise, `append()` the item. For the numbered list, loop over `range(len(items))`: you get each index `i`, so `items[i]` is the item and `i + 1` is its number.
:::

:::solution
```python title="shopping.py"
items = []
while True:
    item = input("Add an item (leave empty to finish): ")
    if item == "":
        break
    items.append(item)

print(f"You need {len(items)} items:")
for i in range(len(items)):
    print(f"{i + 1}. {items[i]}")
```

Python also has a built-in helper for numbering items, called `enumerate()`. Once you're comfortable with loops, you can write the last two lines like this:

```python
for number, item in enumerate(items, start=1):
    print(f"{number}. {item}")
```
:::

## Check your understanding

:::quiz Given `fruits = ["apple", "banana", "cherry", "date"]`, what is `fruits[-2]`?
- [ ] `"banana"`
- [x] `"cherry"`
- [ ] `"date"`
- [ ] An `IndexError`

Negative indexes count from the end: `-1` is `"date"`, so `-2` is `"cherry"`.
:::

:::quiz Which numbers does `for n in range(2, 6):` loop over?
- [ ] 2, 3, 4, 5, 6
- [x] 2, 3, 4, 5
- [ ] 3, 4, 5, 6
- [ ] 2 and 6

`range()` includes the start but stops just *before* the stop number.
:::
