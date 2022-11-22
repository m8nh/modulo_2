function count_element_in_array(array:number[], x:number) {
    
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) 
            count++;
    }
    console.log("Phan tu " + x + " xuat hien " + count + " lan");
}

let array = [7, 2, 6, 7, 4, 9, 8];

count_element_in_array(array, 7);
count_element_in_array(array, 4);
