# Entry 5
##### 11/4/25

Throughout this phase of the Engineering Design Process, I've focused on learning ReactJS to build interactive web components. My exploration has been centered on understanding React's fundamental concepts and implementing them in practical applications.

I've developed two crucial skills during this period. The first skill is state management using React's useState hook. Through my [tinkering with counters and toggles](https://react.dev/reference/react/useState), I learned how to maintain and update component state effectively. This is a code example of how I used it:

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
    document.title = `Count is: ${count}`;
});
```

The second skill I've developed is error handling in React applications. Through resources like [Stack Overflow](https://stackoverflow.com/questions/51833422/try-catch-statement-in-react-jsx), I learned how to implement try-catch blocks to manage potential runtime errors. Here is a code example of when I created a basic calculator:

```jsx
try {
    setDisplay(eval(display).toString());
} catch (error) {
    setDisplay('Error');
}
```

In the Engineering Design Process, my next step is to implement these concepts in real-world applications. I'll be practicing with actual use cases to make sure my understanding of React fundamentals is firm. This includes building small projects where I can apply state management, error handling, and component interactions in practical scenarios. And, obviously, it includes working on my actual Freedom Project.

Some of my key learnings include:
- Understanding React's component lifecycle
- Managing state with useState
- Implementing error boundaries
- Working with props for component communication

Next steps:
1. Make mini-projects that don't take much time but test skills
2. Learn React Router for multi-page applications (if time allows)
3. Lastly, but obviously, work on my Freedom Project's react-sided things.

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
