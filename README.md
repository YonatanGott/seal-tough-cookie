# seal-tough-cookie

## Vulnerability Details

Prototype Pollution is a vulnerability affecting JavaScript. Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as __proto__, constructor and prototype. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values. Properties on the Object.prototype are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.

There are two main ways in which the pollution of prototypes occurs:

• Unsafe Object recursive merge

• Property definition by path

## tough-cookie v2.5.0 Fix

Use ```this.idx = Object.create(null);``` to create idx variable and other vulnerable variables.
An object created with ```Object.create(null)``` will not have the special properties.
