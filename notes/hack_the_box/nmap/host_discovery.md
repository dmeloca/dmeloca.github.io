#Methodology #Network

*We should  get an overview of which systems are online that we can work with*

-> The most effective method is using *ICMP* echo requests <-

**Pro-Tip:** It is always recommended to store every single scan. Later could be used for comparison, documentation and reporting (every tool provides different results, it will be beneficial to distinguish which tool produces which result)

#### Scan Network Range

```Bash
sudo nmap <network range> -sh -oA tnet | grep for | cut -d" " -f5
```

- `-sn` Disables port scanning
- `-oA tnet` Stores the results in all formats with the name "tnet"
**Disclaimer:** This method will only work if if the firewall allow it.
#### Scan IP List
Some times we will be provided of a IP list, so Nmap gives the option of working with lists

```Bash
sudo nmap -sn -oA <out_file> -iL <list_hosts> | grep for | cutr -d" " -f5
```

- `-sn` Disable port scanning
- `oA <out_file>` stores scanning in all formats
- `-iL` Performs the scans against targets provided 
#### Scan Multiple IPs
When we try to scan an small part of the network 

1. `sudo nmap -sn -oA <out_file> <ip/1> <ip/2> <ip/3> | grep for | cut -d" " -f5`
2. `sudo nmap -sn -oA <out_file> <ip/1-3> | grep for | cut -d" " -f5`
#### Scan Single Ip
Before scanning port and services, we first need to determine if its alive or not

```Bash
sudo nmap <ip> -sn -oA <out_file> -PE --packet-trace
```

- `-sn` disables port scanning
- `-PE` Performs the ping scan by using 'ICMP Echo requests' against 'host'
- `--packet-trace` Shows all packets sent and received
- `--reason` Displays the reason for specific result
- `--disable-arp-ping` Disable ARP requests and scan our target with the desire ICMP echo requests

[More](https://nmap.org/book/host-discovery-strategies.html)
