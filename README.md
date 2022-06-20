# dfs-hackathon-digital-identity

This repository contains a sample digital identity issuer and verifier application.

### Build

To build all images:

```
docker-compose build
```

### Run

WARNING: The issuer and verifier may be not running at the same time because of an ngrok restriction.

##### Run the issuer

```
docker-compose up -d issuer
```

You may then visit the issuer at http://localhost:3000.

##### Stop the issuer

```
docker-compose stop issuer
```

##### Run the verifier

```
docker-compose up -d verifier
```

You may then visit the verifier at http://localhost:3000.

##### Stop the verifier

```
docker-compose stop verifier
```
