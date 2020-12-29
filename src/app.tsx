import * as React from "react";
import { useEffect } from "react";
import { useSpring, useTrail, animated } from 'react-spring'

import "./sass/style.scss";

export function App() {
    const photo = require("./images/photo.svg");
    const linkedinPhoto = require("./images/linkedin.svg");
    const githubPhoto = require("./images/github.svg");

    const getQuality = (text: string, image: string, onClick?: () => void) => {
        return {text, image, onClick}
    }

    const qualitiesArray = [
        getQuality("Javascript", require("./images/js.svg")),
        getQuality("React.js", require("./images/react.svg")),
        getQuality("Node.js", require("./images/nodejs.svg")),
        getQuality("Rollup.js", require("./images/rollup.svg")),
        getQuality("Sass", require("./images/sass.svg")),
        getQuality("Git", require("./images/git.svg")),
        getQuality("Typescript", require("./images/ts.svg")),
        getQuality("Electron.js", require("./images/electron.svg")),
        getQuality("Webpack", require("./images/webpack.svg")),
        getQuality("Express.js", require("./images/ex.svg")),
        getQuality("Styled Component", require("./images/styled.svg")),
        getQuality("Visual Studio Code", require("./images/vscode.svg")),
    ];

    const [props, set] = useSpring(() => ({opacity: 0}));
    const [propsQualities, setQualities] = useTrail(qualitiesArray.length, () => ({opacity: 0}));

    useEffect(() => {
        setTimeout(() => {
            set({opacity: 1});
        }, 300);
        setTimeout(() => {
            setQualities({opacity: 1} as any) // Because React Spring have a error on useTrail Set Function
        }, 500);
    })

    return (
        <div className="app">
            <div className="wrapper">
                <div className="jeremy-container">
                    <div className="header">
                        <div className="icon linkedin">
                            <a target="_blank" href="https://www.linkedin.com/in/jeremy-auvray-3a1b7839/">
                                <animated.img
                                    src={linkedinPhoto}
                                    style={propsQualities[qualitiesArray.length - 1]}
                                />
                            </a>
                        </div>
                        <div className="icon github">
                            <a target="_blank" href="https://github.com/jeremy93-2008">
                                <animated.img
                                    src={githubPhoto}
                                    style={propsQualities[qualitiesArray.length - 1]}
                                />
                            </a>
                        </div>
                    </div>
                    <animated.img className="photo" src={photo} style={props} />
                    <div className="name">
                        Jeremy Auvray
                    </div>
                    <div className="description">
                        Javascript Developer
                    </div>
                    <div className="qualities">
                        {qualitiesArray.map((quality, idx) => <animated.div key={idx} className="icon" title={quality.text} style={propsQualities[idx]}><img src={quality.image} /></animated.div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}