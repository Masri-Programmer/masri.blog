---
title: "29 Fundamental Techniques for Software Architects"
source: "https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev"
author:
  - "[[workingsoftware.dev]]"
published: 2025-01-13
created: 2025-03-28
description: "Discover essential techniques for software architects to design modern systems, align with business goals, and manage stakeholders effectively. Learn more in this post!"
tags:
  - "clippings"
---
In the fast-paced world of software development, the right architecture can make or break the success of a software initiative.

As organisations grapple with ever-changing requirements, stakeholders, and cutting-edge technologies, mastering a variety of techniques is paramount.

Here's my latest overview: a list of the most important techniques for software architects.

This comprehensive collection gives architects the techniques they need to not only design solid architectures, but to seamlessly align them with business goals.

Learn how these techniques enable architects and teams to make informed decisions, minimise risk, and communicate effortlessly with stakeholders.

Let's dive in!

❗

The list is not complete! If important techniques for software architects are missing, please let [me](https://www.workingsoftware.dev/contact/) know.

- [Strategic Planning & Strategic Decision Making](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#strategic-planning-strategic-decision-making)
	- [Impact Mapping](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#impact-mapping)
	- [Wardley Mapping](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#wardley-mapping)
- [Initial Concept, Aligning Teams & Structuring](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#initial-concept-aligning-teams-structuring)
	- [Domain Storytelling](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#domain-storytelling)
	- [Event Storming](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#event-storming)
	- [Ubiquitous Language](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#ubiquitous-language)
	- [Architecture Inception Canvas](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#architecture-inception-canvas)
	- [Frontend Architecture Map](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#frontend-architecture-map)
	- [arc42 Quality Model](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#arc42-quality-model)
	- [Quality Storming](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#quality-storming)
	- [Event Modeling](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#event-modeling)
	- [Context Mapping](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#context-mapping)
	- [Bounded Context Canvas](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#bounded-context-canvas)
	- [Domain Prototyping](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#domain-prototyping)
- [Decision Making](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#decision-making)
	- [Architecture Principles](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#architecture-principles)
	- [Architecture Decision Records](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#architecture-decision-records)
	- [Markdown Architecture Decision Records](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#markdown-architecture-decsion-records)
- [Technology Management](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#technology-management)
	- [Tech Stack Canvas](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#tech-stack-canvas)
	- [Technology Radar](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#technology-radar)
- [Risk Management](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#risk-management)
	- [Risk Storming](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#risk-storming)
	- [Technical Debt Records](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#technical-debt-records)
	- [Threat Modeling](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#threat-modeling)
- [Visualisation & Documentation](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#visualisation-documentation)
	- [Architecture Communication Canvas](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#architecture-communication-canvas)
	- [C4 Model](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#c4-model)
	- [arc42 Template](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#arc42-template)
	- [Documentation as Code](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#documentation-as-code)
- [Assess, Measure, Improve and Adapt](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#assess-measure-improve-and-adapt)
	- [DORA Metrics](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#dora-metrics)
	- [Lightweight Approach for Software Architecture Reviews](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#lightweight-approach-for-software-architecture-reviews)
	- [aim42 - Architecture Improvement Method](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#aim42architecture-improvement-method)
	- [Residuality Theory](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/?ref=dailydev#residuality-theory)

## Strategic Planning & Strategic Decision Making

💡

****Impact Mapping:**** a collaborative strategy tool that visually aligns an organisation's efforts with measurable goals to achieve effective impact and success.  
  
****Wardley Mapping:**** a visual strategic tool that aids in understanding business value chains and decision making by visualising the maturity and connectivity of components.

### Impact Mapping

[Impact mapping](https://www.workingsoftware.dev/fundamental-techniques-for-software-architects/impactmapping.org) is a strategic planning technique that helps organizations identify and prioritize actions based on their potential impact on achieving a specific goal.

It involves all stakeholders working together to define the goals, the actors that can influence the outcomes, the impacts that contribute to the goal, and deliverables that these impacts can produce.

This visual roadmap aligns teams and resources around measurable outcomes and ensures that efforts are focused on activities that deliver real value and drive success.

![](https://www.impactmapping.org/assets/gaming_example.png)

Example of an Impact Map ( [Source](https://www.impactmapping.org/?ref=workingsoftware.dev) )

### Wardley Mapping

[Wardley Mapping](https://learnwardleymapping.com/?ref=workingsoftware.dev) is a strategic planning tool that helps companies to visualize the value chain of their products and services in order to better understand their competitive environment.

Developed by Simon Wardley, the mapping depicts the components of a business or service as a chain of needs and shows their level of maturity from commodity to customized products.

This visual approach helps companies to identify areas of inefficiency, predict industry trends and decide where to invest resources for innovation and improvement to make better strategic decisions.

![](https://www.youtube.com/watch?v=6hXpbZ7TpP4)

Great talk by Markus Harrer about Wardley Mapping

## Initial Concept, Aligning Teams & Structuring

💡

****Domain Storytelling:**** Initiates the understanding of business processes and creates a narrative foundation for everyone involved.  
  
****Event Storming:**** a collaborative, visual modeling technique used by teams to explore complex business domains by identifying and discussing events, commands and policies.  
  
****Ubiquitous Language:**** a common vocabulary that ensures clear communication throughout the software lifecycle.  
  
****Architecture Inception Canvas:**** Captures the initial architecture playground, including business drivers and constraints.  
  
****Q42:**** is a simple and practical method for evaluating product and system quality.  
  
****Quality Storming:**** Collaborative modeling for a cross-skill collection and prioritization of quality requirements for software.  
  
****Event Modeling:**** is a visual technique to design and understand system architectures.  
  
****Context Mapping:**** identifies and describes the contact between bounded contexts and teams.  
  
****Bounded Context Canvas:**** helps architects to define the boundaries within which a particular domain model applies.

### Domain Storytelling

[Domain Story Telling](https://domainstorytelling.org/?ref=workingsoftware.dev) is a narrative technique used to capture and communicate the business processes and requirements in a way that is easily understood by all stakeholders.

This approach helps to ensure that the software solution meets the business requirements.

![Modeling with sticky notes](https://domainstorytelling.org/assets/images/quick-start-guide/stickies.jpg)

Example [Domain Story Telling](https://domainstorytelling.org/?ref=workingsoftware.dev) ( [Source](https://domainstorytelling.org/quick-start-guide?ref=workingsoftware.dev) )

### Event Storming

[Event Storming](https://www.eventstorming.com/?ref=workingsoftware.dev) is a collaborative, visual modeling technique used by teams to explore complex business domains by identifying and discussing events, commands and policies.

![](https://www.youtube.com/watch?v=mLXQIYEwK24)

Event Storming Talk by Alberto Brandolini at the DDD Europe 2019

### Ubiquitous Language

Introduces a common vocabulary to ensure clear communication throughout the whole software lifecycle.

![](https://www.youtube.com/watch?v=E838kPCTKmU)

Ubiquitous Language simplified

### Architecture Inception Canvas

The journey begins with the [Architecture Inception Canvas](https://canvas.arc42.org/architecture-inception-canvas?ref=workingsoftware.dev) (formerly [Software Architecture Canvas](https://www.workingsoftware.dev/software-architecture-canvas/) ), a technique for capturing the essence of a software initiative, business drivers, constraints, business context and initial architecture assumptions.

![](https://www.workingsoftware.dev/content/images/2024/05/image-6.png)

Architecture Inception Canvas ( [Source](https://canvas.arc42.org/downloads?ref=workingsoftware.dev#architecture-inception-canvas-aic) )

### Frontend Architecture Map

The [Frontend Architecture Map](https://www.workingsoftware.dev/frontend-architecture-map-a-user-journey-driven-approach-to-avoid-hype-driven-development/) is a user-centered approach that focuses on aligning frontend development with actual user needs rather than trends. The focus is on understanding user interactions and designing an architecture that effectively supports these journeys. The map helps teams to identify the most appropriate technologies and practices while avoiding hype-driven decisions. Their goal is to create a more suitable and user-centered front-end architecture.

![](https://www.workingsoftware.dev/content/images/2024/09/image-13.png)

[The Frontend Architecture Map](https://www.workingsoftware.dev/frontend-architecture-map-a-user-journey-driven-approach-to-avoid-hype-driven-development/)

### arc42 Quality Model

As [ISO 25010](https://www.iso.org/standard/78176.html?ref=workingsoftware.dev) lacks practical guidance and pragmatism, there is an alternative approach proposed by arc42 - the arc42 quality model " [Q42](https://quality.arc42.org/?ref=workingsoftware.dev) ".

The arc42 Quality Model " [Q42](https://quality.arc42.org/?ref=workingsoftware.dev) " is a straightforward and practical method for assessing product and system quality.

![](https://www.workingsoftware.dev/content/images/2024/03/1.png)

[arc42 Quality Model](https://quality.arc42.org/?ref=workingsoftware.dev) (Image [Source](https://www.workingsoftware.dev/the-ultimate-guide-to-write-non-functional-requirements/) )

It starts with understanding stakeholder expectations and requirements to identify 8 key system properties.

These properties are designed to encompass most of the 100+ traditional quality attributes that are required, desired or expected.

### Quality storming

Quality Storming is a workshop for determining quality requirements based on a quality model such as the ISO 25010 standard. This method uses techniques and ideas from Collaborative Modeling, which is very popular in the Domain-Driven Design community. An important aspect of Quality Storming is the collaboration between different stakeholders and departments.

![](https://www.youtube.com/watch?v=A9gwpi8Vkoo)

QualityStorming: Collaborative Modelling for Quality Requirements

### Event modeling

[Event modeling](https://eventmodeling.org/?ref=workingsoftware.dev) is a visual technique for designing and understanding system architectures through the representation of events, commands, and views that show how data flows and changes in a system. Perfect for aligning teams around complex processes.

![](https://www.youtube.com/watch?v=Pin_B-AbdXE)

Adam Dymitruk. Event Modeling from Beginner to Expert

![](https://eventmodeling.org/posts/what-is-event-modeling/blueprint_large.jpg)

Event Modeling Example ( [Source](https://eventmodeling.org/posts/what-is-event-modeling/?ref=workingsoftware.dev) )

### Context Mapping

[Context maps](https://learning.oreilly.com/library/view/what-is-domain-driven/9781492057802/ch04.html?ref=workingsoftware.dev) are visual or conceptual diagrams that illustrate how different bounded contexts (different functional areas within a software system) interact with each other.

They help to understand the relationships and dependencies between these contexts, such as shared identities, customer/supplier relationships or different types of system integration.

Context maps are crucial for maintaining a clear architecture and facilitate communication between teams working on different parts of a system.

![](https://www.youtube.com/watch?v=k5i4sP9q2Lk)

Introduction to Context Mapping by Michael Plöd

![Insurance Company Example Context Map](https://raw.githubusercontent.com/ContextMapper/context-mapper-examples/master/src/main/cml/insurance-example/images/ContextMap-Illustration.png)

Context Mapping Example ( [Source](https://contextmapper.org/docs/examples/?ref=workingsoftware.dev) )

### Bounded Context Canvas

The [Bounded Context Canvas](https://github.com/ddd-crew/bounded-context-canvas?ref=workingsoftware.dev) helps architects to define the boundaries within which a particular domain model applies. This is important to manage complexity and ensure that the different components of the system communicate effectively with each other.

![bounded-context-canvas-v5.jpg](https://github.com/ddd-crew/bounded-context-canvas/blob/master/resources/bounded-context-canvas-v5.jpg?raw=true)

[Bounded Context Canvas](https://github.com/ddd-crew/bounded-context-canvas?ref=workingsoftware.dev) ( [Source](https://github.com/ddd-crew/bounded-context-canvas?ref=workingsoftware.dev) )

### Domain Prototyping

Domain prototyping is a technique in which a preliminary version of a system or software module is created to explore and validate concepts within a particular domain.

This approach helps developers and stakeholders understand system requirements, functionalities and potential issues by giving them a hands-on preview before full-scale development begins.

It is particularly useful for complex systems where domain knowledge is highly intricate, as it allows for iterative feedback and refinements that ensure the final product is better aligned with user needs and expectations.

![](https://www.youtube.com/watch?v=gDT5PKIYsT0)

Tobias Goeschel about Domain Prototyping

## Decision Making

💡

****Architecture Principles:**** guide decision-making by providing a set of values and standards that align the software initiative with organisational goals and best practises.  
  
****Architecture Decision Records (ADRs):**** ensure that decisions are made transparently and systematically and can be revised as the software evolves.  
  
****Markdown Architecture Decision Records (MADRs):**** Markdown Architectural Decision Records (MADRs) provide an optimised template to capture these records in an efficient and structured way.

### Architecture Principles

The [architectural principles](https://www.workingsoftware.dev/architecture-principles/) guide decision-making by providing a set of values and standards that align the project with organisational goals and best practises.

### Architecture Decision Records

The decision-making process in the architecture, which can be documented by [Architecture Decision Records (ADR),](https://adr.github.io/?ref=workingsoftware.dev) ensures that decisions are made transparently and systematically and can be reviewed during the life cycle of the software.

ADRs on GitHub: [https://adr.github.io/](https://adr.github.io/?ref=workingsoftware.dev)

### Markdown Architecture Decsion Records

Markdown Architectural Decision Records (MADRs) provide an optimised template to capture these records in an efficient and structured way.

## Technology Management

💡

****Tech Stack Canvas:**** Create, document and communicate the product's tech stack.  
  
****Technology Radar:**** A technique used by companies to map their current technology landscape and identify new technologies on which they should focus.

### Tech Stack Canvas

The [Tech Stack Canvas](https://techstackcanvas.io/?ref=workingsoftware.dev) is a technique used by software development teams to map, document, visualize and communicate the technologies and tools used in a software product.

![](https://www.workingsoftware.dev/content/images/2024/05/image-5.png)

Tech Stack Canvas ( [Source](https://techstackcanvas.io/?ref=workingsoftware.dev) )

### Technology Radar

A [technology radar](https://www.workingsoftware.dev/inspirational-technology-radar-examples/) is a technique that companies can use to map their current technology landscape and identify new technologies they should focus on.

It visualizes technologies in four categories: Adopt, Try, Assess and Hold. This helps stakeholders understand which technologies are recommended for adoption, which need further research and which should be avoided.

This technique helps in strategic decision making regarding technology investment and adoption and ensures that it aligns with business goals and industry trends.

![](https://www.workingsoftware.dev/content/images/2024/05/image-7.png)

Technology Radar by Thoughtworks ( [Source](https://www.thoughtworks.com/radar?ref=workingsoftware.dev) )

## Risk Management

💡

****Risk Storming:**** is a collaborative technique for identifying potential risks and developing mitigation strategies.  
  
****Technical Debt Records:**** A Technical Debt Record (TDR) is a structured document that tracks and prioritizes technical debt, enabling informed decision-making and strategic planning for software project improvements.

### Risk Storming

[Risk-storming](https://riskstorming.com/?ref=workingsoftware.dev) is a collaborative technique for identifying potential risks and developing mitigation strategies to ensure that the project is resilient in the face of uncertainties.

![Converge the risks on the diagrams](https://riskstorming.com/img/risk-storming-1.png)

Risk-storming - a visual and collaboartive risk identification technique ( [Source](https://riskstorming.com/?ref=workingsoftware.dev) )

### Technical Debt Records

A **Technical Debt Record (TDR)** is a structured document that captures details about technical debt within a software project. Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer. TDRs help teams track, analyze, and prioritize technical debt, ensuring informed decision-making and strategic planning for codebase improvements.

### Threat Modeling

[Threat modeling](https://owasp.org/www-community/Threat_Modeling?ref=workingsoftware.dev) is a structured process used to identify, understand, and mitigate security threats within applications, systems, and environments. It involves systematically capturing threats, prioritizing risks, and proposing countermeasures to support informed security decisions throughout the software development lifecycle. Frameworks like OWASP's Four Questions or STRIDE can guide this process, ultimately providing clear security assurance arguments.

![](https://www.youtube.com/watch?v=fggB70PxhmA)

## Visualisation & Documentation

💡

****Architecture Communication Canvas:**** helps to communicate key elements of existing software architectures.  
  
****C4 Model:**** is a technique for visualizing software architecture.  
  
****arc42 template:**** is a technique for documenting software architectures.  
  
****Documentation as Code:**** is a technique in which documentation is treated like software code

### Architecture Communication Canvas

The [Architecture Communication Canvas](https://canvas.arc42.org/architecture-communication-canvas?ref=workingsoftware.dev) helps to communicate key elements of existing software architectures.

![](https://www.workingsoftware.dev/content/images/2024/05/image-8.png)

The Architecture Communication Canvas ( [Source](https://canvas.arc42.org/architecture-communication-canvas?ref=workingsoftware.dev) )

### C4 Model

The [C4 Model](https://c4model.com/?ref=workingsoftware.dev) is a technique for visualizing software architectures that offers different perspectives (Context, Containers, Components and Code) to meet the different needs of stakeholders.

![](https://www.workingsoftware.dev/content/images/2025/03/image.png)

The C4 model for visualising software architecture ( [Source](https://c4model.com/?ref=workingsoftware.dev) )

### arc42 Template

The [arc42 template](https://arc42.org/overview?ref=workingsoftware.dev) is a technique for structuring software architecture documentation.

It provides a systematic structure for capturing and organizing important information about software architecture, including their context, structure, and architectural decisions.

The template is divided into 12 sections that help developers describe the architecture and improve communication and understanding between stakeholders.

![overview of arc42 volume 8](https://arc42.org/images/arc42-overview-V8.png)

The arc42 template structure ( [Source](https://arc42.org/overview?ref=workingsoftware.dev) )

### Documentation as Code

[Documentation as code](https://www.writethedocs.org/guide/docs-as-code/?ref=workingsoftware.dev) is a technique in which documentation is treated like software code, i.e. it is written in plain text, version controlled and stored together with the software it describes.

This technique uses tools that are common in software development, e.g. Git for version control and continuous integration systems for automatic testing and the provision of documentation updates.

By integrating documentation into the development process, teams can maintain more accurate and up-to-date documentation that evolves with the software and improves accessibility and collaboration.

![What is Documentation as Code? And why do you need it?](https://www.workingsoftware.dev/content/images/size/w1200/2022/10/Screenshot-at-Oct-16-10-25-22.png)

Documentation as Code with Visual Studio Code

## Assess, Measure, Improve and Adapt

💡

****DORA Metrics:**** provide quantitative measures of software delivery performance that provide insight into the effectiveness of the development process and areas for improvement.  
  
****LASR****: is a streamlined and goal-oriented method for evaluating software architectures  
  
****aim42:**** is a systematic approach to improving the quality and maintainability of software systems.

### DORA Metrics

[DORA Metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance?hl=en&ref=workingsoftware.dev) provide quantitative measures of software delivery performance that provide insight into the effectiveness of the development process and areas for improvement.

### Lightweight Approach for Software Architecture Reviews

[Lightweight Approach for Software Architecture Reviews (LASR)](https://www.lasr-reviews.org/?ref=workingsoftware.dev) is a streamlined and goal-oriented technique for evaluating software architectures and offers a leaner alternative to traditional methods such as ATAM (Architecture Tradeoff Analysis Method).

It can be performed quickly, even within a single afternoon, by a team or individually, making it highly adaptable and efficient.

The following cheat sheet describes LASR beautifully illustrated on 4 pages (English, PDF) 👇

### aim42 - Architecture Improvement Method

[aim42 is a systematic approach](https://www.aim42.org/?ref=workingsoftware.dev) to improving the quality and maintainability of software systems. It is a structured method for evaluating software architecture, identifying problems and implementing improvements based on practical and best practices.

This method is collaborative, adaptable to different types of software projects and helps organizations improve the performance, scalability and overall health of their software architecture.

### Residuality Theory

Residuality theory is a new, revolutionary concept that proposes an ideology for the development of software systems that is concerned not only with the intended purpose of the software, but also with anticipating and solving future problems. According to Barry M. O’Reilly, the author of Residuality Theory, software systems should not be complex and static, but should be able to change under stress. If we view systems as a series of residues associated with stressors, we can better understand how design decisions affect the lifecycle of software systems and their unpredictable complexity.

![](https://www.youtube.com/watch?v=0wcUG2EV-7E)