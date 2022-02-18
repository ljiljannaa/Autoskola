/// <reference path="AutoSkola.ts" />

let autoSkola: AutoSkola;
let aktivanInstruktor: Instruktor;

function promeniAktivnog(selekt: HTMLSelectElement): void {
    aktivanInstruktor = autoSkola.instruktori.filter(el => el.jmbg == Number(selekt.value))[0];
    autoSkola.refreshIspis();
}

function wireEvents(): void {
   //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click",()=>{
        let ime: string = (document.getElementById("ime") as HTMLInputElement).value;
        let prezime: string = (document.getElementById("prezime") as HTMLInputElement).value;
        let jmbg: number = Number((document.getElementById("jmbg") as HTMLInputElement).value);
        let datum: string = (document.getElementById("datum") as HTMLInputElement).value;
        let bodteorija: number = Number((document.getElementById("teorija") as HTMLInputElement).value);
        let bodprakticno: number = Number((document.getElementById("prakticno") as HTMLInputElement).value);
        
        let ispit1 = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Teorija", datum, bodteorija);
        let ispit2 = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Prakticno", datum, bodprakticno);

        autoSkola.dodajIspit(ispit1);
        autoSkola.dodajIspit(ispit2);
        autoSkola.refreshIspis();
    
    });
    document.getElementById("najslabijiKandidatPoInstruktoruZaNacinPolaganja").addEventListener("click",()=>{
        let sel: string = (document.getElementById("nacinPolaganjaSelekt") as HTMLSelectElement).value;
        autoSkola.najslabijiKandidatPoInstruktoru(sel, aktivanInstruktor);
        
    });
    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click",()=>{
        autoSkola.izracunajProlaznostZaInstruktora();
    });
}











window.onload = () => {
    //OVDE TESTIRATI KOD
    //-----------------



    //-----------------
    initializeData();
}

function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    let is1 = new Instruktor("Pera", "Peric", 1212975803555);
    let is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    let is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];

    let i11 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Teorija", "2018-02-11", 35);
    let i12 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Prakticno", "2018-03-05", 78);
    let i21 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Teorija", "2018-05-09", 89);
    let i22 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Prakticno", "2018-07-21", 95);
    let i31 = new Ispit(is1, "Dejan", "Dejan", 333, "Teorija", "2018-05-09", 48);
    let i32 = new Ispit(is1, "Dejan", "Dejan", 333, "Prakticno", "2018-07-21", 98);
    
    let i41 = new Ispit(is2, "Marko", "Markovic", 444, "Teorija", "2018-02-11", 85);
    let i42 = new Ispit(is2, "Marko", "Markovic", 444, "Prakticno", "2018-03-05", 94);
    let i51 = new Ispit(is2, "Nikola", "Nikolic", 555, "Teorija", "2018-05-09", 67);
    let i52 = new Ispit(is2, "Nikola", "Nikolic", 555, "Prakticno", "2018-07-21", 23);
    let i61 = new Ispit(is2, "Luka", "Lukic", 666, "Teorija", "2018-05-09", 83);
    let i62 = new Ispit(is2, "Luka", "Lukic", 666, "Prakticno", "2018-07-21", 51);

    let i71 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Teorija", "2018-02-11", 85);
    let i72 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Prakticno", "2018-03-05", 94);
    let i81 = new Ispit(is3, "Branko", "Brankovic", 888, "Teorija", "2018-05-09", 41);
    let i82 = new Ispit(is3, "Branko", "Brankovic", 888, "Prakticno", "2018-07-21", 21);
    let i91 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Teorija", "2018-05-09", 45);
    let i92 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Prakticno", "2018-07-21", 55);
    let i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Teorija", "2018-05-09", 97);
    let i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Prakticno", "2018-07-21", 99);
    let i111 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Teorija", "2018-05-09", 54);
    let i112 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Prakticno", "2018-07-21", 17);

    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    autoSkola.dodajIspit(i41);
    autoSkola.dodajIspit(i42);
    autoSkola.dodajIspit(i51);
    autoSkola.dodajIspit(i52);
    autoSkola.dodajIspit(i61);
    autoSkola.dodajIspit(i62);
    autoSkola.dodajIspit(i71);
    autoSkola.dodajIspit(i72);
    autoSkola.dodajIspit(i81);
    autoSkola.dodajIspit(i82);
    autoSkola.dodajIspit(i91);
    autoSkola.dodajIspit(i92);
    autoSkola.dodajIspit(i101);
    autoSkola.dodajIspit(i102);
    autoSkola.dodajIspit(i111);
    autoSkola.dodajIspit(i112);

    let select: HTMLSelectElement = document.getElementById("instruktor") as HTMLSelectElement;
    autoSkola.instruktori.forEach(el => {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });

    aktivanInstruktor = autoSkola.instruktori[0];

    autoSkola.refreshIspis();
    wireEvents();

}