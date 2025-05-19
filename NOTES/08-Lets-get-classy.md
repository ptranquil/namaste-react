# Class
    - A class based component is a class which extends React.Component & has a render method that returns a piece of JSX
    - The passing of props to a class based component is same as the functional based
    - To received a props in a class based component we have to use the constructor
        E.g.
            constructor(props){
                super(props);
            }
        As the constructor is called explicitly whenever the instance of the class is created
    - To access the props we have to access it using this keyword. E.g. this.props.name

# State in class
    - A state variable in a class can be created inside the constructor function
    E.g.
        constructor(props){
            super(props);
            this.state = {
                count: 0,
                name: 'Albert'
            }
        }

# What does super(props) do?
    - super(props) calls the constructor of the parent class, i.e., React.Component, and passes props to it.
    - This is required before you can use this.props inside the constructor.
    - If you don’t call super(props), this.props will be undefined inside the constructor, and it can cause errors.

# updating state
    - Never update state variable directly.
        this.state.count = this.state.count+1 : XXXXX - Never do that
    - To update the state make use of setState method which takes an object
        this.setState({
            count: this.state.count + 1,
            name : 'Michael'
        })

# Mounting (Rendering)
    - Whenever a class based component is mounted to the screen, first the constructor() gets called and then the render()
    - if the class parent class has a child component then
        1. The constructor() followed by render() method of parent gets called 
        2. The constructor() followed by render() method of child gets called 

# ComponentDidMount()
    - It is an somewhat similar of useEffect()
    - It get executed after the component is fully rendered.
    - E.g.
        If we have parent class which have constructor(), render() & ComponentDidMount() and child class inside parent class which have the same things, and consider all the function priting something
        then the order of the output will be
            - Constructor of parent will be called
            - Render of parent will be called
            - Constructor of child will be called
            - Render of child will be called
            - ComponentDidMount of child will be called
            - ComponentDidMount of parent will be called
    - Why this behaviour? because as the ComponentDidMount() gets called when the component fully rendered to the screen thats why the parent will wait for the child to be full rendered until it mark itself as fully rendered
    - UseCase:
        - To make api call. Why? Because as we have discussed in functional component that the api should be called after the component is rendered to the screen so that the user does not need to wait.
        - E.g. If we call the api before rendering & if the api take time to return the data then the user need to wait and nothing will be displayed to the screen, which is not good
        - we call API in ComponentDidMount() as it will execute after the component is rendered to the screen

# Understading ComponentDidMount in depth
    - Component Life Cycle: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    - React has 2 phases 
        1. Render phase: constructor() + render()
        2. Commit phase: ComponentDidMount()
    - The render phase is fast and the commit (­React updates ­D­O­M and refs) phase is very costly based on which react first complete the render phase if we have multiple child component inside parent and then moves to the commit phase
    - E.g.
        We have parent Component, which have 2 child component
            1. firstChild
            2. secondChild
        and all have constructor() + render() + ComponentDidMount
    - The order of output will be 
        1. Parent constructor()
        2. Parent render()
        3. child1 constructor()
        4. child1 render()
        5. child2 constructor()
        6. child2 render()
        7. child1 ComponentDidMount()
        8. child2 ComponentDidMount()
        9. parent ComponentDidMount()
    - Now why? The child1 constructor & render called first and then child1 ComponentDidMount followed by child2 ComponentDidMount called
    - Because of the component lifecycle, it does the rendering first and then the commit part, As commit is very constly operation and takes more time so react optimize this part by batching the rendering of the child component followed by committing (­React updates ­D­O­M and refs) of the same

# Updating phase (componentDidUpdate)
    - After the mouting phase completes the updating phase happens
    - Updating phase start as soon as we update the state variable, pass a new props
    - When the state updates, the component rerender  and the DOM update happens and then the componentDidUpdate() get executed

# Unmounting phase (componentWillUnmount)
    - After the updating phase, the componentWillUnmount function gets executed and then it will run as soon as the componenet get unmmount i.e. the component get removed from the DOM
    - For e.g. when we change the route etc
    - Usecase
        1. To clear setTimeout, setInterval, as if we dont clear it it keepson adding on every page rerender
        2. access the setInterval using this.
            e.g. this.timer = setInterval(() => {
                    console.log('React is super')
                },1000) 
        3. and clear in componentWillUnmount()
            componentWillUnmount(){
                clearInterval(this.timer);
            }

# We can make async with the lifecycle method in class based component
    - for componentDidMount() it works because componentDidMount() is a regular method. It's just a normal JavaScript function on a class.You can mark any normal method as async, and it will return a Promise.
    - This works because React doesn’t care whether the lifecycle method returns a Promise — it simply calls the method when the component mounts.
    - for useEffect it won't work, useEffect cannot directly take an async function because React expects useEffect to return a cleanup function or nothing, not a Promise.

- To do the same in functional component
useEffect(() => {
    const timer = setInterval(() => {
        console.log('React is super')
    },1000)

    return (() => {
        clearInterval(timer)
    })
})

- Never compare React lifecycle methods to functional component

