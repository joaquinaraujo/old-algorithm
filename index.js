// Return the first element not duplicated.
// If there are more unduplicated elements, just return the first.
// If there are no duplicate elements return -1.

// for in: Keys
// for in: obj[i] -> Values
// for of: Values

let textBox = document.getElementById('textBox'),
    button = document.getElementById('button'),
    label = document.getElementById('label')

let notDuplicated = []

function hexacta(arr = []) {

    // Iterate in each element. Start in arr [0].
    arr.forEach(element => {

        let acum = 0

        // Check if an item is repeated.
        for (let i of arr) {

            // If there is the add 1 element.
            if (element == i) {
                acum++
            }

        }

        // If there is only 1 time the element added to the array of 'notDuplicated'.
        // If there is more than 2 times the ignore element.
        if (acum == 1) notDuplicated.push(element)
    })

}

function print(c, v) {
    label.innerHTML = `<p>The result of the operation is: <b style="color: ${c}">${v}</b></p>`
}

button.addEventListener('click', function() {

    let elements = textBox.value
    notDuplicated = []

    // If the text box is empty, show an alert.
    if (elements == '') {

        alert('Enter a number in the text box!')

    } else {
        
        // Transform strings of the text box into a numeric array.
        let arr = elements.split(',').map(item => {
            return Number(item)
        })

        // Run mother function!
        hexacta(arr)

        if (notDuplicated[0] == undefined) {    // If there are no duplicate elements return -1
            print('red', -1)
        } else {
            print('green', notDuplicated[0])    // Return the first element not duplicated
        }

    }

})

