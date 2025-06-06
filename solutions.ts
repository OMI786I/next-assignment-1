function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toLocaleUpperCase();
  } else if (toUpper === false) {
    return input.toLocaleLowerCase();
  }

  return input;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredResult = items.filter((res) => res.rating >= 4);
  return filteredResult;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.flat();

  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.replace(/\s+/g, "").length;
  } else if (typeof value === "number") {
    return value * 2;
  }

  return value;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let maxObject = products[0];
  let maxPrice = products[0].price;

  for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
      maxObject = products[i];
      maxPrice = products[i].price;
    }
  }
  return maxObject;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else reject("Negative number not allowed");
  });
}
