# Cyber Kill Chain
## What is the cyber kill chain?
> This lifecycle describes how attacks manifest themselves. Understanding this lifecycle will provide us with valuable insights on how far in the network an attacker is and what they may have access to during the investigation phase of an incident.

![Cyber Kill Chain](../images/cyber_kill_chain.png)

### Recon
Where attacker chooses their target, gather information (passive/active). 

### Weaponize
The malware is developed and embedded into some type of exploit or deliverable payload (created lightweight and undetectable)

### Delivery
The exploit or payload is delivered to the victim(s)

### Exploitation
The moment where the delivered exploit is triggered, here the attacker execute code to gain access or control

### Installation
- **Droppers**: A dropper is an small piece of code that is designed to install malware on the system and execute it. Deliver malware onto the system (email, malicious websites, social engineering)
- **Backdoors**: Malware designed to provide an ongoing access to the compromised system, this may be installed during exploitation stage or delivered by a Dropper 
- **Rootkits**: Malware to hide presence on a compromised system. Used on installation stage to evade detection. Installed during exploitation and delivered by a Dropper
### Command and Control
Here the attacker establishes a remote access capability to the compromised machine. 

>  As discussed, it is not uncommon to use a modular initial stager that loads additional scripts 'on-the-fly'. However, advanced groups will utilize separate tools in order to ensure that multiple variants of their malware live in a compromised network, and if one of them gets discovered and contained, they still have the means to return to the environment.

### Action
The objective of each attack can vary. Some adversaries may go after exfiltrating confidential data, while others may want to obtain the highest level of access possible within a network to deploy ransomware. Ransomware is a type of malware that will render all data stored on endpoint devices and servers unusable or inaccessible unless a ransom is paid within a limited timeframe (not recommended).


## Conclusion
It is important to understand that adversaries won't operate in a linear manner (like the cyber kill chain shows). Some previous cyber kill chain stages will be repeated over and over again. If we take, for example, the `installation` stage of a successful compromise, the logical next step for an adversary going forward is to initiate the `recon` stage again to identify additional targets and find vulnerabilities to exploit, so that he moves deeper into the network and eventually achieves the attack's objective(s).

> Our objective is to `stop an attacker from progressing further up the kill chain`, ideally in one of the earliest stages.