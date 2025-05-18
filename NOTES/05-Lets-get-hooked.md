- Always match the file name with the component name
- .jsx or .js does not matter
- If we dont put .js or .jsx while importing a file, JS bydefault will treat it as a javascript file
-  E.g. import Header from 'Header';
- default export : export default CDN_URL;
- named export : export const CDN_URL='https://cdn......'
- Best practice is to keep the component file below 100 lines. It should not exceed 100 lines.

# HOOKS

useState()
    - It is use to create & maintain the state of the component
    - Whenever the state variable updates, React rerender the component.
    - const [state, setState] = useState("") // destructuring on the fly
      it can also be written as 
        const arr =  useState("");
        const state = arr[0]
        const setState = arr[1]
        /** Although this is js but still should be known */

# Reconciliation Algorithm (React Fiber)

- Scenarion: 
    - Consider an example where we need to update the cards of the restaurant on UI
    - on click of the filter button, we need to update the cards having avergae rating > 4
    - Consider we have 10 cards out of which 4 fulfills the requirement
    - Now when the button click
        1. Diff algorithm takes place which compares the difference between the previous Virtual DOM and new virtual DOM which created after the button click with 4 restraunt card
        2. It calculates the diffence and update the virtual DOM
        3. So it finds out the difference betweent two object and updates the VDOM (As finding the difference between the 2 object is faster than finding the difference between the html element)

    - Summary: 
        - Reconciliation Algorithm also known as React Fiber (introduced in React 16)
        - Virtual DOM is representation of actual DOM
        - Virtual DOM is nothing but the React Element also React.createElement() which returns object
        - Diff Algorithm finds the difference between the actual DOM and the virtual DOM

