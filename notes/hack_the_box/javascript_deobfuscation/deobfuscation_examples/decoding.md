Is common that obfuscated code have encoded text blocks that get decoded upon execution
## Base64
Reduce the usage of especial characters (alphanumeric and +,/)
### Spotting base64 
Alphanumeric characters and the = as padding characters. `Len = k*4`
### Base64 Encode
**Linux**:
`echo <string> | base64`
### Base64 Decode
**Linux:**
`echo <string> | base64 -d`

## Hex
Encodes the character into its hex order in the ASCII table (`man ASCII`)
### Spotting Hex
Characters between 0-9 and a-f
### Hex Encode
**Linux**
`echo <string> | xxd -p`
### Hex Decode
**Linux**:
`echo <string> | xxd -p -r`

## Caesar/Rot13
### Spotting Caesar/Rot13
Special characters remain the same and the phrase structure remains too
### Rot13 Encode
**Linux**
`echo <string> | tr 'A-Za-z' 'N-ZA-Mn-za-m'`

### Rot13 Decode
**Linux**
`echo <string> | tr 'A-Za-z' 'N-ZA-Mn-za-m'`

## Other Types of Encoding
> If you face any similar types of encoding, first try to determine the type of encoding, and then look for online tools to decode it.

**Tools**
- [Cipher Identifier](https://www.boxentriq.com/code-breaking/cipher-identifier)