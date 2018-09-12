import * as destination from "./destination"
import * as source from "./source"

function copy() {
    let charFromSource = source.getChar()
    while (charFromSource !== "\n") {
        destination.setChar(charFromSource)

        charFromSource = source.getChar()
    }
}

export default copy
