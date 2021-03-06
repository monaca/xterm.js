/// <reference path="../../../typings/xterm.d.ts" />
import { Terminal } from 'xterm';
export interface IZmodemOptions {
    noTerminalWriteOutsideSession?: boolean;
}
export declare function apply(terminalConstructor: typeof Terminal): void;
