import { log } from "..";

jest.spyOn(global.console, "log");

describe("@vinxi/logger", () => {
  it("prints a message", () => {
    log("hello");
    expect(console.log).toBeCalled();
  });
});
