export class Store {
    constructor(
        private name:string = "",
        private branches: string[] = [],
        private logo: string = "",
    ){}
    set Name(name:string){
        this.name = name;
    }

    get Name(){
        return this.name;
    }


    set Branches(branches:string[]){
        this.branches = branches;
    }

    get Branches(){
        return this.branches;
    }


    set Logo(logo:string){
        this.logo = logo;
    }

    get Logo(){
        return this.logo;
    }
}
