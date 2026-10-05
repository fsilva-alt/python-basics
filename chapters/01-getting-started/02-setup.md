---
duration: 10
---

# Install Python and run your first program

In this chapter you'll install Python (if you don't already have it), try some code in the interactive shell, and then write and run your first program from a file.

## Open a terminal

A **terminal** is a window where you type commands instead of clicking. You'll use it to run Python. Pick your operating system below; your choice is remembered on every tab in this page.

::::tabs
:::tab Windows
Open the **Start** menu, type `Terminal` (or `PowerShell` on older systems), and press <kbd>Enter</kbd>.
:::
:::tab macOS
Press <kbd>Cmd</kbd>+<kbd>Space</kbd> to open Spotlight, type `Terminal`, and press <kbd>Return</kbd>. You can also find it in **Applications › Utilities**.
:::
:::tab Linux
Most desktops open a terminal with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>. You can also search for "Terminal" in your applications menu.
:::
::::

## Check whether Python is installed

Python may already be on your computer. Type the command for your system and press <kbd>Enter</kbd>:

::::tabs
:::tab Windows
```powershell
py --version
```

If Python is installed, you'll see its version number, for example:

```text
Python 3.12.7
```
:::
:::tab macOS
```console
$ python3 --version
Python 3.12.7
```

On some Macs, running `python3` for the first time opens a dialog offering to install "command line developer tools". The Python included with those tools may be older than 3.10, so we recommend the official installer described below instead.
:::
:::tab Linux
```console
$ python3 --version
Python 3.12.7
```
:::
::::

Your numbers will probably differ, and that's fine. If the version is **3.10 or newer**, skip ahead to [Meet the interactive shell](#meet-the-interactive-shell). If you get an error, or the version is older, install Python first.

## Install Python

::::tabs
:::tab Windows
1. Go to the official downloads page and download the installer for Windows.
2. Run the downloaded file and follow the instructions on screen.
3. When the installation finishes, **close your terminal and open a new one**, so it picks up the changes.
4. Run `py --version` again to confirm that it worked.

> [!IMPORTANT]
> If the installer shows an option to **add Python to PATH**, turn it on. PATH is the list of places your terminal searches for programs; without it, the terminal may not find Python.
:::
:::tab macOS
1. Go to the official downloads page and download the installer for macOS (a `.pkg` file).
2. Open the downloaded file and follow the instructions on screen.
3. Close your terminal window and open a new one.
4. Run `python3 --version` again to confirm that it worked.
:::
:::tab Linux
Most Linux distributions include Python 3. If yours doesn't, install it with your package manager.

On Debian, Ubuntu and similar distributions:

```console
$ sudo apt update
$ sudo apt install python3
```

On Fedora and similar distributions:

```console
$ sudo dnf install python3
```

If your distribution only offers a version older than 3.10, check its documentation for a newer Python package.
:::
::::

[Download Python](https://www.python.org/downloads/){.button}

## Meet the interactive shell

Python comes with an interactive shell where you can type code and see the result immediately. Start it like this:

::::tabs
:::tab Windows
```powershell
py
```
:::
:::tab macOS
```console
$ python3
```
:::
:::tab Linux
```console
$ python3
```
:::
::::

You'll see a short message with the version number, followed by the prompt `>>>`. The prompt means "Python is waiting for you". Try typing these lines, pressing <kbd>Enter</kbd> after each one:

```pycon
>>> 2 + 3
5
>>> 7 * 6
42
>>> print("Hello!")
Hello!
>>> "ha" * 3
'hahaha'
```

Don't type the `>>>` yourself: Python shows it for you. The lines without a prompt are Python's answers.

REPL
: Short for **Read–Evaluate–Print Loop**, another name for the interactive shell. It *reads* what you type, *evaluates* (runs) it, *prints* the result, and then loops back to wait for more.

Prompt
: The text a program shows when it's waiting for you to type something, such as `>>>` in Python or `$` in many terminals.

To leave the shell, type `exit()` and press <kbd>Enter</kbd>. You'll be back at your normal terminal prompt.

:::tip
The interactive shell is perfect for quick experiments. Whenever you wonder "what happens if I…?", open it and find out. You can't break anything.
:::

## Write your first program

Typing into the shell is great for experiments, but anything you type there disappears when you close it. Real programs live in files.

1. Create a folder called `python-basics` in your home folder. You'll keep all your course files there.
2. Open your code editor and create a new file with these two lines:

   ```python title="hello.py"
   print("Hello, world!")
   print("I'm learning Python.")
   ```

3. Save it as `hello.py` inside your `python-basics` folder. The `.py` ending tells everyone (including your editor) that it's a Python file.

`print()` is a built-in **function** that displays whatever you put between its parentheses. Text in quotes is called a **string**. You'll learn much more about both soon.

## Run your program

In your terminal, move into the folder with `cd` ("change directory"), then ask Python to run the file:

::::tabs
:::tab Windows
```powershell
cd ~\python-basics
py hello.py
```
:::
:::tab macOS
```console
$ cd ~/python-basics
$ python3 hello.py
Hello, world!
I'm learning Python.
```
:::
:::tab Linux
```console
$ cd ~/python-basics
$ python3 hello.py
Hello, world!
I'm learning Python.
```
:::
::::

Python runs your file from top to bottom, one line at a time, and you should see the two messages. Congratulations, you're a programmer now! <span class="badge">Milestone</span>

:::note
To keep things short, the rest of this course shows terminal commands with `python3`. On Windows, type `py` instead, for example `py birthday.py`.
:::

## Common problems

:::warning "Command not found" or "not recognized"
Your terminal can't find Python. Close the terminal, open a new one and try again. On Windows, use `py` rather than `python`. If it still fails, run the installer again and make sure the option to add Python to PATH is turned on.
:::

:::caution You typed a terminal command inside Python
If you see `>>>` and then a `SyntaxError` after typing `python3 hello.py` or `py hello.py`, you're still inside the interactive shell. Type `exit()` first, then run the command again.
:::

:::note "No such file or directory"
Python can't find `hello.py` in the current folder. Check that you saved the file in `python-basics` and that you ran the `cd` command first. You can list the files in the current folder with `ls` (macOS, Linux and PowerShell) or `dir` (Windows).
:::

:::info The file is called hello.py.txt
Some editors on Windows add `.txt` to the end of file names. When saving, choose **All files** as the file type, or rename the file afterwards. Turning on the **File name extensions** option in File Explorer's view settings helps you spot this.
:::

## Check your understanding

:::quiz You see `>>>` in your terminal. What does it mean?
- [ ] Your program crashed and needs to be restarted.
- [x] You're inside Python's interactive shell, and it's waiting for code.
- [ ] Python finished running your file successfully.
- [ ] You need to install Python again.

`>>>` is Python's prompt. Anything you type there is run as Python code, so terminal commands like `cd` won't work until you leave with `exit()`.
:::

:::quiz Which of these commands run a file called `hello.py`?
- [x] `py hello.py` on Windows
- [x] `python3 hello.py` on macOS or Linux
- [ ] `run hello.py`
- [ ] `print("hello.py")` inside the interactive shell

You run a file by giving its name to the Python command: `py` on Windows, `python3` on macOS and Linux. Calling `print("hello.py")` just displays the text `hello.py`.
:::
