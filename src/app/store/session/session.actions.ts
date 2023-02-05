import { SessionReponse } from "src/app/servcices/session.response";


export class SessionAction {
static readonly type = '[login] connexion';
constructor(public session: SessionReponse ) { }
}
