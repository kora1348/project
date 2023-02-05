import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SessionAction } from '../../store/session/session.actions';
import { SessionState } from '../../store/session/session.state';

@Component({
selector: 'app-online',
templateUrl: './online.component.html',
styleUrls: ['./online.component.css'],
})
export class OnlineComponent implements OnInit {
@Select(SessionState.user) user$!: Observable<string>;
@Select(SessionState.islogged) islogged$!: Observable<string>;
@Select(SessionState.connexionDate) connexionDate$!: Observable<string>;


showSideBar: boolean = false;

selectedTab: string;

showSubmenu: any[] = [];
showInfo: any[] = [];

menus: any[] = [
/* Administration */
{
id: '1',
class: 'bx bx-lock-alt',
item: 'Administration',
route: '/online/administration',
arrowDown: 'bx bx-chevron-down',
arrowUp: 'bx bx-chevron-up',

submenus: [
{
class: 'bx bx-key',
item: 'Ouverture d\'un compte',
route: '/online/administration/account-opening',
},
{
class: 'bx bx-wallet',
item: 'Sélection d\'un protefeuille',
route: '/online/administration/portfolio',
},
{
class: 'bx bxs-bank',
item: 'Corporate actions',
route: '/online/administration/corporate-action',
},
{
class: 'bx bx-pie-chart-alt-2',
item: 'Visualisation des dépôts',
route: '/online/administration/visualization-deposit',
},
],
},

/* Market */
{
id: '2',
class: 'bx bx-chart',
item: 'Market',
route: '/online/market',
arrowDown: 'bx bx-chevron-down',
arrowUp: 'bx bx-chevron-up',

submenus: [
{
class: 'bx bx-coin-stack',
item: 'Valeurs',
route: '/online/market/value',
},
{
class: 'bx bx-line-chart',
item: 'Indices Boursiers',
route: '/online/market/indice',
},
{
class: 'bx bx-dollar',
item: 'Devise',
route: '/online/market/currency',
},
{
class: 'bx bx-spreadsheet',
item: 'Tableau de valeurs',
route: '/online/market/valuable-table',
},
],
},
/* DTA */
{ id: '3',
class: 'bx bx-lock-alt',
item: 'DTA',
route: '/online/dta',
arrowDown: 'bx bx-chevron-down',
arrowUp: 'bx bx-chevron-up',

submenus: [
{
class: 'bx bx-plus-circle',
item: 'Création formulaire',
route: '/online/dta/form-create',
},
{
class: 'bx bx-x-circle',
item: 'Suppresion formulaire',
route: '/online/dta/form-delete',
},
{
class: 'bx bx-right-arrow-circle',
item: 'Suivi formulaire',
route: '/online/dta/form-follow-up',
},

],
},
];

constructor(private store: Store, private router: Router) {}

ngOnInit() {}

toggleSideBar() {
this.showSideBar = !this.showSideBar;
}


toggleMenu(index: number) {
this.showSubmenu[index] = !this.showSubmenu[index];
}

toggleSubmenu(event: MouseEvent, item: any) {
event.stopPropagation();
this.showInfo[item] = !this.showInfo[item];
}

logoff(): void {
this.store.dispatch(
new SessionAction({
islogged: false,
user: '',
})
);
}

isLinkActive(menus) {
const url = this.router.url;
return menus.id === url.substring(1, url.indexOf('?'));
}


}
