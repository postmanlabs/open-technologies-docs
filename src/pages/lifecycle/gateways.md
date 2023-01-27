---
title: "Gateways"
order: 1
page_id: "gateways"
warning: false
updated: 2021-09-29
# contextual_links:
#   - type: section
#     name: "Get to know us"
#   - type: link
#     name: "The Postman Open Philosophy"
#     url: "https://www.postman.com/company/open-philosophy/"
#   - type: link
#     name: "Postman Blog"
#     url:  "https://blog.postman.com/"
#   - type: section
#     name: "Collaborate with us"
#   - type: link
#     name: "Postman's Github"
#     url: "https://github.com/postmanlabs"
#   - type: link
#     name: "Open Technologies Github"
#     url: "https://github.com/postman-open-technologies"
#   - type: section
#     name: Specs we contribute to
#   - type: link
#     name: JSON Schema
#     url: "https://json-schema.org/"
#   - type: link
#     name: Async API
#     url: "https://www.asyncapi.com/"
#   - type: link
#     name: OpenAPI
#     url: "https://www.openapis.org/"
#   - type: link
#     name: GraphQL
#     url: "https://graphql.org/"
---

APIs provide an opportunity for deep integration with existing API gateway solutions across the API lifecycle, allowing API contracts to be published and synced, rate limits, logging, caching, and other gateway capabilities to be configured and automated as part of the API lifecycle. Understanding the API gateway landscape and how they contribute to your work is an important part of anyone contributing to API operations–whether business or technical.

## API Management

There are a handful of API management providers who have defined what we know as API management today, providing a suite of solutions with a gateway at the center.

* **MuleSoft** - Leading the enterprise API management conversation for the last decade, resulting in an acquisition by Salesforce.
* **Axway** - Another leading API management solution providing an independent solution for managing your enterprise API platform.
* **Apigee (Google)**  - The third enterprise solution focused on the APIs as a product, resulting in an acquisition by Google.

There are a number of other enterprise API management providers, but these represent to the top three who also have an API for their solution.

## Baked Into the Cloud

Around 2015, as the core capabilities of API gateways began to be commoditized, they also began being baked into the cloud across the top three cloud providers.

* **Amazon** - Providing HTTP and Websocket capabilities across their regions.
* **Azure** - Weaving their API management acquisition into their CI/CD flows.
* **Google (Apigee)** - Integrating the API gateway into their cloud platform.

Azure and Google opted to acquire their solutions, and Amazon built their own from the ground-up, baking essential gateway capabilities across all three clouds.

### Modern Gateways

As gateways were commoditized and platform capabilities expanded, a new breed of gateways have emerged to meet the needs of developers on the ground floor of operations

* **Kong** - A ubiquitous open-source solution across the enterprise API landscape.
* **NGINX** - Packing up an essential web server and proxy to behave like a gateway.
* **Tyk** - Building a new solution from the ground up to meet enterprise requirements.
* **CloudFlare** - Baking the API gateway into the fabric of the web, pushing to the edge.
* **Envoy** - Betting Kubernetes being the core of how we deliver applications and APIs.
* **Gravitee** - An event-driven approach to delivering modern multi-protocol APIs.
* **KrakenD** - A modern gateway that is hyper-focused on the performance of APIs.
* **Kusk** - Marrying a declarative OpenAPI vision with the Kubernetes to delivering APIs.
* **Zuplo** - A programmable, GitOps, approach that deploys APIs at the edge of our future.

There are other gateway solutions, but all of the gateways listed here are programmable, offering a way to automate API operations using an API, Git, and other extensible solutions.

### Gateway Capabilities

While API management has long obfuscated exactly what is included as part of an API gateway, there are six distinct capabilities that a gateway possesses under the hood.

* **Security** - The security of APIs spans multiple domains, beginning with encryption of API requests and responses in transport, but then moving to identity and access management using keys, tokens, and other standards, while also ensuring that you scan, audit, fuzz, and ensure that the surface area of APIs are free from common vulnerabilities, and malicious actors are unable to get access to the resources and capabilities available via APIs.
* **Traffic** - Managing the traffic from APIs, considering both the ingress and the egress, and all of the considerations that come with it, providing a whole suite of policies that can be applied to manage traffic in an automated way across API operations.
* **Transformation** - Transformation is about shaping the traffic that flows through APIs, filtering, shaping, and cleaning up data as it is passed through an API, better meeting the demands of both the producer and consumer, and ideally with privacy and security considered from end to end.
* **Mediation** - Stepping in and actually negotiating how API transactions occur, providing more intelligence as part of the runtime, helping ensure that the interests of the platform are followed, while maintaining expectations when it comes to privacy, security, and overall quality of service as seen by consumers who are putting APIs to work.
* **Virtualization** - In computing, virtualization or virtualisation is the act of creating a virtual, rather than actual version of something at the same abstraction level, including virtual computer hardware platforms, storage devices, and computer network resources. Virtualization is used to deliver mock representations of an API for design, and testing, as well as sandbox instances of API to help with onboarding consumers more safely.
* **Code Execution** - The execution of code in a variety of programming layers, allows the runtime to be extended, introducing new business logic into the execution of any API operation, and augmenting whatever resource or capability is delivered upstream.

These capabilities represent the expected value delivered by API gateway today, providing the fundamentals to strike the balance between securing digital resources and making them available.

### Platform Capabilities

There are a numer of capabilities offered by API gateway service providers to round off their offerings, but in recent years many of these capabilities have expanding into their offerings.

*Accounts, Activity, Alerts, Analytics, Application Performance Management (APM), Applications, Automation, Catalogs, Dashboards, Design, Developers, Discovery, DNS, Documentation, Domains, Environments, Extensions, Gateways, Governance, Licensing, Logging, Mocking, Models, Monetization, Monitoring, Networking, Observability, Performance, Policies, Portals, Products, Projects, Reports, Repositories, Roles, SDKs, Search, Serverless, Specifications, Standards, Teams, Templates, Testing, Threat Protection, Workspaces.*

These capabilities have historically been bundled with gateways as part of API management solutions, but have become more modular and interchangeable as part of a platform strategy.

### Upstream Protocols

There are numerous protocols gateways utilized on the backend, ensuring that digital resources available across the enterprise are available for use in applications and integrations.

*AMQP, AWS Lambda, Database, ERP, FTP, GraphQL, gRPC, HTTP 1.1, HTTP Long-Polling, HTTP/2, HTTP/3, IMAP, JMS, Kafka, MQTT, NATS, RabbitMQ, Server-Sent Events (SSE), SMTP, SOAP, TCP, UDP, WebSockets.*

Gateways are the facade enterprise are using to modernize their legacy systems without always having to replace what is behind, while still meeting the needs of consumers today.

### Downstream Protocols

Inversely, there are a number of common protocols being made available downstream, supplying internal, partner, and 3rd party API consumers with the resources they need.

*AMQP, GraphQL, gRPC, HTTP 1.1, HTTP Long-Polling, JMS, Kafka, MQTT, NATS, RabbitMQ, Server-Sent Events (SSE), SOAP, TCP, UDP, WebSockets, HTTP/2, HTTP/3.*

Gateways are literally the digital gateway into the enterprise, providing a single large front door, but also many smaller doors for partners, teams, acquisitions, and other consumers.

### API Contracts

Today’s API gateway is contract-driven, leveraging a variety of machine readable specifications, standards, and artifacts to help use deliver more consistent APIs at scale across the enterprise.

* **OpenAPI** - Defining the surface area of HTTP APIs using JSON or YAML.
* **AsyncAPI** - Defining the surface area of event-driven APIs using JSON or YAML.
* **JSON Schema** - Defining digital objects that can be easily validated.
* **Protocol Buffers** - Defining digital objects asperformant protocol buffers.
* **Avro** - A data serialization format for defining streaming data pipelines.
* **Thrift** -  a framework, for scalable cross-language services development.
* **Spectral** - A JSON/YAML rules format for linting API contracts being used.
* **Open Policy Agent (OPA)** - Artifacts for fine-grained gateway policy control.
* **Extensions** - The extension of any allowed contract for use by gateways.

Machine readable contracts are becoming commonplace when it comes to declaratively shaping each API published to a gateway, keeping track of the technical and business details.

### Automation

Gateways are being automated using a handful of mechanisms provided by the gateway provider, as part of the existing software and API lifecycle development solutions in use.:

* **Publish** - The API contract can be published or discoverable as part of the gateway operation.
* **CI/CD** - You can configure a gateway using the Open via existing CI/CD workflows.
* **Monitors** - Scheduling jobs to run collections against the gateway API from any region.
* **API** - You can programmatically manipulate the API contract for any API in a gateway via the API.

Automation is delivered by your vendors, via your platform, or custom developed using gateway APIs, providing what is needed to bake gateways into the API factory floor.

## Wide Distribution

While there is often a centralized gateway for the enterprise, it is increasingly common for there to be federated approaches to gateways emerging, and regional deployments pushing APIs to the edge.

* **Centralized** - Many enterprises have a single centralized gateway handling all traffic coming from outside the enterprise via a single entry point. That provides an industrial-grade way of handling traffic coming in and out of the enterprise.
* **Federated** - It is increasingly common for enterprises to support a federated gateway approach for making APIs available across domains, acquisitions, and lines of business, and helping to manage traffic in and out of the sprawling enterprise landscape.
* **Regional** - The deployment of regionally specific gateways has emerged to respond to increased regulation and data sovereignty rules in many regions. Regional gateways also bring resources and capabilities closer to the consumer.
* **Edge** - Delivering APIs, where they are needed to support different types of consumers, is rapidly shaping how we put API gateways to work.

Gateways are continuing their shift to reflect the realities on the ground floor of the enterprise, while also still reflecting top-down priorities, while delivering what consumers want today.

## Multi-Purpose

As gateways surface area has shifted from a top-down centralized solution, it has continued to pivot and spread to meet the expanding needs of the enterprise and APIs being made available.

* **Multi-Vendor** - Relying on multiple API gateway vendors to the mix of gateway solutions you need to support the growing number of enterprise use cases.
* **Multi-Protocol** - Taking advantage of gateways expanding beyond just HTTP APIs, bringing gateway capabilities to other protocols and utilizing a mix of API patterns.
* **Multi-Gateway** - Embracing the difference between gateways, mixing and matching the gateways in use, stitching your gateways together using well established patterns.
* **Multi-Cloud** - Helping support API deployment across multiple cloud providers, allowing teams to use the cloud platforms that fit their needs, while following common guidelines.

This expansion is putting pressure on business leadership to establish more centralized control over gateways, while not getting in the way of teams, and federating what matters most.

## Standard Policies

These are the areas of tests that can be applied at the gateway layer, augmenting earlier testing and governance to ensure configurations are present at the gateway.

* **Caching** - Optimizing API performance by storing data that doesn’t change, serving it up without having to make a round-trip to backend systems to obtain the same data.
* **Cross-Origin Resource Sharing (CORS)** - Allowing web APIs to be used in browser based web applications without violating security policies for the domain.
* **Keys** - Defining the scope of API keys that can be issue to consumers, helping secure and identify consumers in a way that can be logged, reported upon, and accounted for.
* **Logging** - Dictating how traffic logged as part of gateway operations, tracking consumption of digital resources to maintain security while respecting privacy.
* **Models** - Modeling digital objects passed in through gateways, ensuring the shape of traffic is known, and can be easily validated as part of gateway operations.
* **Plans** - Establishing usage plans that organize APIs and consumers into logical groups that allow policies to be easily applied in granular or broad way across gateways.
* **Rate Limits** - Establishing the limits for the number of requests that can be made of an API within a specific time period, helping reduce abuse from across all consumers.
* **Request Transformation** - Providing a structured definition for what types of transformation are allowed or in place, setting the transformation ground rules.
* **Request Validation** - Ensuring that all requests are validated, making sure that all requests reflect models defined and associated with API contracts.
* **Response Status Codes** - Having policies for what status codes should be used for API responses, standardizing how consumers automate their integrations across APis.
* **Response Transformation** - Providing a structured definition for what types of transformation are allowed or in place, setting the transformation ground rules.
* **Paths** - Establishing ground rules for how paths can be used when designing APIs and publishing to the gateway, shaping and governing the surface area of API operations.
* **Stages** - Providing well-known stages of development for APIs to exist in, allowing development, staging, and production stages to exist consistently across all APis.
* **Tags** - Make sure that all APis iposses more context through the application of tags, allowing APIs to be indexed and grouped as part of bounded contexts at the gateway.
* **Tracing** - Defining what traceability is available at the gateway layer, augmenting gateway API traffic with essential identifiers to understand and observe operations.
* **Timeouts** - Establishing the threshold in which an API wll timeout, ensuring the wise usage of gateway resources, and properly communicating as part of each response.
* **Versioning** - Having a standardized set of policies for how change is managed across APis using semantic or date-based versioning applied at the gateway level for APis.

Standardized policy management is a growing concern for enterprise leadership–as the number of gateways grows, as well as the number of APIs increases, policies become critical.

## Integrations

Postman integrates with cloud API gateways, including Amazon API Gateway, Apigee X, and Azure API Management, allowing you to view your API deployment status and history from within Postman.

* [Amazon API Gateway](https://learning.postman.com/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/) - Amazon API Gateway enables developers to publish and manage APIs that access AWS and other web services and data sources. Once connected to API Gateway, you can view your API deployment status and history from within Postman.
* [Apigee API Gateway](https://learning.postman.com/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/) - Apigee X enables developers to manage access to their APIs by abstracting services behind a secure proxy layer. Once connected to Apigee X, you can view your API deployment status and history from within Postman.
* [Azure API Management](https://learning.postman.com/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/) - Azure API Management enables developers to deploy API gateways for APIs hosted in Microsoft Azure, other cloud platforms, or on-premises. Once connected to Azure API Management, you can view your API deployment status and history from within Postman.

API gateway integrations begin stitching your API platform together with your source control, CI/CD, as well as APM solutions, providing the automation and observability you will need.
