import { initialize } from "@zcomponent/three";
import { default as Scene } from "./Scene.zcomp";

initialize(Scene, {}, {
    launchButton: document.getElementById('launchButton'),
    xrCompatible: true
});
