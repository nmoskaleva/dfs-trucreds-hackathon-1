# Developing a Custom Issuer Web Application

This document describes how to build a custom issuer application which uses the [Verity REST APIs](https://gitlab.com/evernym/verity/verity-sdk#rest-api).

This directory contains a sample node-based issuer web application.  The simplest way to create a custom issuer web application is by customizing this sample node application, which is what the remainder of this document assumes.  If you choose to use another language (e.q. java, python, etc), you will need to translate the sample code to the language of your choice.

## Customizing the sample issuer code

The following are step-by-step instructions for how to customize the sample node-based issuer web application.

1. If you do not yet have a team DOMAIN_DID and API_KEY, send an email of the following form to natalia.moskaleva@avast.com:

   ```
   Subject: Request for DFS hackathon team DOMAIN_DID and API_KEY

   Team: <your team name>
   ```

   Wait for Natalia will respond with your team's DOMAIN_DID and API_KEY values.
   
   Your team only needs a single DOMAIN_DID and API_KEY, so if you already have these, you can skip this step.

2. Request a CREDENTIAL_DEFINITION_ID by sending an email of the following form to natalia.moskaleva@avast.com:

      ```
      Subject: Request for DFS CREDENTIAL_DEFINITION_ID
   
      DOMAIN_DID: <your DOMAIN_DID>
      ATTRIBUTES: <a list of credential attribute names>
      ```

      The list of attribute names that you request will depend upon the attributes that your issuer will include in the credentials which it issues.  This will depend upon your use case.  For example, the ATTRIBUTES might be:
      ```
      ATTRIBUTES: first_name, last_name, age, city, state, zip
      ```

      Wait for Natalia to respond with your issuer's CREDENTIAL_DEFINITION_ID.

3. If you have not yet done so, fork this repository and clone the forked repository.  Set the `REPO_DIR` environment variable so that it refers to the `dfs-hackathon-digital-identity` directory just created when you cloned. 

4. Recursively copy the `$REPO_DIR/issuer` directory to another directory for your issuer application and set the `APP_DIR` environment variable to refer to this newly created directory.

   For example, if your web application is supposed to issue DFS employee credentials, you might copy the `$REPO_DIR/issuer` directory to `$REPO_DIR/issuer.dfsEmployeeCredentials` as follows:

   ```
   cd $REPO_DIR
   cp -R issuer issuer.dfsEmployeeCredentials
   export APP_DIR=$REPO_DIR/issuer.dfsEmployeeCredentials
   ```

5. Edit the file `$APP_DIR/src/.env` and set your DOMAIN_DID, API_KEY, and CREDENTIAL_DEFINITION_ID values appropriately (as obtained from steps 1 and 2).

6. Edit the `$APP_DIR/src/Issuer.js` file and set the `credData` variable with the appropriate attribute names and values.  You may also further customize this application based on your use case.

   TODO: Can we ask for DFS user/pass over the connection in order to authenticate and issue the appropriate attribute values.

## Building and running your issuer

You may build and run your issuer [via docker](#building-and-running-your-issuer-via-docker) or [natively](#building-and-running-your-issuer-natively).

### Building and running your issuer via docker

To build:

```
cd $APP_DIR
docker-compose build
```

To run:

```
docker-compose up -d
```

Your issuer should be available at `http://localhost:3000`.

### Building and running your issuer natively

Prereqs:
   - You have NodeJs v12 installed
   - You have ngrok installed ([https://ngrok.com/](https://ngrok.com/))

> **NOTE**: The issuer application webhook endpoint (**/webhook**) needs to be served on a public URL so that Verity Application server can send messages to it. **Ngrok** is used here as a developer tool to provide a publicly available endpoint that tunnels to the local listening port of the Issuer App. If you have capabilities to start the Issuer application on a cloud infrastructure then you don't need to install and start ngrok - you just need to specify your URL address in the **webhookUrl** parameter (e.g. `http://<your_cloud_ip>:3000/webhook`)

To build:

```
cd $APP_DIR/src
npm install
```

To run:

1. In a separate terminal window start ngrok for port 3000 and leave it running :

   ```
   ngrok http 3000
   ```

2. Start your issuer web application as follows:

   ```
   cd $APP_DIR src
   node Issuer.js
   ```

   Your issuer web application should be available at `http://localhost:3000`.

## Testing your issuer

Install the Connect.Me Digital Wallet mobile application on your iphone or android device.

Scan the QR code displayed by your issuer application and follow the on-screen instructions.