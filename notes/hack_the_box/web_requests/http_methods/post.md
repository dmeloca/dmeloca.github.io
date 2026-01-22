**Usage**: places user parameters within the HTTP Request body
**Benefits**:
- `Lack of Logging`: As POST requests may transfer large files (e.g. file upload), it would not be efficient for the server to log all uploaded files as part of the requested URL, as would be the case with a file uploaded through a GET request.
- `Less Encoding Requirements`: URLs are designed to be shared, which means they need to conform to characters that can be converted to letters. The POST request places data in the body which can accept binary data. The only characters that need to be encoded are those that are used to separate parameters.
- `More data can be sent`: The maximum URL Length varies between browsers (Chrome/Firefox/IE), web servers (IIS, Apache, nginx), Content Delivery Networks (Fastly, Cloudfront, Cloudflare), and even URL Shorteners (bit.ly, amzn.to). Generally speaking, a URL's lengths should be kept to below 2,000 characters, and so they cannot handle a lot of data.
## Login Forms
**Usage**: When verification is made externally or by an API (Querying)
`curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/`
**Tip**:  Many login forms would redirect us to a different page once authenticated (e.g. /dashboard.php). If we want to follow the redirection with cURL, we can use the `-L` flag.

## Authenticated Cookies
**Usage**: When authenticated we received a cookie to persist our authentication
**Visualization**: when applying `-v/-i` we should see `Set-Cookie` header
`curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/ -i`
Once we have the cookie we can sent the cookie with `-b` flag
`curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/`
`curl -H 'Cookie: PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/`

## JSON Data
`curl -X POST -d '{"search":"london"}' -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' -H 'Content-Type: application/json' http://<SERVER_IP>:<PORT>/search.php`