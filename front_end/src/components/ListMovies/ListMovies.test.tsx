import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ListMovies from "./ListMovies";


describe('ListMovies', async () => {
  test('render elements', async () => {
    render(<ListMovies/>)
    await waitFor(() => {
      expect(screen.getByText("Hobbit: An unexpected Journey")).toBeInTheDocument();
      expect(screen.getByText("Toy Story")).toBeInTheDocument();
      expect(screen.getByText("Galactic Drift: Beyond the Nebula")).toBeInTheDocument();
      expect(screen.getByText("The Last Harvest")).toBeInTheDocument();
    })
  });
  test('search items', async () => {
    render(<ListMovies/>)
    const searchInput = screen.getByRole('searchInput');
    await fireEvent.click(searchInput);
    await fireEvent.change(searchInput, 'Moana')
    await fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter'})

    await waitFor(() => {
      expect(screen.getByText(/In ancient Polynesia.*Maui to set things right\./i)).toBeInTheDocument();
    })
  });
  test('invalid name movie', async () => {
    render(<ListMovies/>)
    const searchInput = screen.getByRole('searchInput');
    await fireEvent.click(searchInput);
    await fireEvent.change(searchInput, { target: { value: 'djsdkjskdjks' }});
    await fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter'});

    await waitFor(() => {
      expect(screen.getByText("Sorry, we couldn't find any movie with that name 😭")).toBeInTheDocument();
    });
  });

  test('verify placeholder change after error', async () => {
    render(<ListMovies/>)
    const searchInput = screen.getByRole('searchInput');
    await fireEvent.click(searchInput);
    await fireEvent.change(searchInput, { target: { value: '' }});
    await fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter'});

    expect(screen.getByRole('searchInput')).toHaveAttribute('placeholder', 'Please... type your movie here 🤔')
  });
})