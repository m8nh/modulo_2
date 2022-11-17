export interface IArrayList<T> {
    add(data: T): void;
    get(index: number): T;
    size(): number;
    remove(): void;
}

export class ArrayList<T> {
    container: Array <T>;

    constructor() {
        this.container = [];
    }
    add(data:T):void {
        this.container.push(data);
    }
    get(index:number):T {
        return this.container[index];
    }
    remove():void {
        this.container.pop()
    }
    size(): number {
        return this.container.length;
    }
}

interface Post {
    title: string;
}

let arrayList = new ArrayList<Post>();
arrayList.add({title: 'Dev JS'});
arrayList.add({title: 'Dev PHP'});
arrayList.add({title: 'Dev Java'});
console.log(arrayList.container)