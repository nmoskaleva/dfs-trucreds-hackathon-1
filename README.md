# dfs-hackathon-digital-identity

This repository contains a sample digital identity issuer and verifier application.

### Build

To build all images:

```
docker-compose build
```

### Run

WARNING: The issuer and verifier may be not running at the same time because of an ngrok restriction.

##### Running the issuer

To run the issuer:

```
docker-compose up -d issuer
```

You may then visit the issuer at http://localhost:3000.

##### Stopping the issuer

To stop the issuer:

```
docker-compose stop issuer
```

### Running the verifier

To run the verifier:

```
docker-compose up -d verifier
```

You may then visit the verifier at http://localhost:3000.

##### Stopping the verifier

To stop the verifier:

```
docker-compose stop verifier
```

