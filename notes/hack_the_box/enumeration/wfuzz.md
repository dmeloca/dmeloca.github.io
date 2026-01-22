# Wfuzz
After discovering an http server on the machine, we should try to discover which open files we can intrude. For this, with a dictionary attack we are going to sent get request to discover the accesable pages trough the response code.
- Some of the dictionaries could be found on /usr/share/dirbuster

```Bash
wfuzz -c -L -t 400 --hc=<code_to_filer> -w <path_to_dictionary> <MachineIp>/FUZZ
```
Then if you wnato to proceed with multiple fuzzing, like searching for files with a certain extension, we can use the following command
```Bash
wfuzz -c -L -t 400 --hc=<code_to_filer> -w <path_to_dir> -w <path_to_2_dir> http://<IPAddress>/FUZZ.FUZ2Z
```