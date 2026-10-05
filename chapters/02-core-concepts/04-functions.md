---
duration: 12
---

# Functions

You've already used plenty of functions: `print()`, `input()`, `len()`, `int()`. In this chapter you'll write your own. A **function** is a named block of code that you can run whenever you need it, as many times as you like.

## Why use functions?

- **Avoid repetition.** Write the code once, then reuse it instead of copying and pasting.
- **Give things names.** A line like `total = add_tax(price)` explains itself.
- **Break big problems into small ones.** Each function does one job, which makes your program easier to read, test and fix.

## Defining and calling a function

You create a function with the `def` keyword, a name, parentheses and a colon. The indented lines below form the function's **body**:

```python
def say_hello():
    print("Hello!")
    print("Nice to meet you.")

say_hello()
say_hello()
```

```text
Hello!
Nice to meet you.
Hello!
Nice to meet you.
```

Defining a function doesn't run it; it only teaches Python a new command. The body runs each time you **call** the function by writing its name followed by parentheses. Python reads your file from the top, so define a function before the line that calls it.

## Parameters and arguments

Functions become much more useful when you can hand them information. List **parameters** inside the parentheses of the definition. They act like variables that are filled in each time the function is called:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ada")
greet("Grace")
```

The values you pass in a call, like `"Ada"`, are called **arguments**. A function can have several parameters, separated by commas. Arguments are matched to parameters in order:

```python
def describe_pet(animal, name):
    print(f"{name} is a {animal}.")

describe_pet("hamster", "Biscuit")
```

## Returning values

A function can send a result back to the code that called it with `return`. You can then store the result in a variable, print it, or use it in a calculation:

```python
def add(a, b):
    return a + b

total = add(2, 3)
print(total)             # 5
print(add(10, 20) * 2)   # 60
```

The text after a `#` is a **comment**. Python ignores it, so it's a handy way to leave notes for human readers.

### return vs print

`print()` and `return` can look alike, because both seem to "give you" a value. They're very different:

- `print()` **shows** a value on the screen, for a human to read. The program can't use it afterwards.
- `return` **hands** a value back to your program, so it can keep working with it.

```python
def double_print(n):
    print(n * 2)

def double_return(n):
    return n * 2

a = double_print(4)    # shows 8 on the screen
b = double_return(4)   # shows nothing

print(a)   # None
print(b)   # 8
```

`double_print()` doesn't return anything, so `a` ends up holding `None`, Python's special value for "nothing here". Most of the time you'll want `return`, so the caller can decide what to do with the result.

:::important
`return` ends the function immediately. Any lines in the body after a `return` that runs are skipped.
:::

## Default arguments

You can give a parameter a **default value**. If the caller leaves that argument out, the default is used:

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Ada"))
print(greet("Grace", "Good morning"))
print(greet("Alan", greeting="Hi"))
```

```text
Hello, Ada!
Good morning, Grace!
Hi, Alan!
```

The last call uses a **keyword argument**: it names the parameter it's setting, which makes the call easier to read. Parameters with default values must come after the ones without.

## Docstrings

A **docstring** is a string written on the first line of a function's body that explains what the function does. By convention it uses triple quotes, which also allow it to span several lines:

```python
def greet(name, greeting="Hello"):
    """Return a friendly greeting."""
    message = f"{greeting}, {name}!"
    return message
```

Docstrings aren't just comments: Python keeps them, and tools can show them. Try `help(greet)` in the interactive shell after defining the function (press <kbd>Q</kbd> if you need to close the help screen), or look at it directly:

```pycon
>>> greet.__doc__
'Return a friendly greeting.'
```

## Anatomy of a function

Here's the finished `greet()` function again, with every part labeled:

![The parts of a function definition](assets/function-anatomy.svg "def starts the definition. The parameters go in parentheses, the body is indented, and return sends the result back to the caller.")

## A note on scope

Variables you create inside a function are **local**: they exist only while the function runs, and the rest of your program can't see them.

```python
def make_message():
    text = "Hi there"
    return text

make_message()
print(text)   # NameError: name 'text' is not defined
```

To get a value out of a function, `return` it and store the result: `text = make_message()`. Code inside a function *can* read variables created outside it, but it's clearer to pass in everything a function needs as arguments.

:::details Going further: the `global` keyword
Python has a `global` keyword that lets a function change a variable defined outside it. It works, but it makes programs harder to follow, because any function might change the value at any time. Experienced programmers rarely use it, and you won't need it in this course.
:::

## Exercise

:::exercise Count the vowels
Write a function `count_vowels(text)` that returns how many vowels (a, e, i, o, u) a string contains, whether they're uppercase or lowercase. Give it a docstring. Then test it:

```python
print(count_vowels("Hello, world!"))   # should print 3
print(count_vowels("PYTHON"))          # should print 1
```
:::

:::hint
Start a counter at `0`. You can loop over a string with `for`, just like a list: each pass gives you one character. Convert the text with `.lower()` first, so you only need to check lowercase letters. `in` works on strings too: `letter in "aeiou"` is `True` when `letter` is a vowel.
:::

:::solution
```python
def count_vowels(text):
    """Return the number of vowels (a, e, i, o, u) in text."""
    count = 0
    for letter in text.lower():
        if letter in "aeiou":
            count += 1
    return count


print(count_vowels("Hello, world!"))   # 3
print(count_vowels("PYTHON"))          # 1
```
:::

## Check your understanding

:::quiz After running `a = double_print(4)` from the example above, what is the value of `a`?
- [ ] `8`
- [ ] `4`
- [x] `None`
- [ ] `"8"`

`double_print()` *shows* 8 with `print()`, but it never uses `return`, so it gives back `None`.
:::

:::quiz Which of these statements are true?
- [x] A function's body only runs when the function is called.
- [ ] A function can only be called once.
- [x] A function without a `return` statement gives back `None`.
- [ ] A variable created inside a function can be used anywhere in the program.

You can call a function as often as you like. Variables created inside a function are local to it.
:::

:::quiz Given `def power(base, exponent=2): return base ** exponent`, what does `power(3)` return?
- [ ] `6`
- [x] `9`
- [ ] `27`
- [ ] An error, because `exponent` is missing

`exponent` has a default value of `2`, so `power(3)` calculates `3 ** 2`.
:::
