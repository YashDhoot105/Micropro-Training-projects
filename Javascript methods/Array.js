const array = ["One", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// ACCESS FIRST AND LAST ELEMENT 

function remove_first_last_element() {
    const array_copy = [...array];
    //  METHOD 1 : Changes original array
    let first_element_using_shift = array_copy.shift();
    let last_element_using_pop = array_copy.pop();

    console.log("first_element : " + first_element_using_shift);
    console.log("last_element : " + last_element_using_pop);
    console.log("Original array : " + array);
    console.log("Array copy : " + array_copy);

    // METHOD 2 : Changes original array
    let first_element_using_index = array[0]
    let last_element_using_index = array[array.length - 1];

    console.log("first_element : " + first_element_using_index);
    console.log("last_element : " + last_element_using_index);
    console.log("Original array : " + array);
    console.log("Array copy : " + array_copy);

    // METHOD 3 : dosent change the original array
    let first_element_using_slice = array.slice(0, 1)
    let last_element_using_slice = array.slice(-1);

    console.log("first_element : " + first_element_using_slice);
    console.log("last_element : " + last_element_using_slice);
    console.log("Original array : " + array);
    console.log("Array copy : " + array_copy);
}

remove_first_last_element();



// ADD ELEMENT TO THE END OF AN ARRAY

function add_element_to_end() {
    const array_copy = [...array];
    const element_to_push = "eleven";
    array_copy.push(element_to_push);
    console.log("Element to push : " + element_to_push);
    console.log("Original array : " + array);
    console.log("Array copy : " + array_copy);
}

add_element_to_end();
