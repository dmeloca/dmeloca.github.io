# File Descriptors and Redirectors
The FD is a unique identifier for any I/O source to track it.

- Input `0 - STDIN` 
- Output `1 - STDOUT`
- Errors `2 - STDERR`

| Redirect | Description | 
|----------|-------------|
| STDOUT | `> <file>` redirects the output to `<file>`.|
| STDERR | `2> <file>` redirects error to `<file>`.|
| STDIN | `< <file>` redirects a file into the input.|
| Appending | `>>` this will append and not delete the content of the file.|
| Stream file | `cat << EOF > stream.txt` this saves the user input in a file.
| Pipes | This passes the ouput of a command to be processed by anther command. |
