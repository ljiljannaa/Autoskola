/// <reference path="Ispit.ts" />

class AutoSkola{

    private _naziv: string;
    private _instruktori: Instruktor[];
    private _ispiti: Ispit[];

    constructor(n: string){
        this._naziv = n;
        this._instruktori = [];
        this._ispiti = [];
    }

	public get naziv(): string {
		return this._naziv;
	}

	public get instruktori(): Instruktor[] {
		return this._instruktori;
	}

	public get ispiti(): Ispit[] {
		return this._ispiti;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set instruktori(value: Instruktor[]) {
		this._instruktori = value;
	}

	public set ispiti(value: Ispit[]) {
		this._ispiti = value;
	}

    public dodajIspit(ispit: Ispit):void{
        this._ispiti.push(ispit);
    }
    
    public refreshIspis():void{
        
        let out:string = "";
        for(let i in this._ispiti){
            if(this._ispiti[i].brojBodova < 55){
                out += `<tr>
                            <td>${Number(i)+1}</td>
                            <td>${this._ispiti[i].imeKandidata} ${this._ispiti[i].prezimeKandidata}</td>
                            <td>${this._ispiti[i].instruktor.ime} ${this._ispiti[i].instruktor.prezime}</td>
                            <td>${this._ispiti[i].nacinPolaganja}</td>
                            <td>${this._ispiti[i].datum}</td>
                            <td class="red">${this._ispiti[i].brojBodova}</td>
                        </tr>`;
            }
            else if(this._ispiti[i].brojBodova >= 55){
                out += `<tr>
                            <td>${Number(i)+1}</td>
                            <td>${this._ispiti[i].imeKandidata} ${this._ispiti[i].prezimeKandidata}</td>
                            <td>${this._ispiti[i].instruktor.ime} ${this._ispiti[i].instruktor.prezime}</td>
                            <td>${this._ispiti[i].nacinPolaganja}</td>
                            <td>${this._ispiti[i].datum}</td>
                            <td class="green">${this._ispiti[i].brojBodova}</td>
                        </tr>`;
            }
        }
    document.getElementById("tbody").innerHTML = out;
    }

    public izracunajProlaznostZaInstruktora():void{
       
        let teorije: Ispit[] = this._ispiti.filter((element)=>{
            if(element.nacinPolaganja == "Teorija"){
                return element;
            }
        })
        let prakse: Ispit[] = this._ispiti.filter((element)=>{
            if(element.nacinPolaganja == "Prakticno"){
                return element;
            }
        })

        let proseci: any[] = [];
        let resenja: any[] = [];
        let out: string = "";

        //kupim parove Instruktor i njegova prosecna ocena prvo za teorije pa za prakticno
        for(let i in this._instruktori){
            let sum: number = 0;
            let brojac: number = 0;
            let prosek: number;
            let inst: string = "";
            for(let j in teorije){
                if(this._instruktori[i] == teorije[j].instruktor){
                    sum += teorije[j].brojBodova;
                    brojac++;
                }
            }
            prosek = Number((sum/brojac).toFixed(2));
            inst = this._instruktori[i].ime +" "+ this._instruktori[i].prezime;
            proseci.push(inst);
            proseci.push(prosek);
            resenja.push(proseci);
            proseci = [];
        }
        //Trazim najveci prosek
        let najbolji: any[] = ["", 0];
        for(let k in resenja){
            if(resenja[k][1] > najbolji[1]){
                najbolji[0] = resenja[k][0];
                najbolji[1] = resenja[k][1];
            }
        }
        //Dodajem u ispis podatje za teoriju pa posle na to istim postupkom dodajem i za praksu
        out += `<h3>Instruktor sa najboljom prolaznosti za teoriju je ${najbolji[0]} sa prosekom od ${najbolji[1]} boda.</h3> <br>`;
        
        //Proseci praksi
        proseci = [];
        resenja = [];
        for(let i in this._instruktori){
            let sum: number = 0;
            let brojac: number = 0;
            let prosek: number;
            let inst: string = "";
            for(let j in prakse){
                if(this._instruktori[i] == prakse[j].instruktor){
                    sum += prakse[j].brojBodova;
                    brojac++;
                }
            }
            prosek = Number((sum/brojac).toFixed(2));
            inst = this._instruktori[i].ime +" "+ this._instruktori[i].prezime;
            proseci.push(inst);
            proseci.push(prosek);
            resenja.push(proseci);
            proseci = [];
        }

        najbolji = ["", 0];
        for(let k in resenja){
            if(resenja[k][1] > najbolji[1]){
                najbolji[0] = resenja[k][0];
                najbolji[1] = resenja[k][1];
            }
        }
        //Dolepljivanje podataka za praksu
        out += `<h3>Instruktor sa najboljom prolaznosti za praksu je ${najbolji[0]} sa prosekom od ${najbolji[1]} boda.</h3> <br>`;
        //Ispis u div element
        document.getElementById("podaci").innerHTML = out;

    }

    public najslabijiKandidatPoInstruktoru(nacinPolaganja: string, instruktor: Instruktor):void{
        
        let niz1: Ispit[] = this._ispiti.filter((element)=>{
            if(element.instruktor == instruktor && element.nacinPolaganja == nacinPolaganja){
                return element;
            }
        })

        let niz2:Ispit = niz1.reduce((preValue, element)=>{
            if(preValue.brojBodova <= element.brojBodova){
                return preValue;
            } else{
                return element;
            }
        })

        document.getElementById("podaci").innerHTML = "";
        document.getElementById("podaci").innerHTML = `<h3>Najslabiji kandidat za ${nacinPolaganja} kod instruktora ${instruktor.ime} ${instruktor.prezime} je ${niz2.imeKandidata} ${niz2.prezimeKandidata}.</h3>`;
    }

}