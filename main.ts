//% color="#ffb762"
namespace compression{
let output = ""
let binary_number = ""
let binary_multiply = 0
let charIndex = 0
let lenIndex = 0
let selectedChar = ""
//% block
export function decompressBinaryString (string: string) {
    output = ""
    for (let index = 0; index <= string.length / 2 - 1; index++) {
        binary_number = string.charAt(index * 2)
        binary_multiply = parseFloat(string.charAt(index * 2 + 1))
        for (let index2 = 0; index2 < binary_multiply; index2++) {
            output = "" + output + binary_number
        }
    }
    return output
}
//% block
export function compressBinaryString (string: string) {
    charIndex = 0
    output = ""
    while (charIndex < string.length - 1) {
        lenIndex = 0
        selectedChar = string.charAt(charIndex)
        while (string.charAt(charIndex) == selectedChar) {
            lenIndex += 1
            charIndex += 1
        }
        output = "" + output + selectedChar + lenIndex
    }
    return output
}
}