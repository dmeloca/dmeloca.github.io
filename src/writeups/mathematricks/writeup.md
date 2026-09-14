# Mathematricks


Avoiding the basic arithmetic questions, the most relevant part of the challenge lies in solving the final task, which requires providing two positive integers whose sum results in a negative value. This behavior indicates the presence of an integer overflow.

To achieve this, it is necessary to determine the data type used by the program to store user input. Since only the compiled binary is provided, the program must be reverse-engineered through decompilation. The resulting pseudocode reveals that the input values are stored in variables of type long.

Given this, the next step is to identify the maximum representable value for this data type. As the function `read_num()` reads 31 character we asssume 32-bit signed representation, with maximum value is 2,147,483,647 ($2^{31} - 1$). By supplying this value along with 1, their sum exceeds the representable range and causes an integer overflow, resulting in a negative value due to wrap-around behavior in two's complement arithmetic.

If you have the couriosity of how this challenges works:

An integer overflow happens when a number gets too big (or too small) for the space
the computer reserved to store it. Computers don't have infinite room for numbers.
They use a fixed number of bits, like 8, 16, 32, or 64 bits. That means there's a
hard limit.

With a fixed number of bits, there are only so many combinations possible.

For 8 bits:
```txt
11111111 = 255
+       1
---------
100000000  (9 bits)
```
The extra bit gets dropped, leaving:
```txt
00000000 = 0
```
If the number can be negative, things use a format called two's complement.

Example: a signed 8-bit integer ranges from -128 to 127.

Now:
```txt
127 + 1 = -128
```
Because the binary flips in a way that wraps into the negative range.
