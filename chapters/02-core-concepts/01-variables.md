---
duration: 12
---

# Variables and data types

Programs work with information: a player's name, a score, a price, a temperature. In this chapter you'll learn how Python stores that information in **variables**, which kinds of values it understands, and how to ask the person using your program for input.

## Storing values in variables

A **variable** is a name that refers to a value. You create one with an equals sign:

```python
name = "Ada"
age = 36
print(name)
print(age)
```

Read `age = 36` as "store `36` under the name `age`". The `=` sign doesn't mean "is equal to" like in math: it's an **assignment**, and it always works from right to left.

You can change a variable later by assigning a new value. Try this in the interactive shell:

```pycon
>>> score = 10
>>> score
10
>>> score = score + 5
>>> score
15
```

The line `score = score + 5` looks odd at first. Python first works out the right side (`10 + 5`), and only then stores the result back in `score`.

:::tip
In the interactive shell, typing a variable's name on its own shows its value. Inside a program file you need `print()` to see anything.
:::

## Naming rules

You can choose almost any name for a variable, but Python has a few rules:

| Rule | Allowed | Not allowed |
| --- | --- | --- |
| Use only letters, digits and underscores (`_`) | `user_name` | `user-name`, `user name` |
| Don't start with a digit | `player2` | `2player` |
| Don't use Python's reserved words | `class_name` | `class`, `if`, `for` |
| Uppercase and lowercase are different | `score` and `Score` are two separate variables | |

By convention, Python programmers write variable names in lowercase, with underscores between words: `high_score`, `first_name`. Pick names that describe what the value *means*. `price` is much easier to understand than `p` or `x1` when you read your code a week later.

## Basic data types

Every value in Python has a **type**, which decides what you can do with it. These four are the ones you'll use most:

- **`int`** (integer): whole numbers such as `42`, `-7` and `0`.
- **`float`** (floating-point number): numbers with a decimal point, such as `3.14`, `-0.5` and `2.0`.
- **`str`** (string): text inside quotes, such as `"hello"` or `'Python'`. Single and double quotes both work.
- **`bool`** (Boolean): one of exactly two values, `True` or `False`.

The built-in `type()` function tells you the type of any value:

```pycon
>>> type(42)
<class 'int'>
>>> type(3.14)
<class 'float'>
>>> type("hello")
<class 'str'>
>>> type(True)
<class 'bool'>
>>> type("42")
<class 'str'>
```

Notice the last one: `"42"` is in quotes, so it's text that happens to contain digits, not a number.

## Doing math

Python makes a great calculator. These are the arithmetic operators:

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `+` | Addition | `7 + 2` | `9` |
| `-` | Subtraction | `7 - 2` | `5` |
| `*` | Multiplication | `7 * 2` | `14` |
| `/` | Division | `7 / 2` | `3.5` |
| `//` | Floor division (divide, then round down) | `7 // 2` | `3` |
| `%` | Remainder (also called modulo) | `7 % 2` | `1` |
| `**` | Power | `7 ** 2` | `49` |

Python follows the usual order of operations, so multiplication happens before addition. Use parentheses to change the order:

```pycon
>>> 2 + 3 * 4
14
>>> (2 + 3) * 4
20
>>> 6 / 2
3.0
```

:::note
The `/` operator *always* gives you a `float`, even when the division comes out even. That's why `6 / 2` is `3.0` and not `3`. Use `//` when you want a whole number.
:::

:::details Why does `0.1 + 0.2` show `0.30000000000000004`?
Computers store floats in binary, and most decimal fractions (like 0.1) can't be represented exactly in binary, just as 1/3 can't be written exactly in decimal. The tiny error usually doesn't matter, and you can tidy up the display with `round()`, for example `round(0.1 + 0.2, 2)` gives `0.3`.
:::

## Working with strings

You can join strings together with `+`, measure them with `len()`, and change their case with **methods**, which are functions that belong to a value and are called with a dot:

```pycon
>>> first = "Ada"
>>> last = "Lovelace"
>>> first + " " + last
'Ada Lovelace'
>>> len(first)
3
>>> last.upper()
'LOVELACE'
>>> last.lower()
'lovelace'
```

### f-strings

The easiest way to build a message out of several values is an **f-string**: put an `f` before the opening quote, and write variables or expressions inside curly braces `{}`.

```python
name = "Ada"
age = 36
print(f"{name} is {age} years old.")
print(f"In ten years, {name} will be {age + 10}.")
```

```text
Ada is 36 years old.
In ten years, Ada will be 46.
```

Python doesn't let you add a string and a number with `+`, because it can't guess what you mean:

```pycon
>>> "Age: " + 36
Traceback (most recent call last):
  ...
TypeError: can only concatenate str (not "int") to str
```

An f-string like `f"Age: {36}"` handles the conversion for you.

## Asking the user for input

The `input()` function shows a message, waits for the user to type something and press <kbd>Enter</kbd>, and gives you back what they typed. There's one important detail: <mark>`input()` always returns a string</mark>, even when the user types digits.

That's why you need `int()` to turn the answer into a number before doing math with it:

```python title="birthday.py" hl_lines="2"
name = input("What's your name? ")
age = int(input("How old are you? "))
print(f"Hi {name}! Next year you'll be {age + 1}.")
```

```console
$ python3 birthday.py
What's your name? Sam
How old are you? 11
Hi Sam! Next year you'll be 12.
```

Without `int()`, `age` would be the string `"11"`, and `age + 1` would fail with the same `TypeError` you saw above. Similar functions convert in other directions: `float("2.5")` gives `2.5`, and `str(42)` gives `"42"`.

:::warning
`int()` only works when the text looks like a whole number. If the user types `ten` or `3.5`, your program stops with a `ValueError`. You'll learn how to check the input first when you build the game at the end of the course.
:::

## Exercise

:::exercise Temperature converter
Write a program called `celsius.py` that asks for a temperature in degrees Celsius and prints it in degrees Fahrenheit. The formula is:

`fahrenheit = celsius * 9 / 5 + 32`

Allow decimal input such as `21.5`. A run should look like this:

```text
Temperature in Celsius: 21.5
21.5°C is 70.7°F
```
:::

:::hint
Use `float()` instead of `int()` to convert the input, so that numbers with a decimal point are accepted. If you get results with lots of decimal places, `round(value, 1)` rounds to one decimal place.
:::

:::solution
```python title="celsius.py"
celsius = float(input("Temperature in Celsius: "))
fahrenheit = celsius * 9 / 5 + 32
print(f"{celsius}°C is {round(fahrenheit, 1)}°F")
```
:::

## Check your understanding

:::quiz A user runs `answer = input("Number? ")` and types `42`. What is the type of `answer`?
- [ ] `int`
- [ ] `float`
- [x] `str`
- [ ] `bool`

`input()` always returns a string. Convert it with `int(answer)` if you need a number.
:::

:::quiz Which of these are valid variable names?
- [x] `total_score`
- [x] `player2`
- [ ] `2nd_place`
- [ ] `my-name`
- [x] `_count`

Names may contain letters, digits and underscores, and must not start with a digit. A hyphen isn't allowed because Python would read `my-name` as "`my` minus `name`".
:::

:::quiz What is the result of `17 % 5`?
- [ ] `3.4`
- [ ] `3`
- [x] `2`
- [ ] `85`

`%` gives the remainder of a division: 5 goes into 17 three times (15), leaving 2.
:::
