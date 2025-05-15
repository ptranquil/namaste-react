# React is the most popular JS library to build frontend application

# What is CDN
    - A CDN (Content Delivery Network) is a system of distributed servers that deliver web content (like images, CSS, JavaScript) to users based on their location, improving website performance and reducing latency

# What is crossorigin
    - crossorigin is an attribute that deals with security and access permissions.
    - When you load something (like a script or image) from a different website (like a CDN), the browser treats it as a cross-origin request.
    - The browser needs to know whether it should share information, like cookies or error messages, with that other site.

    In simple terms:
        - Imagine borrowing a tool from your neighbor (CDN).
        - The crossorigin tells your house (the browser):
            “I'm borrowing this tool, but I might need to ask them for more info later. Please allow that communication.”

React CDN: It is the core file of react
ReactDOM CDN: 
    This file is responsible for the DOM operations. Modification of DOM
    Its kind of a bridge to connect to the DOM

- React.createElement take 3 parameter
    1: The element type: e.g. h1, div, a etc
    2. The attributes of element: id, class
    3. The content

- So the React.createElement create the object
- Render method is converting that object to the HTML and rendering it in the root

- If there is already something present in the root then it will replace it with the rendered content