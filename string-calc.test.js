import { add } from "./string-calc";

test('empty string test', ()=>{
    expect(add("")).toBe(0);
})