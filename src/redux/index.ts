import configureStore from "./configureStore";
import { default as G } from "./interfaces/IGame";
import { default as S } from "./interfaces/IState";
import { default as GA } from "./modules/game/GameAction";
import { default as UA } from "./modules/user/UserAction";

export type IGame = G;
export type IState = S;
export type GameAction = GA;
export type UserAction = UA;

export * from "./interfaces/IGame";
export * from "./modules/game/gameActions";
export * from "./modules/user/userActions";
export { configureStore };
