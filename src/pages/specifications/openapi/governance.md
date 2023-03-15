---
title: "Governance"
order: 6
page_id: "governance"
warning: false
updated: 2023-03-21
---

OpenAPI is essential to any enterprise API governance strategy. If you do not have the surface area of your APIs consistently defined in a common machine-readable format you will not be able to maintain consistency across teams and domains. There will be many ways in which OpenAPI contracts will need to be subject to governance that is unique to each organization, but there are a handful that every business should start with. These cover the following areas of OpenAPI:

* **Information** - Providing a standard set of rules, powered by the open source Spectral linting engine, that help ensure that each API contract has the required information, helping govern the name, description, licensing, contact information, and other essential information needed across teams and by consumers. Spectral rules can help you enforce your API style guidelines.
* **Operations** - Having very broad, as well as fine-grained Spectral rules that can be applied to API paths, operations, requests, and responses help ensure that the parameters, headers, status codes, media types, and other building blocks of your APIs are as consistent as possible, governing all APIs across teams.
* **Schema** - OpenAPI contracts allow you to apply Spectral rules to the schemas used as part of API requests and responses, using JSON Schema to help make sure the objects we are using across operations are as common and standardized as possible.
* **Security** - Spectral rules can be applied to the security definitions within an OpenAPI for any API, as well as some of the patterns involved in [OWASP](https://owasp.org/)'s Top 10 API security vulnerabilities - helping strengthen the security aspect of governance.

Governance is a journey and is not something that can be solved overnight with automated Spectral rules applied to OpenAPI definitions. This is just where you should begin when it comes to governance, acknowledging that complete and up-to-date OpenAPI definitions for all APIs will be essential to your overall API journey and strategy.

