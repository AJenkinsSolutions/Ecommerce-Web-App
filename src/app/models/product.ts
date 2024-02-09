export class Product {

    private id: number; 
    private name: string;
    private image_url: string;


    constructor(id: number, name: string, image_url: string){
        this.id = id;
        this.name = name;
        this.image_url = image_url;
    }
}
