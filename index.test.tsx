import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "chai";
import React from "react";
import Sinon from "sinon";
import { OnlineButton } from ".";

it("Render Test", async () => {
    render(<OnlineButton>Save</OnlineButton>);

    const button = await screen.getByText("Save");
    expect(button).not.null;

    const buttonDom = await screen.getByRole("button");
    expect(buttonDom).not.null;
});

it("Functionality Test", async () => {
    const clickHandler = Sinon.fake((e: Event) => { });
    const fakeEvent = new Event("dummy");

    render(<OnlineButton onClick={clickHandler.bind(null, fakeEvent)}>Test Button</OnlineButton>);
    const button = await screen.findByText("Test Button");
    fireEvent.click(button);

    expect(clickHandler.calledWith(fakeEvent)).to.be.true;
})

it("Configuration Test", async () => {
    render(
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
            onClick={() => {} }>
            Configured Button
        </OnlineButton>
    );

    const element = await screen.findByText("Configured Button");
    expect(element).to.be.not.null;
});