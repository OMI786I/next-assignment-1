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
        

## Further difference includes:

- Type aliases may not participate in declaration merging, but interfaces can.

- Interface may only be used to declare the shapes of objects however not to rename primitives

- Using interfaces with extends can may cause more stress for the compiler than type aliases with intersection

- interface cannot describe unions and tuples where as type can define union types, primitive types, tuples, etc.




# 2.What is the use of the keyof keyword in TypeScript? Provide an example.

=> keyof is a keyword in TypeScript which is used to extract the key type from an object type. 

If we need to understand how does a keyof works is that typescript keyof takes a passed reference object type and creates a union from its keys. We can alias the resulting union as a type. The example may looks like this -

```
type TAccount = {
  username: string;
  email: string;
  password: string;
  role: string;
};

type TAccountKeys = keyof TAccount; // Equivalent to: "username" | "email" | "password" | "role"
```


It is important to note that TypeScript keyof creates the union from a reference object type, not from the object itself. So, the distinction here is keyof always has to be passed the object type as argument, not the actual object.

Because of this, we should first have the object type that represents an object or application entity so that we can pass it to keyof. It can be a directly described object type, as in the above example. Or it can be an object literal type derived with the typeof operator as below:

```
const account = {
  username: "",
  email: "",
  password: "",
  role: "",
};

type TAccount = typeof account; // { username: string; email: string; password: string; role: string; }

type TAccountKeys = keyof TAccount; // Explicitly: "username" | "email" | "password" | "role"

```


## Typescript keyof in Generic Types:

We can use the keyof operator in generic functions. Let's say we have an account object with a few properties. We make use of the keyof operator to attain type compatibility in generic getter and setter methods, such as in the following code snippet:

```
const account = {
  username: "donald_duck",
  email: "donald.duck@exmaple.com",
  password: "goawaygoaway",
  role: "admin",
};

function getProp<T, K extends keyof T> (obj: T, prop: K) { return obj[prop] };
function setProp<T, K extends keyof T> (obj: T, prop: K, value: T[K]) { obj[prop] = value };

console.log(getProp(account, "email")); // "donald.duck@exmaple.com"
console.log(getProp<{"name": string}, "name">(account, "email")); // 2345 Error: "name" not compatible to `account` keys

setProp(account, "role", "project manager");
setProp<{"name": string}, "name">(account, "role", "project manager")> // 2345 Error
```

keyof T and extends constraints ensure keys and values align with the object’s type structure, enhancing type safety in generic functions.

