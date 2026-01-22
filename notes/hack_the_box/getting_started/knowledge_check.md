## Enumeration 
First to know about the operating system of the machine I performed a ping, with this tool by the `ttl` we can get the type of operating system

![Ping](../images/getting-started/ping.png)

Now we know we are dealing with a UNIX machine. After this, we will try to enumerate the services running on the host. Let's try using nmap.

![Nmap Scan](../images/getting-started/nmap-ports.png)

With this scan we are searching to filter any open port on the machine, but wanting to avoid raising alarms, for this reason we are avoiding looking for the version of any closed or filtered port. Now we will make and specialized enumeration on the open port

![Nmap Scan Specialized](../images/getting-started/specialized-namp.png)

Later, as we have a http server running on 80 we should try entering to the web server by our browser. While we are looking for more information in the web page, I will start a brute force scanning searching for hidden but open files or directory with `gobuster`. Obviously, after an already make what web

![What web](../images/getting-started/whatweb.png)

After the `gobuster` finished we see an interesting page in our machine

![Gobuster](../images/getting-started/gobuster.png)

Obviously we entered to this page and tried common credentials in this case `admin:admin`, the we have access to the dashboard

![Admin](../images/getting-started/admin.png)
![Dashboard](../images/getting-started/dashboard.png)

## Exploitation 
**Using Metasploit Framework**:
1. search for the `getsimple 3.3.15`
![Search on Metasploit](../images/getting-started/search_metasploit.png)
2. configure and run the exploit
![Configure Metasploit](../images/getting-started/configure_exploit.png)
3. get a shell
4. enter `python3 -c 'import pty; pty.spawn("/bin/bash")'` to get a pseudo TTY
5. execute `sudo -l`
![Sudo](../images/getting-started/sudo.png)
6. As www-data we can execute the php binary so lets try getting a root shell with this by running `sudo /usr/bin/php -r 'pcntl_exec("/bin/bash")'`
7. search for the flags
