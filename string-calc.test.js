import { add } from "./string-calc";

test('empty string test', ()=>{
    expect(add("")).toBe(0);
})

test("single number returns the number itself", () => {
    expect(add("1")).toBe(1);
});

test("comma separated value should return sum", () => {
    expect(add("1,2,3")).toBe(6);
});