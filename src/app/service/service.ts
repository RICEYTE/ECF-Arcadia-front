export class service{


    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    picture: string | undefined;

    constructor(
        id:number,
        name: string,
        description:string,
        picture: string
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = this.picture;
    }
}