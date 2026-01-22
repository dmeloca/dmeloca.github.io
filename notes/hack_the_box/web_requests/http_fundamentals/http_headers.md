**usage**: Pass information between client and server
## General Headers
(requests and responses)
**Usage**: Describe the message rather its contents
_eg_: 
- Date: Holds date and time where message is originated
- Connection: Determine of the connection should stay alive after the request finishes

## Entity Headers
(requests and responses)
**Usage**: Describe content transferred (POST/PUT)
_eg_: 
- Content-Type: describes type of resource being transferred
- Media-Type: describes data being transferred
- Boundary: Marker to separate when there are more than one message in a request or response
- Content-Length: Holds size of the entity being passed
- Content-Encoding: Type of encoding
## Request Headers
(requests)
**Usage**: Description of the request
_eg_: 
- Host: host queried during the request
- User-Agent: describe the client requesting resources
- Referer: Denotes where the current request is coming from
- Accept: Describes which media type the client can understand
- Cookie: Contains the cookie-value pairs `name=value` (identifier)
- Authorization: unique token for identification (client-side)
**More**: https://datatracker.ietf.org/doc/html/rfc7231#section-5
## Response Headers
(response)
**Usage**: provide context about the response
_eg_: 
- Server: information of the server that process the request
- Set-Cookie: contains the cookies for auth (`name=value`)
- WWW-Authenticate: Notifies the client the type of authentication required to access the resource
## Security Headers
(response)
**Usage**: specifies certain rules and policies for the client to access the resource
_eg_: 
- Content-Security-Policy: Dictates the website's policy towards externally injected resources (prevents XSS). Instructs the browser to accept resources only form certain domains
- Strict-Transport-Security: Forces the browser to communicate trough HTTPS (prevents sniffing)
- Referrer-Policy: Dictates whether the browser should include the value specified via the `Referer` header or not. It can help in avoiding disclosing sensitive URLs and information while browsing the website.
**More**: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers

## cURL
- `-I`: shows the response headers (sends only a HEAD request)
- `-i`: shows the headers and response body
- `-H`: set request headers