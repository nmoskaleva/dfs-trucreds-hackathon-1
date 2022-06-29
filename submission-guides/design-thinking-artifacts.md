# Design Thinking Guide

The instructions herein provide guidance on how a participating hackathon team can get started on the delivery of the requirements for their selected event track. 

>NOTE: These instructions are applicable to both event tracks.
## Prerequisite Educational

The following plenary sessions are recommended before beginning the hackathon. Please refer to the [Participant Guide](https://www.notion.so/angelhack/TruCreds-Hack-A-Digital-Trust-Hackathon-7e74d78809fb4a56bb9f898b48007464) for the schedule of sessions. 

* Design Thinking Experience

Familiarity with UML sequence diagrams is suggested:

* [What is a Sequence Diagram?](https://en.wikipedia.org/wiki/Sequence_diagram)
* [Why use UML Sequence Diagrams?](https://www.lucidchart.com/pages/uml-sequence-diagram)
* [PlantUML Tutorial](https://plantuml.com/sequence-diagram)

It is **highly recommended** review the [sample use case stories](./../HELP.md#digital-trust-use-cases) so that they can gain an understanding of the expectations of the judges.

## Sample Material
The following resources provide a bootstrap for participating hackers.

| Template | Description |
| --- | --- |
| Use Case Story | [Story template](../designs/story-template.md) |
| Design Thinking Miro Board Template | [Innovation Accelerator TruCreds Workshop Template]() |
| Design Thinking Playback Brief | [Innovation Accelerator TruCreds Playback Template]().|

## Exit Criteria
Upon successful completion of this guide, the following hackathon checklist requirements will be produced:

| Artifact | Description |
| --- | --- |
| Use Case Story | Markdown file describing the use case with support by UML diagrams. |
| Design Thinking Miro Board | URL to whiteboard used for team brainstorming. |
| Design Thinking Playback Brief | PowerPoint Presentation used to convey results of Design Thinking activities. This presentation *should* be used for the creation of the 2-min Concept Video. |

## Instructions

### Design Thinking Day 
>ToDo: J.Speir to describe steps for accessing, using miro board briefing.

### Payback Brief
>ToDo: J.Speir to describe steps for building the playback deck from the results of design thinking day. 

### Use Case Story

The objective here is to develop a human readable use case that can be easily consumed by business and technical readers. 

#### Develop UML

1. Pick a UML design tool (LucidCarts, PlantUML, other). Refer to [suggested tools](../submission-guides/tools.md).
2. Create a sequence diagram image and store it in the `./designs/images/uml` folder. Since diagram are often modified/altered, it is advised that you store the source files used to produce the diagram in the `./designs/src` folder.
3. Sometimes, a single diagram is too busy and would benefit from segmenting the steps into multiple diagrams. If multiple diagram are required, repeat `Step 2` for each required diagram. 
#### Develop Story

1. Make a copy of the provided story template file by replacing USECASE_NAME with the name of the team's use case.
   
   ```
   $ cp ./designs/story-template.md ./designs/USECASE_NAME.md 
   ```
2. Edit the story using the provided outline as a guide. Follow the provided inline template instructions. Feel free to augment the outline as needed. Leverage the `./designs/images` resources as directed. 





