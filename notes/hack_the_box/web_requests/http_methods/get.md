## HTTP Basic Auth
- To provide credentials by Basic realm we can add `-u` to curl `curl -u <creds> <url>` or `curl http://admin:admin@<server_Ip>:<PORT>/`
## HTTP Authorization Header
Manually setting the Authorization header
`curl -H 'Authorization: Basic <base64encodedcreds>' <url>`

## Get Parameters
```shell-session
curl 'http://<SERVER_IP>:<PORT>/search.php?search=le' -H 'Authorization: Basic YWRtaW46YWRtaW4='
```
