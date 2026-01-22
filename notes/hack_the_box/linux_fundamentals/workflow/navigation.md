# Navigation

The `pwd` command helps the user to know where is located in the file system. Then we can continue with the `ls` command, this one is in charged of listing the content of the current folder, fortunely we could add some flags to get more information like `-l`, which list more information of each content (i.e. permissions)

```shell
total <i>
drwxr-xr-x <n> <user> <group> 4096 Nov 13 17:37 Desktop
```

The first information we get is the total amounts of block with size 1024-byte used by the files and directories in the current path `i * 32 blocks * 1024 bytes/block`. The other columns represents the information as follows:

- Type and permissions.
- Number of hard links to the file/directory.
- Owner of the file/directory.
- Group owner of the file/directory.
- Size of the file or the number of blocks used to store the directory information.
- Date and time.
- Directory name.

The directories could have some hidden files that start with a dot (i.e. `.bashrc`), to list all files we could add the `-a` flag to list all.

> [!NOTE]
> Is not necesary to `cd` into the directory to list the content, we could pass the path as argument to the binary.

Now, we would introduce the `cd` command, this binary allows us to change directory. 

> [!TIP]
> You could get fast into the last directory you were using the dash symbol. `cd -`

> [!NOTE]
> Linux CLI help us auto completing the information to sent as argument to the binaries by TABbing.

> [!NOTE]
> If you are curious, using the `ls -la` command show to directories named as `.`, `..`. The first one indicates the current directory and the second one indicates the parent directory.

> [!TIP]
> We could navigate between our command history by using the arrow keys, and searching with the shortcut `[Ctrl] + [R]`.

**Tasks**:

- Search the usage of the `clear` command and the shortcut.
- As we could use `-` for getting the last path we were in, investigate about other mnemonics that help moving faster in the CLI. (i.e. !$)

