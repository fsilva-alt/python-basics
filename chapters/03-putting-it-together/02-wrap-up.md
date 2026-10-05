---
duration: 4
---

# Wrap-up and next steps

:::success Congratulations!
You've finished **Python Basics**. You went from installing Python to building a complete game, and along the way you learned the ideas that every Python program is built on.
:::

## What you've learned

| Chapter | Key ideas |
| --- | --- |
| [Install Python and run your first program](#setup) | Using the terminal, the interactive shell, running `.py` files |
| [Variables and data types](#variables) | `int`, `float`, `str`, `bool`, arithmetic, f-strings, `input()` and `int()` |
| [Making decisions](#decisions) | Comparisons, `if` / `elif` / `else`, `and` / `or` / `not`, indentation |
| [Lists and loops](#lists-and-loops) | Indexes and slices, `for`, `range()`, `while`, `break` |
| [Functions](#functions) | `def`, parameters, `return`, default arguments, docstrings, scope |
| [Guess the number](#guess-the-number) | Modules, input validation, `continue`, structuring a whole program |

The best way to make these ideas stick is to use them. Pick something small that you'd enjoy, like a quiz, a unit converter or a dice roller, and build it. When you get stuck, that's when the real learning happens.

## What to learn next

Here are the topics that will take you furthest from here. Each one builds directly on what you already know. <span class="badge">Recommended order</span>

### Dictionaries

Lists find items by position. A **dictionary** finds values by a **key** that you choose, such as a name:

```python
ages = {"Ada": 36, "Alan": 41}
ages["Grace"] = 85
print(ages["Ada"])   # 36
```

### Handling errors

Remember how `int("abc")` crashes your program? With `try` and `except` you can catch errors and decide what to do instead:

```python
try:
    number = int(input("Number: "))
except ValueError:
    print("That wasn't a whole number.")
```

### Reading and writing files

Programs often need to save data so it's still there next time. The built-in `open()` function reads and writes files:

```python
with open("notes.txt", "w") as file:
    file.write("Remember to practice Python!\n")
```

### Modules

You've already imported `random`. The standard library has modules for math, dates, files, the internet and much more. You can also split your own programs into several files and import one from another.

### Virtual environments and packages

Beyond the standard library, thousands of free packages are available. A **virtual environment** gives each project its own private set of packages, so different projects don't get in each other's way. You create one with the built-in `venv` module:

```console
$ python3 -m venv .venv
```

On Windows, the command is `py -m venv .venv`.

### Testing

Tests are small programs that check that your code does what you expect. The simplest form uses `assert`, which stops with an error if a condition is `False`:

```python
def add(a, b):
    return a + b

assert add(2, 3) == 5
```

As your programs grow, the standard library's `unittest` module, or a third-party tool such as pytest, helps you organize and run many tests at once.

## Further reading

The official documentation is free, thorough and written by the people who make Python:

- [The Python Tutorial](https://docs.python.org/3/tutorial/): a guided tour of the language, a great next step after this course.
- [The Python Standard Library](https://docs.python.org/3/library/): reference documentation for every built-in module.
- [Built-in Functions](https://docs.python.org/3/library/functions.html): `print()`, `len()`, `range()` and all their siblings.
- [Data Structures](https://docs.python.org/3/tutorial/datastructures.html): more about lists, plus dictionaries, tuples and sets.
- [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html): how `try` and `except` work.
- [Virtual Environments and Packages](https://docs.python.org/3/tutorial/venv.html): setting up `venv` and installing packages.
- [Glossary](https://docs.python.org/3/glossary.html): short definitions of Python terms.

[Open the tutorial](https://docs.python.org/3/tutorial/){.button} [Browse the library reference](https://docs.python.org/3/library/){.button .secondary}

Thanks for learning with us, and happy coding!
