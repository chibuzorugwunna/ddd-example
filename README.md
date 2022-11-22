## Motivation

The motivation for this is to ultimately produce a project that focuses on the business problem and is self-documenting. It will;
* Be inspired by domain-driven design and the onion architecture.
* Be completely independent and isolated from technology.
* Be very self-explanatory for both engineers and (somewhat) non-engineers.
* Significantly reduce repetitions.

### Other considerations
* Create a SIMPLE custom template that will facilitate;
    - Bundling of code.
    - Can be transformed to a SAM template.

### Questions
* How about making `./domain` into a lambda layer? How would this increase the size of the lambda as the folders grow?
* HMW create a generic interface that will route ANY request to the specific [Lambda](src/base/lambda.ts) class.
