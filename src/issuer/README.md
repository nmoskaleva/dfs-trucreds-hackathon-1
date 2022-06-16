## Sample Verity Issuer App

This is a sample Issuer app which is using Verity REST API. This sample app is adapted to the [new changes](https://gitlab.com/evernym/verity/verity-sdk/-/tree/main/docs/new-customers) on the Sovrin Staging Net.

Requirements:
- You have received Verity application endpoint, Domain DID and REST API key from Evernym
- You have a Credential Definition endorsed on the Staging Net (see manual for new customers [here](https://gitlab.com/evernym/verity/verity-sdk/-/tree/main/docs/new-customers))
- You have NodeJs v12 installed
- You have ngrok installed ([https://ngrok.com/](https://ngrok.com/))

> **NOTE**: The issuer application webhook endpoint (**/webhook**) needs to be served on a public URL so that Verity Application server can send messages to it. **Ngrok** is used here as a developer tool to provide a publicly available endpoint that tunnels to the local listening port of the Issuer App. If you have capabilities to start the Issuer application on a cloud infrastructure then you don't need to install and start ngrok - you just need to specify your URL address in the **webhookUrl** parameter (e.g. `http://<your_cloud_ip>:3000/webhook`)

To try out sample Issuer app follow these steps:
- In a separate terminal window start ngrok for port 3000 and leave it running :
```sh
ngrok http 3000
```
- Install required NodeJs packages:
```sh
npm install
```
- Change the values for **verityUrl**, **domainDid**, **xApiKey**, **webhookUrl**, and **credDefId** with your values in the **.env** file:
```
# Address of Verity Application Service
verityUrl="<< PUT VERITY APPLICATION SERVER URL HERE >>"

# Your Domain DID on the multi-tenant Verity Application Service
domainDid="<< PUT DOMAIN DID HERE >>"

# REST API key associated with your Domain DID
xApiKey="<< PUT X-API-KEY HERE >>"

# Credential definition Id used for issuing credentials 
# It has to be endorsed by Avast on the Sovrin Staging Net
credDefId="<< PUT YOUR CREDENTIAL DEFINITION ID HERE >>"
```
Sample values might look like this:
```
# Address of Verity Application Service
verityUrl="https://vas.pps.evernym.com"

# Your Domain DID on the multi-tenant Verity Application Service
domainDid="AVYqFqjN759g87Z4sfZ3ED"

# REST API key associated with your Domain DID
xApiKey="7hD1b6XAJ9TYohsTcpqAcf6Xc2VR7RUGo3LiSFw4cS2n:5NAS3kkqLiteSePxk6tAhGsfdXnniX1ZM8xDjhwJiVFCwak7sUmuJiof7GwkJx6PV3yUCQwruRpxNpqq8FNvn69H"

# Credential definition Id used for issuing credentials 
# It has to be endorsed by Avast on the Sovrin Staging Net
credDefId="Aa4sRAaxcSB4CqNJgnEUVk:3:CL:325441:latest"
```

- Change the values for **credentialData** with your values in the **Issuer.js** file:
```
const credentialData = '<< PUT CREDENTIAL DATA HERE >>' // Data you'll issue in a credential.
```
Sample values might look like this:
```javascript
const credentialData = {
    "First Name": "John", 
    "Last Name": "Doe"
}
```
- Start Issuer app
```sh
node Issuer.js
```
Observe messages being exchanged between an Issuer app and a Verity application server on the console output. Scan QR code with a ConnectMe device to establish the connection when required.

Open Issuer webapp in browser at http://localhost:3000
  