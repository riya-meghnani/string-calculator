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

test("both comma and next line separated value should return sum", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("handle initial delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test ("negative no. not allowed", ()=> {
    expect(add("-1,-2,3")).toThrowError("negative no not allowed");
})