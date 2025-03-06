function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Only num+num or str+str");
}
console.log(combine(32, 52));
console.log(combine("dsds, ", "DSDSD"));
//console.log(combine(5, "10"));        ошибка
