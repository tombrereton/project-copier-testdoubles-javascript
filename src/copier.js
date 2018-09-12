import * as destination from "./destination"
import * as source from "./source"

function copy() {
    let charFromSource = source.getChar()
    destination.setChar(charFromSource)
}

export default copy
