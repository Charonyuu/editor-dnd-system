import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import useLogin from "./useLogin";
// import "@testing-library/jest-dom";

// Mock axios.post
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useLogin", () => {
  afterEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockedAxios.post.mockClear();
  });

  it("handles login correctly", async () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("testAccount", "testPassword");
    });

    waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("api", {
        account: "testAccount",
        password: "testPassword",
      });
    });
  });

  it("sets error if account is not provided", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("", "testPassword");
    });

    expect(result.current.error).toBe("請輸入帳號");
  });

  it("sets error if password is not provided", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("testAccount", "");
    });

    expect(result.current.error).toBe("請輸入密碼");
  });

  it("handles error on failed axios request", async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error("Some error occurred"));

    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("testAccount", "testPassword");
    });

    waitFor(() => {
      expect(result.current.error).toBe("Error: Some error occurred");
    });
  });
});
