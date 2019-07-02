# ReactPubSub
This is my take on the Publish-Subscribe Model in React.

With a little bit of help from some cool members in the Coding Blocks (https://www.codingblocks.net/) Slack community, I was able to create a pub-sub model which can be used to trigger events in any component, from any component.

The basic application uses React Hooks "UseContext" to host a event store. A component which holds an array of inputs subscribes to the event, and when published sets the focus on the selected input.

Usage:
    
    //subscribe to an event
     const globalContext = useContext(GlobalContext);
     globalContext.events.subscribe("setFocus", (e) => doAction(e));

    //trigger an event
    const globalContext = useContext(GlobalContext);
    globalContext.events.publish("setFocus", args)
  
Another member from the coding blocks community created a different approach, check it out here: https://stackblitz.com/edit/react-focus-via-store?file=Form.js 
