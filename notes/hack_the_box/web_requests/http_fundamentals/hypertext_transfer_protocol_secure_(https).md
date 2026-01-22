HTTP => all data is transferred in clear-text (MiTM: Man in the middle attacks)
HTTPS => all data is encrypted 
## HTTPS Overview
> Although the data transferred through the HTTPS protocol may be encrypted, the request may still reveal the visited URL if it contacted a clear-text DNS server. For this reason, it is recommended to utilize encrypted DNS servers (e.g. 8.8.8.8 or 1.1.1.1), or utilize a VPN service to ensure all traffic is properly encrypted.

## HTTPS Flow
1. if the user try to enter with http the server will redirect to the 443 with a 301 Moved Permanently
2. Certificates exchange
	- client sent a "client hello" packet with info about itself
	- server respond with "server hello" packet
	- server sent a key exchange to exchange SSL certificates
	- Client  verifies the certificate and send one of its own
	- handshake is initialized  to confirm the encryption and to ensure the transfer is working correctly
	- http communication is continued but encrypted.
> Depending on the circumstances, an attacker may be able to perform an HTTP downgrade attack, which downgrades HTTPS communication to HTTP, making the data transferred in clear-text. This is done by setting up a Man-In-The-Middle (MITM) proxy to transfer all traffic through the attacker's host without the user's knowledge. However, most modern browsers, servers, and web applications protect against this attack.

## cURL for HTTPS
To skip the certificate check 
`curl -k <url>`