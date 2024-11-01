import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Header from "./Header";
import { describe, test, expect } from "vitest";

describe('Header', async () => {
  test('should render the header', () => {
    render(<Header />)
    expect(screen.getByText('🎥 SEARCH YOUR MOVIE HERE!')).toBeInTheDocument();
    expect(screen.getByText('✅ Search for your favorite movie quickly and easily!')).toBeInTheDocument();
  })
})