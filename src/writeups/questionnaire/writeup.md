# Questionnaire

For this challenge, we are given `test.c` and a compiled executable `test`. On the other hand, we also have the endpoint provided by HTB.

If we connect to the given IP via netcat or similar software, we are prompted to answer a series of questions.

---

**0x1. Is this a '32-bit' or '64-bit' ELF?**

* To answer this, we use the `file` command (it is recommended to check the man page for this command).

```bash
test: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=5a83587fbda6ad7b1aeee2d59f027a882bf2a429, for GNU/Linux 3.2.0, not stripped
```

- As you can see, this command reveals the answer.

---

**0x2. What's the linking of the binary?**

- Again, the `file` command helps us answer this question.
- **Answer:** `dynamic`

---

**0x3. Is the binary 'stripped' or 'not stripped'?**

- **Answer:** `not stripped` (based on the output of `file`)

---

**0x4. Which protections are enabled (Canary, NX, PIE, Fortify)?**

- Here we introduce another tool called `checksec`. This can be installed via the pwntools Python library and provides more information about the binary.

```bash
[*] '/HTB/challenges/pwn/pwn_questionnaire/test'
    Arch:       amd64-64-little
    RELRO:      Partial RELRO
    Stack:      No canary found
    NX:         NX enabled
    PIE:        No PIE (0x400000)
    SHSTK:      Enabled
    IBT:        Enabled
    Stripped:   No
```

- The `checksec` command analyzes the binary and identifies known protections.
- In this case, the correct answer is **`NX`**, as it is the only listed protection among the given options.

---

**0x5. What is the name of the custom function that gets called inside `main()`? (e.g. vulnerable_function())**

- Fortunately, the challenge provides the original C source code, making analysis easier.
- By inspecting `test.c`:

```c
void main(){
    vuln();
}
```

- The function called inside `main()` is `vuln()`.

---

**0x6. What is the size of the 'buffer' (in hex or decimal)?**

- By reading the code, we find:

```c
char buffer[0x20] = {0};
```

- **Answer:** `0x20`

---

**0x7. Which custom function is never called? (e.g. vuln())**

- By analyzing the program logic, we see that the function `gg()` is never called during normal execution.

---

**0x8. What is the name of the standard function that could trigger a Buffer Overflow? (e.g. fprintf())**

- Check the documentation using `man fgets`.
- The buffer size is `0x20`, but `fgets` reads up to `0x100` bytes.
- This mismatch creates a buffer overflow vulnerability.
- **Answer:** `fgets()`

---

**0x9. After how many bytes does a Segmentation Fault occur (in hex or decimal)?**

- We can test this using:

```bash
printf 'A%.0s' {1..n} | ./test
```

- By increasing `n`, we determine when the program crashes.
- **Answer:** `40`

---

**0xa. What is the address of `gg()` in hex? (e.g. 0x401337)**

- We use `gdb` to inspect the binary:

```bash
gdb test
```

- Inside `gdb`, run:

```bash
info functions
```

- This lists all functions along with their addresses.
- Since the output is in 64-bit format and the question asks for a 32-bit-style answer, we can truncate the leading zeros.

---

Finally, the challenge is solved.


