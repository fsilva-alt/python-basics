---
duration: 12
---

# Making decisions

So far, your programs have run every line from top to bottom. Real programs need to react: show a different message when a guess is too high, refuse an invalid password, give a discount to children. In this chapter you'll learn how to make your code choose what to do.

## Comparing values

Decisions start with a question that has a yes-or-no answer. In Python you ask those questions with **comparison operators**, and the answer is always a `bool`: `True` or `False`.

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `<` | Less than | `3 < 5` | `True` |
| `>` | Greater than | `3 > 5` | `False` |
| `<=` | Less than or equal to | `5 <= 5` | `True` |
| `>=` | Greater than or equal to | `4 >= 5` | `False` |

You can compare strings too. Comparisons are exact, so uppercase and lowercase letters count as different:

```pycon
>>> "apple" == "apple"
True
>>> "apple" == "Apple"
False
>>> 10 > 9.5
True
```

:::caution `=` and `==` are different
A single `=` **stores** a value in a variable. A double `==` **asks** whether two values are equal. Mixing them up is one of the most common beginner mistakes, so whenever you write a condition, double-check that you used `==`.
:::

## The if statement

An `if` statement runs a block of code only when its condition is `True`:

```python
temperature = 30
if temperature > 25:
    print("It's warm!")
    print("Drink some water.")
print("Done.")
```

It has three parts: the keyword `if`, a condition, and a colon (`:`). The indented lines underneath are the **block** that runs when the condition is `True`. Change `temperature` to `20` and run it again: this time only `Done.` is printed.

## Indentation matters

Many languages use brackets to group code. Python uses **indentation**, the spaces at the start of a line, instead:

![The body of an if statement is indented by 4 spaces](assets/indentation.svg "Every line indented under the if belongs to its block. The first line that isn't indented marks the end of the block.")

The standard is **4 spaces** per level. Most code editors insert 4 spaces automatically when you press <kbd>Tab</kbd> in a `.py` file, and indent the next line for you after a colon.

If you forget to indent, Python refuses to run the program and reports an `IndentationError`:

```python
if temperature > 25:
print("It's warm!")
```

:::tip
Be consistent: use the same number of spaces for every line in a block, and don't mix tabs and spaces. If your editor can show invisible characters, turning that on makes indentation problems easy to spot.
:::

## Choosing between two paths with else

Add an `else` block to say what should happen when the condition is `False`:

```python
age = 15
if age >= 18:
    print("You can vote.")
else:
    print("You can't vote yet.")
```

Exactly one of the two blocks runs, never both. Notice that `else` has no condition, but it does need a colon.

## More choices with elif

When there are more than two possibilities, add one or more `elif` ("else if") blocks between `if` and `else`:

```python
temperature = 12
if temperature > 25:
    print("It's hot.")
elif temperature > 15:
    print("It's mild.")
else:
    print("It's cold.")
```

Python checks the conditions from top to bottom and runs the block of the **first** one that is `True`. It then skips the rest of the statement. If none of the conditions are `True`, the `else` block runs. The `else` is optional: without it, nothing happens when all conditions are `False`.

![Flowchart of if, elif and else](assets/if-flow.svg "Python tries each condition in order. Only one block runs, and then the program continues after the whole statement.")

## Combining conditions

Sometimes one comparison isn't enough. Three keywords let you combine conditions:

- **`and`** is `True` only when *both* sides are `True`.
- **`or`** is `True` when *at least one* side is `True`.
- **`not`** flips `True` to `False` and the other way round.

```pycon
>>> age = 25
>>> age >= 18 and age < 65
True
>>> day = "Saturday"
>>> day == "Saturday" or day == "Sunday"
True
>>> not day == "Monday"
True
```

Python also lets you chain comparisons the way you'd write them in math. `18 <= age < 65` means the same as `age >= 18 and age < 65`.

> [!CAUTION]
> `day == "Saturday" or "Sunday"` does **not** check both days. Python reads it as `(day == "Saturday") or "Sunday"`, and a non-empty string like `"Sunday"` counts as true, so the condition is always true. Repeat the comparison on both sides: `day == "Saturday" or day == "Sunday"`.

## Example: a grade calculator

Let's put it all together. This program turns a test score into a letter grade:

```python title="grades.py" linenums hl_lines="3"
score = int(input("Enter your score (0-100): "))

if score < 0 or score > 100:
    print("That score is out of range.")
elif score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
```

```console
$ python3 grades.py
Enter your score (0-100): 84
Grade: B
```

Line 3 uses `or` to catch impossible scores before any grade is given. After that, a score of 84 fails the `>= 90` test, passes the `>= 80` test, and Python stops looking.

:::important Order matters
The conditions are checked from top to bottom. If you put `score >= 60` first, a score of 95 would match it and get a D! When ranges overlap, start with the most specific condition.
:::

## Exercise

:::exercise Cinema ticket prices
Write `tickets.py`, which asks for the visitor's age and prints the ticket price:

- Under 5: free
- 5 to 17: $6
- 18 to 64: $10
- 65 and over: $7

For example, an input of `12` should print `Your ticket costs $6.`, and an input of `3` should print `Your ticket is free!`.
:::

:::hint
Start with the youngest group and work upwards with `elif`. Because Python stops at the first condition that is `True`, every condition only needs a single `<` comparison: once you've ruled out `age < 5`, you know the age is at least 5.
:::

:::solution
```python title="tickets.py"
age = int(input("How old are you? "))

if age < 5:
    print("Your ticket is free!")
elif age < 18:
    print("Your ticket costs $6.")
elif age < 65:
    print("Your ticket costs $10.")
else:
    print("Your ticket costs $7.")
```
:::

## Check your understanding

Look at this code, then answer the first question:

```python
x = 15
if x > 10:
    print("big")
elif x > 5:
    print("medium")
else:
    print("small")
```

:::quiz What does the code above print?
- [x] `big`
- [ ] `medium`
- [ ] `big` and then `medium`
- [ ] `small`

`15 > 10` is `True`, so the first block runs. Even though `15 > 5` is also `True`, Python never checks it: only one block of an `if`/`elif`/`else` statement ever runs.
:::

:::quiz If `age = 30`, which of these conditions are `True`?
- [x] `age > 18 and age < 40`
- [ ] `age < 18 or age > 65`
- [x] `not age == 20`
- [x] `20 <= age <= 30`
- [ ] `age != 30`

`20 <= age <= 30` includes 30 because `<=` means "less than or equal to". `age < 18 or age > 65` is `False` because neither side is `True`.
:::
