# Find Files and Directories
## Which
This tool help us finding the path or link that is being executed when running a command.
## Find
This command, help us finding files or folders, and has the option to pass filters, such as, name, user, size, etc ...

| Option | Description |
|--------|-------------|
| `-type f` | search for files |
| `-name *.conf` | search for the specific name |
| `-user root` | filters files with root as owner |
| `-size +20K` | filters files larger than 20KiB|
| `-newermt 2020-03-03` | filter for files newer than |
| `-exec ls -a {} \;` | Executes the command using `{}` as place holder|

## Locate 
Locate uses a local database containing all information about existing files and folders, giving us a quicker way to search.

> [!TIP]
> The local database could be update by running `sudo updatedb`.

> [!WARNING]
> The locate tool does not have many filter options, so it depends what we are looking for, to decide which command to use.

**Task**: find everything related to the `nc` tool.
