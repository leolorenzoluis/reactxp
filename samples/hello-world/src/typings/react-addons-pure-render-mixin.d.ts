// Type definitions for React v0.14 (react-addons-pure-render-mixin)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __Addons {
        interface PureRenderMixin extends Mixin<any, any> {}
    }
}

declare module "react-addons-pure-render-mixin" {
    var PureRenderMixin: __React.__Addons.PureRenderMixin;
    export = PureRenderMixin;
}