# Entry 6
##### 5/8/25 
During this phase of the Engineering Design Process, I focused on creating the Minimum Viable Product (MVP) for my Chemistry Technology website, and had time to go above and beyond. This involved implementing the planned designs and features using React components while implementing all my content and following the requirements.

### MVP Development Process
I completed several key milestones according to my plan:
- [x] Created wireframes for mobile and desktop views
- [x] Developed content structure and color scheme
- [x] Implemented basic design layout
- [x] Integrated chosen fonts
- [x] Added essential images

One of the most significant features I implemented was the dynamic navigation system. Here's a code snippet showing how I handled scroll-based navigation highlighting:

```jsx
React.useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);

        const software = document.getElementById('softwareSection');
        const hardware = document.getElementById('hardwareSection');
        const future = document.getElementById('futureTech');
        const scrollPosition = window.scrollY + 100;

        // Determine active section based on scroll position
        if (future && scrollPosition >= future.offsetTop) {
            setActiveSection('future');
        } else if (hardware && scrollPosition >= hardware.offsetTop) {
            setActiveSection('hardware');
        } else {
            setActiveSection('software');
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Challenges & Takeaways
I faced several challenges while building the MVP:

1. **Component Organization**: Initially, I struggled with organizing the different sections (Software, Hardware, Future Tech) in a way that was both maintainable and performant, as my website was lagging a lot in the beginning. I solved this by creating separate components for each section and using props for data management.

2. **Responsive Design**: Making the site work well on both mobile and desktop required careful planning. I used Bootstrap's grid system and custom CSS to ensure a consistent experience across devices, and of course used my wireframe to plan how it should go.

3. **Image Handling**: Based on feedback from peers like Tina and Jolee, I needed to improve image integration. I implemented a sorting system to prioritize items with images:

```jsx
const sortByImage = (items) => {
    return [...items].sort((a, b) => {
        if (a.image && !b.image) return -1;
        if (!a.image && b.image) return 1;
        return 0;
    });
};
```

### Learning Evidence
The feedback I received from peers was invaluable:
- Tina appreciated the title box effects
- Jintian noted the smooth animations and transitions
- Jolee highlighted the creative use of cards within accordions

### Skills Developed
1. **React Component Architecture**: Learned to structure complex UIs using nested components
2. **State Management**: Implemented useState and useEffect for dynamic content
3. **Event Handling**: Created smooth scrolling navigation and interactive elements
4. **CSS/Bootstrap Integration**: Combined custom styling with Bootstrap components

### Next Steps
For the next phase, I plan to:
1. Add more images to enhance visual appeal
2. Fix the navigation highlight issue noted by Jintian
3. Complete the 3D model integration
4. Implement additional interactive features

[Previous](entry05.md) | [Next](entry07.md)

[Home](../README.md)
