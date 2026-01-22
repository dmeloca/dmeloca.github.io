# Nmap
#tools #enumeration 

#### Ports:
[!] Number of ports: 65535

### Commands:
1. Scan all the ports
```bash
nmap <IPDirection> -p-
```
2. Filter by opened
```bash
nmap <IPDirection> -p- --open
```
3. Add timing
```bash
nmap <IPDirection> -p- --open -T5
```
4. without DNS resolution
```bash
nmap <IPDirection> -p- --open -T5 -v -n
```
5. make a file with the results
```Bash
nmap <IPDirection> -p- --open -T5 -v -n -oG <fileName>
```

### Results
With the grep-able file created after the *nmap* scan, we can filter ports by our necessities
```Bash
#Colours
greenColour="\e[0;32m\033[1m"
endColour="\033[0m\e[0m"
redColour="\e[0;31m\033[1m"
blueColour="\e[0;34m\033[1m"
yellowColour="\e[0;33m\033[1m"
purpleColour="\e[0;35m\033[1m"
turquoiseColour="\e[0;36m\033[1m"
grayColour="\e[0;37m\033[1m"

function extractPorts(){

	echo -e "\n${yellowColour}[*] Extracting Information...${endcolour}\n"
	ip_address=$(cat allPorts | grep -oP '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}'| sort -u)
	open_ports=$(cat allPorts | grep -oP '\d{1,5}/open' |  awk -F"/" '{print $1}' | xargs | tr ' ' ',')
	echo -e "\t${blueColour}[*] IP Adress: ${endColour}${grayColour}$ip_address${endColour}"
	echo -e "\t${blueColour}[*] Open Ports: ${endColour}${grayColour}$open_ports${endColour}\n"
	echo $open_ports | tr -d '\n' | xclip -sel clip
	echo -e "${yellowColour}[*] Ports has been copied to clipboard!${endColour}\n"

}

```
Now having the open ports, we proceed to check more info about this like software running there

```Bash
nmap -sC -sV -p<openPorts> <IPAdress> -oN <targeted>
```

After, knowing is there a http port (80) we can use tools like wapalyzer or whatweb to get more info

### How to improve the scanning time
1. Emiting packets in a certain time
```Bash
nmap -sS --min-rate 5000 --open -vvv -n -Pn -p- <IpAdress>
```

### Creating our scripts
```Bash
if [ $1 ]; then
    ip_address=$1
    for port in $(seq 1 65535); do
        timeout  1 bash -c "echo '' >  /dev/tcp/$ip_address/$port 2>/dev/null" && echo "[*] Port $port - OPEN" &
    done; wait
else 
    echo -e "\n[!] Uso: ./portScan.sh <IP>\n"
    exit 1
fi
```

### Scanning other devices in the net segment
```Bash
for i in $(seq 2 254); do
    timeout 1 bash -c "ping -c 1 192.168.101.$i > /dev/null 2>&1" && echo "[*] Host $netsegment.$i - ACTIVE" &
done; wait
```
### Using Nmap scripts
(written in Lua)
1. Searching categories
```bash
locate .nse | xargs grep "categories" | grep  -oP '".*?"' | sort -u 
```
#### By categories

```Bash
nmap  -p<port> <IPAddress> --script "<categories> -oN <fileName>"
```
[To - Do]: make a script that get the tools by categorie, or the categorie of a script of nmap

#### By a specific script
```Bash
nmap -p<ports> <IPAddress> --script <scriptName>
```
##### Capturing network traffic
```Bash
tcpdump -i <networkInterface>  -w <fileName.cap> -v
```
##### Reading a pcap file
```Bash
tshark -r <CaptureFile.cap> -Y "<filterName>" -Tjson 2>/dev/null
```
[!] important part on the json file: tcp.payload
```Bash
tshark -r <CaptureFile.cap> -Y "<filterName>" -Tfields -e tcp.payload 2>/dev/null
```
Passing the info from hexadecimal to a reading file
```Bash
tshark -r <CaptureFile.cap> -Y "<filterName>" -Tfields -e tcp.payload 2>/dev/null | xxd -ps -r
```
- how to run process independed
 ```Bash
 <command> <flags> > /dev/null 2>&1 & disown
 ```
 