# 1. What are some differences between interfaces and types in TypeScript?

=> Type aliases and interfaces are very similar. Almost all features of an interface are available in type. The key difference is the type cannot be re-opened to add new properties where as an interface is always extendable.

## Example

## For Extending an interface

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

## For Extending a type via intersection

type Animal {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

## Adding new fields to an existing interface

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

## A type cannot be changed after being created

type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.
        

# Further difference includes:

- Type aliases may not participate in declaration merging, but interfaces can.

- Interface may only be used to declare the shapes of objects however not to rename primitives

- Using interfaces with extends can may cause more stress for the compiler than type aliases with intersection

- interface cannot describe unions and tuples where as type can define union types, primitive types, tuples, etc.
