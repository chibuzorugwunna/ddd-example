## Motivation

* To produce a project that is inspired by domain-driven design.
* To produce a project that is inspired by the onion architecture design pattern.
* To produce a project where every core business logic is completely independent and isolated from technology.
* To significantly reduce repetitions.
* To increase focus on business problems.


### Other considerations?
* Create a SIMPLE custom template that will facilitate;
    - Bundling of code based on the
    - Can be transformed to a SAM template.

### Questions
* How about making `./domain` into a lambda layer? How would this increase the size of the lambda as these folders grow?
* HMW create a generic interface that will routes ANY request to the specific [Lambda](src/base/lambda.ts) class.
