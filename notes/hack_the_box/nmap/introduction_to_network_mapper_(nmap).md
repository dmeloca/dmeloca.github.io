#Enumeration #Tools #Network 

## What is?
Tool designed to scan networks and identify which hosts are available using raw packets. (services, applications, versions, operating systems)
## Use Cases
- Audit the security aspects of networks
- Simulate penetration tests
- Check firewall and IDS settings and configurations
- Types of possible connections
- Network mapping
- Response analysis
- Identify open ports
- Vulnerability assessment as well.
## Scanning techniques
- Host Discovery
- Port Scanning
- Service enumeration and detection
- OS detection
- Scriptable interaction with the target service
## Syntax

```Bash
nmap <scan types> <options> <target>
```

## Scan Techniques

```Bash
nmap --help
```

**Example**: TCP-SYN scan (`-sS`), sent packets with SYN flag (Never completes the three-way handshake, it means never stablish a full TCP connection to the scanned port)
*How it works*: 
- If the target sends a `SYN-ACK` flagged packet back to us, Nmap detects port as `open`
- If the target responds with `RST` flagged packet, is detected as `closed`
- if not packet received, port display as `filtered`. Depending on the firewall config, certain packets may be dropped or ignored by the firewall.