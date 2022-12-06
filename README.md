<h1 align="center">online-only-buttons</h1>

Only when the client is online clickable React buttons. Usable for forms and highly customizable.

![](https://raw.githubusercontent.com/ufukbakan/online-only-buttons/main/example/capture.gif)

## Simple Usage
```js
import { OnlineButton } from "online-only-buttons";

export default function App() {
    return (
            <form>
                <input type="text" name="name" />
                <OnlineButton>Hello World</OnlineButton>
            </form>
    )
}
```

## Advanced Usage
```js
import { OnlineButton } from "online-only-buttons";

function CustomButton({children}){
    return(
            <OnlineButton
                bg="#8634eb"
                fg="white"
                hbg="#611d91"
                hfg="#fff"
                dbg="#523c3c"
                dfg="#c4a3a3"
                borderColor="#34ebb1"
                hBorderColor="yellow"
                borderRadius="50px"
                borderWidth="3px"
                borderStyle="double"
                transitionDuration="1s"
                transitionFunction="cubic-bezier(0,1,0,1)"
                fontWeight="lighter"
                padding=".1em 1em"
                margin="1em 0 0 1em"
                fontSize="12pt"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'"
                offlineAnimation={false}
                offlineMessage="No connection"
                onClick={ () => window.alert("Hello World!") }>
                {children}
            </OnlineButton>
    )
}

export default function App() {
    return (
            <form>
                <input type="text" name="name" />
                <CustomButton>Customized Button</CustomButton>
            </form>
    )
}
```

## Properties
All properties are optional except children.
- <span style="font-size:1.4em;">**bg**</span> : type=***string***,  explication=***background color***
- <span style="font-size:1.4em;">**fg**</span> : type=***string***,  explication=***foreground color***
- <span style="font-size:1.4em;">**hfg**</span> : type=***string***, explication=***:hover foreground color***
- <span style="font-size:1.4em;">**hbg**</span> : type=***string***, explication=***:hover background color***
- <span style="font-size:1.4em;">**dfg**</span> : type=***string***, explication=***disabled foreground color***
- <span style="font-size:1.4em;">**dbg**</span> : type=***string***, explication=***disabled background color***
- <span style="font-size:1.4em;">**padding**</span> : type=***string***,
- <span style="font-size:1.4em;">**margin**</span> : type=***string***,
- <span style="font-size:1.4em;">**fontSize**</span> : type=***string***,
- <span style="font-size:1.4em;">**fontFamily**</span> : type=***string***,
- <span style="font-size:1.4em;">**fontWeight**</span> : type=***string***,
- <span style="font-size:1.4em;">**borderWidth**</span> : type=***string***,
- <span style="font-size:1.4em;">**borderRadius**</span> : type=***string***,
- <span style="font-size:1.4em;">**borderColor**</span> : type=***string***,
- <span style="font-size:1.4em;">**hBorderColor**</span> : type=***string***, explication=***:hover border color***
- <span style="font-size:1.4em;">**borderStyle**</span> : type=***string***,
- <span style="font-size:1.4em;">**transitionDuration**</span> : type=***string***,
- <span style="font-size:1.4em;">**transitionFunction**</span> : type=***string***,
- <span style="font-size:1.4em;">**offlineAnimation**</span> : type=***boolean***,
- <span style="font-size:1.4em;">**offlineMessage**</span> : type=***string***, explication=***message will be displayed when offline***
- <span style="font-size:1.4em;">**onClick**</span> : type=***MouseEventHandler***
- <span style="font-size:1.4em;">**children**</span> : type=***string | JSX.Element | JSX.Element[]***, explication=***Child element/s written between component tag***