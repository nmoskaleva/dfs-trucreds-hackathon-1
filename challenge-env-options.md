# Event Structure
This document outlines options that event participants may consider.

## Mentors

| Group | Purpose | 
| --- | --- | 
| Design Thinking | Provide guidance on use of Design Thinking Recipe and creation of Playback deck. |
| Avast Support | Provide help on Development Options. |
| Digital Trust | General domain SME guidance. |
| Event Logistics | General support for event plans and resources. |
| AngelHack Support | Infrastructure support (Participation Guide, Registration, etc)

## Participant Development Issues
* Connecting Mobile Device via AirPlay for DFS laptop for demo recording. 
* Discover logos/icons for White-label React Mobile App
* Sovrin TestNest Schema Endorser (manual Avast Support requirement)
* Developers must register with Avast in advance. Need Hack Registration List to Avast
* 


## Challenge Options

| Challenge Name | Description | Key Submission Artifacts | Required Skills |
| --- | --- | --- | --- | 
| Use Case Ideation | Identification and prototyping of a FinTech use case that has applicability to Discover. | Miro Board Link,Use Case Playback Brief (SCIPAB and/or What/Why/Wow,Persona, Empathy and Journey Maps, Business Lean Canvas), Sequence Diagrams, 2-min Concept Playback Video, 2-min Quick Prototype Video | Design Thinking, Business Acumen, Avast Tutorial Basics, UML |
| Demo Show-n-Tell | Development of an end-to-end demonstration of a FinTech use case that has applicability to Discover. | Miro Board Link, Use Case Playback Brief (SCIPAB and/or What/Why/Wow,Persona, Empathy and Journey Maps, Business Lean Canvas), Sequence Diagrams,  Demo Code, 2-min Concept Playback Video, 2-min Demo Video | Design Thinking, Business and Technical Acumen, Avast Development, UML |

* Miro Board links
* Design Thinking Day 

## Development Options

### Quick Prototype (Non-Programmer Flow)
> Using *Avast Verity Flow* a Team can quickly create a video of a working prototype using a guided user interface and the Connect.me Mobile App. 

#### Workflow
1. Simulate an Issuer
   * Create new schema
   * Issue creds to a user w/Connect.me
2. Simulate a Verifier
   * Create a Proof Request
   * Send a proof request to a user user w/Connect.me
   * User sends a proof response to Verity Flow. 

  
### Custom Proof-of-Concept (Programmer Flow)
> Using *Avast Docker Image* a Team can create a video of a working demonstration of a custom solution to a Digital Trust use case.  

#### Workflow
1. Standup instance of Evernym Service (based on Docker image with REST API)
2. Develop an Issuer:  Create a web app that runs on local box to connect to an 
   * Register Issuer DID
   * Create Schema
   * Issue creds to a user with customized White-label React Mobile App
3. Develop Holder: customized White-label React Mobile App
4. Develop Verifier: 
   * Register Issuer DID
   * Create a Proof Request
   * Send a proof request to a user with customized White-label React Mobile App
   * User sends a proof response to Verifier App

#### Variations
| Approach | Complexity | Limitations |
| --- | --- | --- | 
| Use Default Mobile App (Connect.me) for Holder | Medium | Predicate Proofs not Supported. | 
| Use Custom Mobile App (White-label React Mobile App) for Holder | High | None. | 

#### Notes
1. ```Workflow Step 3``` should use Connect.me as a default test app to verify solution. Then a custom app can be considered to improve (customize) solution. 

### Custom Proof-of-Concept (Mixed Option)
> Using a combination of *Avast Verity Flow* and *Avast Docker Image* a Team can create a video of a working demonstration of a custom solution to a Digital Trust use case.  

#### Workflow
1. Standup instance of Evernym Service (based on Docker image with REST API)
2. Simulate an Issuer
   * Create new schema
   * Issue creds to a customized White-label React Mobile App
3. Develop Holder: customized White-label React Mobile App
4. Develop Verifier: 
   * Register Issuer DID
   * Create a Proof Request
   * Send a proof request to a user with customized White-label React Mobile App
   * User sends a proof response to Verifier App

#### Variations
| Approach | Complexity | Limitations |
| --- | --- | --- | 
| Use Default Mobile App (Connect.me) for Holder | Medium | Predicate Proofs not Supported. | 
| Use Custom Mobile App (White-label React Mobile App) for Holder | High | None. | 

#### Notes
1. ```Workflow Step 3```  should use Connect.me as a default test app to verify solution. Then a custom app can be considered to improve (customize) solution. 

## Environment Setup
>Document environment setup instructions for each [Development Option](#development-options).

### Quick Prototype (Non-Programmer Flow)