import { beautifyText } from "./beautifyText";
import { describe, expect, it } from "vitest";

describe("Beautify Text", () => {
  it("should add coln at the end", () => {
    const string = "Hello";
    const beautifiedString = beautifyText(string);
    expect(beautifiedString).toEqual("Hello:");
  });

  it("should capitalize first word", () => {
    const string = "hello";
    const beautifiedString = beautifyText(string);
    expect(beautifiedString).toEqual("Hello:");
  });

  it("should capitalize only first word", () => {
    const string = "hello world";
    const beautifiedString = beautifyText(string);
    expect(beautifiedString).not.toEqual("Hello World:");
  });

  it("should replace - for blank spaces", () => {
    const string = "hello-world";
    const beautifiedString = beautifyText(string);
    expect(beautifiedString).toEqual("Hello world:");
  });

  it("should replace _ for blank spaces", () => {
    const string = "hello_world";
    const beautifiedString = beautifyText(string);
    expect(beautifiedString).toEqual("Hello world:");
  });
});
