var Instruktor = /** @class */ (function () {
    function Instruktor(i, p, b) {
        this._ime = i;
        this._prezime = p;
        this._jmbg = b;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: false,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, jmbgKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._jmbgKandidata = jmbgKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        /**
         * Getter instruktor
         * @return {Instruktor}
         */
        get: function () {
            return this._instruktor;
        },
        /**
         * Setter instruktor
         * @param {Instruktor} value
         */
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        /**
         * Getter imeKandidata
         * @return {string}
         */
        get: function () {
            return this._imeKandidata;
        },
        /**
         * Setter imeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        /**
         * Getter prezimeKandidata
         * @return {string}
         */
        get: function () {
            return this._prezimeKandidata;
        },
        /**
         * Setter prezimeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        /**
         * Getter nacinPolaganja
         * @return {string}
         */
        get: function () {
            return this._nacinPolaganja;
        },
        /**
         * Setter nacinPolaganja
         * @param {string} value
         */
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "jmbgKandidata", {
        /**
         * Getter jmbgKandidata
         * @return {number}
         */
        get: function () {
            return this._jmbgKandidata;
        },
        /**
         * Setter jmbgKandidata
         * @param {number} value
         */
        set: function (value) {
            this._jmbgKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(n) {
        this._naziv = n;
        this._instruktori = [];
        this._ispiti = [];
    }
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        get: function () {
            return this._instruktori;
        },
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        get: function () {
            return this._ispiti;
        },
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoSkola.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var out = "";
        for (var i in this._ispiti) {
            if (this._ispiti[i].brojBodova < 55) {
                out += "<tr>\n                            <td>" + (Number(i) + 1) + "</td>\n                            <td>" + this._ispiti[i].imeKandidata + " " + this._ispiti[i].prezimeKandidata + "</td>\n                            <td>" + this._ispiti[i].instruktor.ime + " " + this._ispiti[i].instruktor.prezime + "</td>\n                            <td>" + this._ispiti[i].nacinPolaganja + "</td>\n                            <td>" + this._ispiti[i].datum + "</td>\n                            <td class=\"red\">" + this._ispiti[i].brojBodova + "</td>\n                        </tr>";
            }
            else if (this._ispiti[i].brojBodova >= 55) {
                out += "<tr>\n                            <td>" + (Number(i) + 1) + "</td>\n                            <td>" + this._ispiti[i].imeKandidata + " " + this._ispiti[i].prezimeKandidata + "</td>\n                            <td>" + this._ispiti[i].instruktor.ime + " " + this._ispiti[i].instruktor.prezime + "</td>\n                            <td>" + this._ispiti[i].nacinPolaganja + "</td>\n                            <td>" + this._ispiti[i].datum + "</td>\n                            <td class=\"green\">" + this._ispiti[i].brojBodova + "</td>\n                        </tr>";
            }
        }
        document.getElementById("tbody").innerHTML = out;
    };
    AutoSkola.prototype.izracunajProlaznostZaInstruktora = function () {
        var teorije = this._ispiti.filter(function (element) {
            if (element.nacinPolaganja == "Teorija") {
                return element;
            }
        });
        var prakse = this._ispiti.filter(function (element) {
            if (element.nacinPolaganja == "Prakticno") {
                return element;
            }
        });
        var proseci = [];
        var resenja = [];
        var out = "";
        //kupim parove Instruktor i njegova prosecna ocena prvo za teorije pa za prakticno
        for (var i in this._instruktori) {
            var sum = 0;
            var brojac = 0;
            var prosek = void 0;
            var inst = "";
            for (var j in teorije) {
                if (this._instruktori[i] == teorije[j].instruktor) {
                    sum += teorije[j].brojBodova;
                    brojac++;
                }
            }
            prosek = Number((sum / brojac).toFixed(2));
            inst = this._instruktori[i].ime + " " + this._instruktori[i].prezime;
            proseci.push(inst);
            proseci.push(prosek);
            resenja.push(proseci);
            proseci = [];
        }
        //Trazim najveci prosek
        var najbolji = ["", 0];
        for (var k in resenja) {
            if (resenja[k][1] > najbolji[1]) {
                najbolji[0] = resenja[k][0];
                najbolji[1] = resenja[k][1];
            }
        }
        //Dodajem u ispis podatje za teoriju pa posle na to istim postupkom dodajem i za praksu
        out += "<h3>Instruktor sa najboljom prolaznosti za teoriju je " + najbolji[0] + " sa prosekom od " + najbolji[1] + " boda.</h3> <br>";
        //Proseci praksi
        proseci = [];
        resenja = [];
        for (var i in this._instruktori) {
            var sum = 0;
            var brojac = 0;
            var prosek = void 0;
            var inst = "";
            for (var j in prakse) {
                if (this._instruktori[i] == prakse[j].instruktor) {
                    sum += prakse[j].brojBodova;
                    brojac++;
                }
            }
            prosek = Number((sum / brojac).toFixed(2));
            inst = this._instruktori[i].ime + " " + this._instruktori[i].prezime;
            proseci.push(inst);
            proseci.push(prosek);
            resenja.push(proseci);
            proseci = [];
        }
        najbolji = ["", 0];
        for (var k in resenja) {
            if (resenja[k][1] > najbolji[1]) {
                najbolji[0] = resenja[k][0];
                najbolji[1] = resenja[k][1];
            }
        }
        //Dolepljivanje podataka za praksu
        out += "<h3>Instruktor sa najboljom prolaznosti za praksu je " + najbolji[0] + " sa prosekom od " + najbolji[1] + " boda.</h3> <br>";
        //Ispis u div element
        document.getElementById("podaci").innerHTML = out;
    };
    AutoSkola.prototype.najslabijiKandidatPoInstruktoru = function (nacinPolaganja, instruktor) {
        var niz1 = this._ispiti.filter(function (element) {
            if (element.instruktor == instruktor && element.nacinPolaganja == nacinPolaganja) {
                return element;
            }
        });
        var niz2 = niz1.reduce(function (preValue, element) {
            if (preValue.brojBodova <= element.brojBodova) {
                return preValue;
            }
            else {
                return element;
            }
        });
        document.getElementById("podaci").innerHTML = "";
        document.getElementById("podaci").innerHTML = "<h3>Najslabiji kandidat za " + nacinPolaganja + " kod instruktora " + instruktor.ime + " " + instruktor.prezime + " je " + niz2.imeKandidata + " " + niz2.prezimeKandidata + ".</h3>";
    };
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var jmbg = Number(document.getElementById("jmbg").value);
        var datum = document.getElementById("datum").value;
        var bodteorija = Number(document.getElementById("teorija").value);
        var bodprakticno = Number(document.getElementById("prakticno").value);
        var ispit1 = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Teorija", datum, bodteorija);
        var ispit2 = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Prakticno", datum, bodprakticno);
        autoSkola.dodajIspit(ispit1);
        autoSkola.dodajIspit(ispit2);
        autoSkola.refreshIspis();
    });
    document.getElementById("najslabijiKandidatPoInstruktoruZaNacinPolaganja").addEventListener("click", function () {
        var sel = document.getElementById("nacinPolaganjaSelekt").value;
        autoSkola.najslabijiKandidatPoInstruktoru(sel, aktivanInstruktor);
    });
    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click", function () {
        autoSkola.izracunajProlaznostZaInstruktora();
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Teorija", "2018-02-11", 35);
    var i12 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Prakticno", "2018-03-05", 78);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Teorija", "2018-05-09", 89);
    var i22 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Prakticno", "2018-07-21", 95);
    var i31 = new Ispit(is1, "Dejan", "Dejan", 333, "Teorija", "2018-05-09", 48);
    var i32 = new Ispit(is1, "Dejan", "Dejan", 333, "Prakticno", "2018-07-21", 98);
    var i41 = new Ispit(is2, "Marko", "Markovic", 444, "Teorija", "2018-02-11", 85);
    var i42 = new Ispit(is2, "Marko", "Markovic", 444, "Prakticno", "2018-03-05", 94);
    var i51 = new Ispit(is2, "Nikola", "Nikolic", 555, "Teorija", "2018-05-09", 67);
    var i52 = new Ispit(is2, "Nikola", "Nikolic", 555, "Prakticno", "2018-07-21", 23);
    var i61 = new Ispit(is2, "Luka", "Lukic", 666, "Teorija", "2018-05-09", 83);
    var i62 = new Ispit(is2, "Luka", "Lukic", 666, "Prakticno", "2018-07-21", 51);
    var i71 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Teorija", "2018-02-11", 85);
    var i72 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Prakticno", "2018-03-05", 94);
    var i81 = new Ispit(is3, "Branko", "Brankovic", 888, "Teorija", "2018-05-09", 41);
    var i82 = new Ispit(is3, "Branko", "Brankovic", 888, "Prakticno", "2018-07-21", 21);
    var i91 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Teorija", "2018-05-09", 45);
    var i92 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Prakticno", "2018-07-21", 55);
    var i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Teorija", "2018-05-09", 97);
    var i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Prakticno", "2018-07-21", 99);
    var i111 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Teorija", "2018-05-09", 54);
    var i112 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Prakticno", "2018-07-21", 17);
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
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map