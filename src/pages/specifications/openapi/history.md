---
title: "History"
order: 4
page_id: "history"
warning: false
updated: 2023-03-21
---

In 2009, Tony Tam of Wordnik (an online dictionary service) had begun working on what would become the Swagger Specification. Used to describe Wordnik's JSON API, Swagger was used to drive Wordnik's [developer console / documentation](https://developer.wordnik.com/docs), and their server integration and code-generation efforts within the company.

Inspired by the comparison with the XML-based Web API Description Language ([WADL](https://www.w3.org/Submission/wadl/)), Zeke Sikelianos when discussing potential names for the project with Tam said "Why WADL, when you can Swagger?". Tam published the first version of the Swagger Specification (1.0) in August 2011.

At around the same time others were working on API description formats, such as [Mashery I/O Docs](https://support.mashery.com/docs/read/IO_Docs).

While working at Reverb Technologies, Tam published version 1.1 of the Swagger Specification in August 2012. This was a minor refinement of the specification only. Around this time Apiary started work on their [API Blueprint](https://apiblueprint.org/) format, and Mulesoft on [RAML](https://raml.org/). Other XML-based formats were still being developed including [RADL](https://github.com/restful-api-description-language/RADL) and [RSDL](https://www.balisage.net/Proceedings/vol10/html/Robie01/BalisageVol10-Robie01.html).

Version 1.2 of the Swagger Specification was the first version written up as a formal specification document, in March 2014, separating the specification itself from the Swagger implementation. Improvements were made to the type system, to bring it more into line with [JSON Schema](https://json-schema.org/) Draft 4. This was the first version to gain widespread adoption across the API industry, and is still in use by some API providers today.

September 2014 saw the release of the Swagger Specification 2.0. This saw a reorganisation from the two-file format of Swagger 1.2 and earlier into a single document structure, but one that could still reference sub-documents using the [JSON-Pointer](https://www.rfc-editor.org/rfc/rfc6901.html) standard. Further improvements were made to the type system / JSON Schema support, fuller API metadata support with the `contact` and `license` objects, the use of markdown in descriptions was allowed and vendor extensions (now known as specification extensions) and response headers were supported among other more minor changes. Swagger 2.0 saw more growth and adoption across the industry, and the number of supporting commercial solutions and open-source offerings increased dramatically.

In March 2015, SmartBear Software acquired the interests in the Swagger intellectual property and open-source projects from Reverb Technologies.

In September 2015, Tam joined SmartBear Software as VP of Products, Swagger.

In December 2015, the Swagger Specification was donated by SmartBear Software to a new open-governance organisation, set up under the auspices of the Linux Foundation: the [OpenAPI Initiative](https://openapis.org).

Version 2.0 of the OpenAPI Specification (as it was now known) was identical to the Swagger 2.0 specification. Although there was, and remains, some confusion between the use of the terms Swagger and OpenAPI, this was a positive first step in the transition to the new governance body and the new name for the specification. The Swagger name remains a trademark of SmartBear, and is used for their suite of OpenAPI tooling.

Ten companies were founding members of the OpenAPI Initiative (3Scale, Apigee, CapitalOne, Google, IBM, Intuit, Microsoft, PayPal, Restlet and SmartBear) and the number of member organisations now stands at over 40.

The OpenAPI Specification is now managed by a Technical Steering Committee (TSC), and since the departure of Tony Tam in 2017 this has comprised long-time contributor Ron Ratovsky of SmartBear Software, Darrel Miller of Microsoft, Jeremy Whitlock and Marsh Gardiner, both now at Google, Uri Sarid of Mulesoft, and [Mike Ralphson](https://twitter.com/PermittedSoc) of **Postman**. The TSC draw from the wider Technical Developer Community (TDC) to develop the specification in an [open](https://www.openapis.org/calendar), transparent fashion. Membership of the OpenAPI Initiative does not confer voting rights over content of the specification itself.

In July 2017, the OpenAPI Initiative announced the release of version 3.0.0 of the OpenAPI Specification, containing several structural improvements, closer alignment with JSON Schema draft 5, new features such as `links` and `callbacks`, standardisation on CommonMark for descriptions and many small tweaks and clarifications. Three patch releases to the 3.0 line were made in 2017, 2018 and 2020. Version 3.1.0 of the specification was released in February 2021. Work has begun on a tentative v4 of the OpenAPI Specification, code-named '[Moonwalk](https://github.com/OAI/moonwalk/discussions)'.

