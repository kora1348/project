import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CorporateActionService {
  corporates = [
    {
      corporateCompte: "RA0001",
      corporateAccount: "CAUTION MUTUELLE TOURNAI",
      corporateType: "Régularisation - Echange",
      corporateLibelle: "HELLENIC REP 12/42 VAR",
      corporateQuantity: 100000.0,
      corporateDate: "28/02/2022",
    },
    {
      corporateCompte: "RA0075",
      corporateAccount: "DECLERCQ ROUSSEAU ALAIN",
      corporateType: "Régularisation - Echange",
      corporateLibelle: "HELLENIC REP 12/42 VAR",
      corporateQuantity: 8700.0,
      corporateDate: "28/02/2022",
    },
    {
      corporateCompte: "RC7179",
      corporateAccount: "MAES PHILIPPE",
      corporateType: "Régularisation - Echange",
      corporateLibelle: "HELLENIC REP 12/42 VAR",
      corporateQuantity: 7200.0,
      corporateDate: "28/02/2022",
    },
    {
      corporateCompte: "RK4175",
      corporateAccount: "DU BOIS D'AISCHE DE GROOTE JOË",
      corporateType: "Régularisation - Echange",
      corporateLibelle: "HELLENIC REP 12/42 VAR",
      corporateQuantity: 1800.0,
      corporateDate: "28/02/2022",
    },
  ];

  constructor() {}
}
