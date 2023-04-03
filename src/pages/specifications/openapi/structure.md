---
title: "Structure"
order: 3
page_id: "openAPI"
warning: false
updated: 2023-03-30
---

The OpenAPI specification is a textual format, written in [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) or [YAML](https://yaml.org/). It is comprised of various objects with nested properties or fields, which allow you to fully describe an HTTP API.

* **[Info](https://spec.openapis.org/oas/latest.html#info-object)** - You have a place to define common metadata for an API, such as a name, description, licensing, terms of service, and contact information, helping to ensure that your API has all the metadata required to make it discoverable and understandable.
* **[Servers](https://spec.openapis.org/oas/latest.html#server-object)** - You may include a list of servers for every instance of your API, for example, across multiple regions or stages of development. This allows consumers to quickly find an instance of an API they can use to meet their needs.
* **[Paths](https://spec.openapis.org/oas/latest.html#paths-object)** - API consumers can take different paths to access resources and capabilities, similar to browsing the web. But in this case, they are navigating your API, looking for the resources and capabilities needed to power applications and integrations.
* **[Operations](https://spec.openapis.org/oas/latest.html#operation-object)** - Define the specific operations that can be accomplished using a given path. Operations provide the ability to read, write, update, delete, and perform other actions on API resources, using HTTP methods such as `GET`, `PUT`, `PATCH` and `DELETE`.
* **[Parameters](https://spec.openapis.org/oas/latest.html#parameter-object)** - Parameters are the way additional information is sent with the HTTP request. Parameters can be within the path URL itself, in the URL query-string, in HTTP headers, or sent as cookies.
* **[Responses](https://spec.openapis.org/oas/latest.html#response-object)** - Describes the HTTP Status Codes, headers, and media types returned with each response, helping the consumer understand the structure and state of the resource.
* **[Schema](https://spec.openapis.org/oas/latest.html#schema-object)** - Provide [JSON Schema](https://json-schema.org/) descriptions of request and response bodies, allowing these requests and responses to be validated both by the client, and by the server or gateway.
* **[Security](https://spec.openapis.org/oas/latest.html#security-scheme-object)** - Describes the type of authentication required for accessing an API. Authentication methods such as API keys, HTTP basic and digest schemes, oAuth, mutual TLS, and bearer tokens are supported.
* **[Examples](https://spec.openapis.org/oas/latest.html#example-object)** - Describes examples of how to use the API.
* **[Components](https://spec.openapis.org/oas/latest.html#components-object)** - Is a container for reusable objects within the API. These can be of any of the above objects (except `info` and `servers`).

A minimal example of an OpenAPI document in YAML format is shown below:

```yaml
openapi: 3.1.0
info:
  title: Example API
  version: 1.0.0
servers:
  - url: https://api.example.com
    description: This API exposes one healthcheck endpoint
paths:
  /healthcheck:
    get:
      summary: Return the health status of the API
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example:
                      Healthy
```
