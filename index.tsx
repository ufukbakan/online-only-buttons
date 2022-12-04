import React, { forwardRef, MouseEventHandler, useEffect, useState } from "react";
import "./index.css";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const onOnline = () => setIsOnline(true);
        const onOffline = () => setIsOnline(false);
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        }
    }, []);

    return isOnline;
}

type ButtonProps = {
    bg?: string, // background color
    fg?: string, // foreground color
    hfg?: string, // :hover foreground color
    hbg?: string, // :hover background color
    dfg?: string, // disabled foreground color
    dbg?: string, // disabled background color
    padding?: string,
    margin?: string,
    fontSize?: string,
    fontFamily?: string,
    fontWeight?: string,
    borderWidth?: string,
    borderRadius?: string,
    borderColor?: string,
    hBorderColor?: string, // :hover border color
    borderStyle?: string,
    transitionDuration?: string,
    transitionFunction?: string,
    offlineAnimation?: boolean,
    offlineMessage?: string, // message will be displayed when offline
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: string | JSX.Element | JSX.Element[]
}


export const OnlineButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const isEnabled = useOnline();
    const handlers = {
        onClick: props.onClick
    }

    const appendedStyle = {
        [props.padding ? "--padding" : ""]: props.padding,
        [props.margin ? "--margin" : ""]: props.margin,
        [props.fontSize ? "--font-size" : ""]: props.fontSize,
        [props.fontFamily ? "--font-family" : ""]: props.fontFamily,
        [props.fontWeight ? "--font-weight" : ""]: props.fontWeight,
        [props.fg ? "--fg-color" : ""]: props.fg,
        [props.bg ? "--bg-color" : ""]: props.bg,
        [props.dfg ? "--disabled-fg-color" : ""]: props.dfg,
        [props.dbg ? "--disabled-bg-color" : ""]: props.dbg,
        [props.hfg ? "--hover-fg-color" : ""]: props.hfg,
        [props.hbg ? "--hover-bg-color" : ""]: props.hbg,
        [props.borderWidth ? "--border-width" : ""]: props.borderWidth,
        [props.borderRadius ? "--border-radius" : ""]: props.borderRadius,
        [props.borderColor ? "--border-color" : ""]: props.borderColor,
        [props.borderStyle ? "--border-style" : ""]: props.borderStyle,
        [props.hBorderColor ? "--h-border-color" : ""]: props.hBorderColor,
        [props.transitionDuration ? "--t-time" : ""]: props.transitionDuration,
        [props.transitionFunction ? "--t-function" : ""]: props.transitionFunction,
        [typeof props.offlineAnimation == "boolean" ? "--offline-overlay-display" : ""]: props.offlineAnimation == true ? "flex" : "none"
    }
    return (
        <div className="netd-button-wrapper" style={appendedStyle}>
            {!isEnabled
                &&
                <div className="netd-button-offline-overlay">
                    <div data-delay=".1s" className="netd-overlay-dot"></div>
                    <div data-delay=".2s" className="netd-overlay-dot"></div>
                    <div data-delay=".3s" className="netd-overlay-dot"></div>
                </div>
            }
            <button
                disabled={!isEnabled}
                ref={ref}
                {...handlers}
                className={`netd-button ${isEnabled ? "online" : "offline"}`}>
                {isEnabled ? props.children : props.offlineMessage || "Disconnected"}
            </button>
        </div>
    )

});