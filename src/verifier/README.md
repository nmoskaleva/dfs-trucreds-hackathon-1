## Sample Verity Verifier App

This is a sample Verifier app which is using Verity REST API.
For more information on this Sample Verifier app read this explanatory [document](../../../docs/howto/How-to-build-Verifier-using-REST-API.md)

Requirements:
- You have received Verity application endpoint, Domain DID and REST API key from Evernym
- You have NodeJs v12 installed
- You have ngrok installed ([https://ngrok.com/](https://ngrok.com/))

> **NOTE**: The Verifier application webhook endpoint (**/webhook**) needs to be served on a public URL so that Verity Application server can send messages to it. **Ngrok** is used here as a developer tool to provide a publicly available endpoint that tunnels to the local listening port of the Verifier App. If you have capabilities to start the Verifier application on a cloud infrastructure then you don't need to install and start ngrok - you just need to specify your URL address in the **webhookUrl** parameter (e.g. `http://<your_cloud_ip>:3000/webhook`)

To try out sample Verifier app follow these steps:
- In a separate terminal window start ngrok for port 3000 and leave it running :
```sh
ngrok http 3000
```
- Install required NodeJs packages:
```sh
npm install
```
- Change the values for **verityUrl**, **domainDid**, **xApiKey** and **webhookUrl** with your values in the **.env** file:
```
# Address of Verity Application Service
verityUrl="<< PUT VERITY APPLICATION SERVER URL HERE >>"

# Your Domain DID on the multi-tenant Verity Application Service
domainDid="<< PUT DOMAIN DID HERE >>"

# REST API key associated with your Domain DID
xApiKey="<< PUT X-API-KEY HERE >>"
```
Sample values might look like this:
```
# Address of Verity Application Service
verityUrl="https://vas.pps.evernym.com"

# Your Domain DID on the multi-tenant Verity Application Service
domainDid="AVYqFqjN759g87Z4sfZ3ED"

# REST API key associated with your Domain DID
xApiKey="7hD1b6XAJ9TYohsTcpqAcf6Xc2VR7RUGo3LiSFw4cS2n:5NAS3kkqLiteSePxk6tAhGsfdXnniX1ZM8xDjhwJiVFCwak7sUmuJiof7GwkJx6PV3yUCQwruRpxNpqq8FNvn69H"
```
- Start Verifier app
```sh
node VerifierReuse.js
```
Observe messages being exchanged between an Verifier app and a Verity application server on the console output. Scan QR code with a ConnectMe device to establish the connection when required.
