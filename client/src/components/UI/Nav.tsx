import React from "react";

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-2xl">
          Logo
        </a>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/second">Second</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
