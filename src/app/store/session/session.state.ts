import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SessionAction } from "./session.actions";
import { SessionModel } from "./session.model";


const defaultValue: SessionModel =
{
user: "",
islogged: false,

}

@State<SessionModel>({
name: 'session',
defaults: defaultValue
})
@Injectable()
export class SessionState {
@Selector()
static user(state: SessionModel): string {
return state.user;
}
@Selector()
static islogged(state: SessionModel): boolean {
return state.islogged;
}
@Selector()
static connexionDate(state: SessionModel): Date | undefined{
return state.connexionDate;
}

@Action(SessionAction)
setSession(ctx: StateContext<SessionModel>, action: SessionAction): void {
const state = ctx.getState();

ctx.patchState({
...state,
user: action.session.user,
islogged: action.session.islogged,
connexionDate: new Date()
});
}

}