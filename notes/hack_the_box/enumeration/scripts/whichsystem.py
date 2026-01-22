#!/usr/bin/python3

import re, sys, subprocess

#python3 whichSystem.py <ip> 
def get_ttl(ip_address: str) -> int:
    try:
        proc: subprocess.Popen = subprocess.Popen(["ping", "-c", "1", ip_address, ""], stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        out = out.split()[12].decode('utf-8')
        ttl_value: str = re.findall(r"\d{1,3}", out)[0]
        return int(ttl_value)
    except IndexError:
        print("\n[!] Unable to get TTL value\n")
        sys.exit(1)

def get_os(ttl: int) -> str:
    if ttl >= 0 and ttl <= 64:
        return "Linux"
    elif ttl >= 65 and ttl <= 128:
        return "Windows"
    else:
        return "Unknown"

def main(ip_address: str) -> None: 
    ttl: int = get_ttl(ip_address)
    os_name: str = get_os(ttl)
    print("%s (ttl -> %s): %s" % (ip_address, ttl, os_name))

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"\n[!] Usage: python3 {sys.argv[0]} <ip>\n")
        sys.exit(1)
    ip_address: str = sys.argv[1]
    main(ip_address)