import * as React from "react";
import "./sass/style.scss";

export function App() {
    const photo = require("./images/photo.svg");

    const icons = [
        require("./images/js.svg"),
        require("./images/ts.svg"),
        require("./images/react.svg"),
        require("./images/electron.svg"),
        require("./images/nodejs.svg"),
        require("./images/webpack.svg"),
        require("./images/rollup.svg"),
        require("./images/ex.svg"),
        require("./images/sass.svg"),
        require("./images/styled.svg"),
        require("./images/git.svg"),
        require("./images/vscode.svg"),
    ];

    return (
        <div className="app">
            <div className="wrapper">
                <div className="jeremy-container">
                    <img className="photo" src={photo} />
                    <div className="name">
                        Jeremy Auvray
                    </div>
                    <div className="description">
                        Javascript Developer
                    </div>
                    <div className="qualities">
                        {icons.map(ico => <div className="icon"><img src={ico} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}