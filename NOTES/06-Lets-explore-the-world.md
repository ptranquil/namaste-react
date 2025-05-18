- Always make 2 render
    - First to show the initial load (Shimmer UI, Loader, etc)
    - Call the API and update the state

# UseEffect
    - A hook is nothing but a normal javascript function which has its own purpose
    - useEffect gets called after the component render

- Use Optional chaining for deeply nested data (res?.data?.data?...)
- Conditional Rendering is rendering based on some condition e.g Like we have implemented the shimmer UI

# UseState (IMP)
    - const [state, setState] = useState("")
    - As we always declared the state variable with const and we can't modify cont variable then how using the setState we change the value??????
    - Its because when the state change the whole component rerenders and while rerendering a new variables get created with the updated value

    - Also when the vakue changes, the whole reconciliation porcess triggered, React finds out the difference between the old VDOM and the new VDOM and only the changed value gets updated

# Why is React Fast?
    - virtual DOM
    - Reconciliation Algorithm using React Fiber