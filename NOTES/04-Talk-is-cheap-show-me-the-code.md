# Props
- properties which you can pass to the component or props is like an argument to a function

# Config Driven UI
- Changing the UI details from minute to imp based on the configuration
- The config can be from the API
- E.b. change the UI background color based on the configuration

- Whenever we are looping over any data we should provide key properties
- Why keys should be uniquely represented?
    1. If the key is not provided then react will not able to verify the new component while rerendering
    2. E.g. If there are 5 cards and a new card arrive
        - If there is no key property, React will rernder all by adding the new one too as it does not know where to add the new card (The addition place is unknown)
        - It will remove everything and rerender with all
        - If the key is there then React will only rerender the newly added component
    3. Therefore for any loop each component should be uniquely identified elements
    4. React itself says that, never use index as a key. Index as a key is an antipattern
