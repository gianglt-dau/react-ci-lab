
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";  // 👈 đi lên 1 cấp rồi vào src

test("hiển thị tiêu đề", () => {
  render(<App />);
  expect(screen.getByText(/React CI Lab/i)).toBeInTheDocument();
});

test("thêm công việc mới vào danh sách", () => {
  render(<App />);

  const input = screen.getByLabelText("task-input");
  const button = screen.getByText("Thêm");

  fireEvent.change(input, { target: { value: "Test tách thư mục" } });
  fireEvent.click(button);

  expect(screen.getByText("Test tách thư mục")).toBeInTheDocument();
});
