import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import RouteErrorBoundary from "../components/RouteErrorBoundary";

function Boom({ message }: { message: string }): JSX.Element {
  throw new Error(message);
}

describe("RouteErrorBoundary", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it("renders children when nothing throws", () => {
    render(
      <RouteErrorBoundary resetKey="/">
        <p>healthy page</p>
      </RouteErrorBoundary>,
    );
    expect(screen.getByText("healthy page")).toBeInTheDocument();
  });

  it("shows a recoverable shell with a reload action when a route throws", () => {
    render(
      <RouteErrorBoundary resetKey="/">
        <Boom message="render exploded" />
      </RouteErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reload page/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /today/i })).toBeInTheDocument();
  });

  it("uses stale-deploy copy for chunk load failures", () => {
    render(
      <RouteErrorBoundary resetKey="/">
        <Boom message="Failed to fetch dynamically imported module: /assets/x.js" />
      </RouteErrorBoundary>,
    );
    expect(screen.getByText(/newer version of the site shipped/i)).toBeInTheDocument();
  });

  it("recovers when the reset key (route) changes", () => {
    const { rerender } = render(
      <RouteErrorBoundary resetKey="/broken">
        <Boom message="render exploded" />
      </RouteErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();

    rerender(
      <RouteErrorBoundary resetKey="/healthy">
        <p>recovered page</p>
      </RouteErrorBoundary>,
    );
    expect(screen.getByText("recovered page")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
