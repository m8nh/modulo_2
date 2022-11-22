export class BubbleSort {
    static list: number[] = [2,3,2,5,6,1,-2,3,14,12]

    public static bubblesort(list: number[]): void {
        let needNextPass: boolean = true;

        for (let k = 1; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for(let i =0; i< list.length - k; i++){
                if(list[i] > list [i+1]){
                    let temp: number = list[i];
                    list[i] = list[i + 1];
                    list [i + 1] = temp

                    needNextPass = true;
                }
            }
        }
    }   
}

BubbleSort.bubblesort(BubbleSort.list);
for (let i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ")