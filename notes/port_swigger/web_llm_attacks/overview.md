# Web LLM attacks
An LLM attack may:

- Retrieve data that the LLM has access to:
    a. LLM's prompt
    b. Training set
    c. APIs provided 
- Trigger harmful actions via APIs. (SQLi)
- Trigger attacks on other users and systems that query the LLM

> [!NOTE]
> Attacking LLMs is similar to a SSRF vulnerability.

# What is a large language model?
Ai algorithms that process user inputs and create responses by predicting sequences of words.
**Prompt**: user input, controlled by input validation rules.
## Implementations
- Customer services (virtual assistants)
- Translation.
- SEO improvement.
- Analysis of user-generated content.

# LLM attacks and prompt injection
When an attacker craft prompts to manipulate an LLM's output. This could lead to make incorrect calls to sensitive APIs or returning content that does not follow its guidelines.

# Detecting LLM vulnerabilities
**Methodology**

1. Identify the LLM's inputs, including direct (prompt) and indirect (training data) inputs.
2. Work out what data and APIs the LLM has access to
3. Probe this new attack surface for vulnerabilities.

# Exploiting LLM APIs, functions, and plugins
As LLMs are often hosted by dedicated third party providers. A website can give third-party LLMs access to APIs.
## How LLM APIs work
The workflow could vary depending on the API implementation and in some cases, is necessary to create a private API in order to create valid requests.
As an example, a possible workflow could be:

1. The client calls the LLm with the user's prompt
2. The LLM detects that a function need to be called and returns a JSON object containing arguments adhering to external API's schema.
3. The client calls the function with the provided arguments.
4. The client processes the function's response.
5. The client calls the LLM again, appending the function response as a new message.
6. The LLM calls the external API with the function response.
7. The LLm summarizes the results of this API call back to the user.

> [!IMPORTANT]
> Users should be alerted before the LLM calls the external API.

## Mapping LLM API attack surface
**Excessive Agency** refers when an LLM has access to APIs with sensitive information and can be persuaded to use that API unsafely.

**Methodology**: In order to enumerate the plugins and APIs that could be accessed by the LLM, you could simply ask to the scope, and later ask for more specfic information. If isn't cooperative try something creative.

## Chaining vulnerabilities in LLM APIs
Some LLMs has access to APIs that could help exploiting secondary vulnerabilites (e.g executing a path traversal via LLM and an insecure API). So you should map the LLM's API attack surface and try some classic web exploits.

## Insecure output handling
This occurs when the LLM's response is not sufficiently validated before being passed to other systems. This could helo to access additional functionalities, or helping to get XSS and CSRF.

# Indirect prompt injection
Could be delivered via:

- Directly (via message)
- Indirectly (training data or output from an API)

This injections enable LLMs attack other users.

> [!IMPORTANT]
> You could ask a LLM to describe a web page with a hidden prompt inside that could lead to craft an XSS payload.

> [!TIP]
> Some LLMs could understand that they should ignore instructions, but it could be bypassed by confusing the LLM using fake markup as an indirect prompt. Another way, is to include fake user responses in the prompt.
