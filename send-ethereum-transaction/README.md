## Generate Ethereum transactions offline then send them to the Network

* Visit https://infura.io/ to obtain an access token
* Place your private key in a file called wallet_pkey in the current directory. This will be used to generate your transaction offline.
* Configure your send and receiving ethereum addresses in the script

#### Export envvars needed to run
```export PKEY=$( cat ./wallet_pkey) && export INFURA_ACCESS_TOKEN='access-token'```

#### Generate & send transaction
```node send-ethereum.js```
