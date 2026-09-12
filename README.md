# Dev Stack

## Description
Dev Stack is a small interactive web app that helps developers pick and build their ideal tech stack. Users can browse a grid of technologies (frameworks, libraries, tools), add the ones they want to a "stack" on the sidebar, and remove them individually or all at once. Each technology card shows its category, difficulty, rating, and a short description to help with the decision.

## Technologies Used
- React (with the new `use()` hook and Suspense for data loading)
- TypeScript
- Tailwind CSS
- React Toastify (for the "Stack Added" notifications)
- Vite (build tool)

## Features
1. **Add technologies to your stack** — Click "Add to Stack" on any card to add it to your selected stack, with a toast notification confirming the action.
2. **Remove individually or all at once** — Remove a single technology from the sidebar (which also resets its card in the grid), or clear the entire stack with one click of "Remove All."
3. **Fully responsive layout** — The grid and sidebar adapt across mobile, tablet, and desktop screen sizes.

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes it much easier to describe what the UI should look like — instead of manually creating elements with JavaScript function calls, we can write something that looks like HTML but has the full power of JavaScript behind it.

**2. What is the difference between props and state?**

Props are data passed *into* a component from its parent — they're read-only from the child's side and let a parent control how a child behaves or looks. State is data that a component manages *internally* and can change over time (usually because of user interaction), and updating it causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a functional component hold and update its own local data. In this project, I used it in `TechnologyWraper` to keep track of `selectedStack` (the array of technologies the user has added), so the app can show and update the sidebar and re-render the grid cards whenever the stack changes.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` normally lets you run side effects (like data fetching) after a component renders. In this project, I actually didn't use `useEffect` for loading the JSON — instead, I used React's newer `use()` hook together with `Suspense`. The `technology.json` data is fetched once as a promise, and `use()` lets the `TechnologyWraper` component "wait" for that promise to resolve, while `Suspense` shows a loading fallback in the meantime. This achieves the same goal as `useEffect` + `useState` (loading async data), but with less boilerplate.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to keep track of which item is which between renders. Without a stable, unique key, React can't tell which items were added, removed, or changed, which can cause bugs (like state jumping to the wrong item) or unnecessary re-renders. In this project, I use each technology's `id` as the key.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. I used it in the sidebar to show an "Your stack is empty" message when there are no selected technologies, and the actual list of items otherwise:
```tsx
{
  selectedStack.length === 0 ? (
    <div>Your stack is empty.</div>
  ) : (
    selectedStack.map(stackitem => (
      <div key={stackitem.id}>{stackitem.name}</div>
    ))
  )
}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props — for example, `TechnologyWraper` passes each `technology` object and an `isAdded` boolean down to the `Technology` component. To send something back up, the parent passes a *function* down as a prop, and the child calls that function (usually with some data) when something happens. In this project, `TechnologyWraper` passes `handleStack` down to `Technology`, and when the user clicks "Add to Stack," the child calls `handleStack(technology)`, which updates the parent's state.
