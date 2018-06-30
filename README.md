# artillery-plugin-http-ssl

An [artillery.io](https://artillery.io) plugin for loading TLS certificates into memory for use in an artillery script.  This allows using artillery aganist services requiring mutual authentication for successful socket connection.

To use:
1. `npm install -g artillery`
2. `npm install -g artillery-plugin-http-ssl`
3. add the `ssl` plugin to your Artillery script (note that example configuration of the TLS attributes is additionally shown):
```yaml
# hello.yml
config:
  tls: # see https://github.com/request/request#tlsssl-protocol # these are all optional according to your needs
    ca: <path-to-ca-file>
    cert: <path-to-cert-file>
    key: <path-path-to-key-file>
    passphrase: <phrase>
  plugins:
    ssl: {} # empty object
```
4. `artillery run hello.yml`

This will cause the files located at the given paths (all attributes are optional) to be synchronously loaded and used to open the connection to your remote host as defined at https://github.com/request/request#tlsssl-protocol.
