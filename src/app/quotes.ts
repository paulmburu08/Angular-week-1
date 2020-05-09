export class Quotes {
	showDescription: boolean;
    constructor(
			public name : string,
			public quote : any,
			public author : string
	){this.showDescription=false;}   
}
