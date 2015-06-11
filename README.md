# Patience
Front End Schedule Application


# Thoughts
StateTree Logic VS. Individual Component Logic

StateTree = {
    model: {
        //specific to data model(s) being shared between server and client
    },
    view: {
        //overall application view state
    }
}

Allowing components to use internal state (React State) when decoupled from rest of application / state not used elsewhere....

... Could become a mess where some logic lives internally to components and other logic lives in stateTree..

On the Flip-Side

... If all stateful logic lives in state tree.. Tree can become huge and unwieldy.
( Ease of adding components that might use this data in future??? )