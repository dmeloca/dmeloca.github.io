Application-level protocol used to access WWW resources
*Hypertext:* text containing links to other resources
The client requests the server for a resource (80)

## Url 
Resources over HTTP are accessed via URL, which offers many specifications
![Url Parts](../../images/url_parts.png)
**Parts**
- Scheme: identify the protocol
- User info: (optional) authenticate the host
- Host: Resource Location
- Port
- Path: file to be accessed
- Query String: started by `?`, specify the parameters
- Fragments: Locate sections (browser)
*Note:* not all are required (only: scheme and host)
## HTTP flow
1. Request DNS to resolve the domain of the URL and get the IP
	- Our Browser first looks in `/etc/hosts` 
2. Sent a GET request to the HTTP default port asking for /
3. if `200 OK` the browser renders the index.html
## cURL
- `-O` Download file
- `-s` reduce noise