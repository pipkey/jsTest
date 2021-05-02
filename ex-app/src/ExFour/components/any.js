let anyArr = []
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
     console.log(`${key}: ${localStorage.getItem(key)}`);
    anyArr.push({ key: localStorage.getItem(key) })
}
let [value, setValue] = useState("")
// let [LS, setLS] = useState("")
let [seen, setSeen] = useState('')
// let [extencion, setExtention] = useState('')

const saveToLS = (key, state) => {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
    // setArr([...arr, {id: key, value:stateAsString}])
}
const removeFromLS = (key) => {
    localStorage.removeItem(key)
}
const restoreLS = (key, defaultState) => {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString);
    return defaultState
}

const setToUl = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        // console.log(`${key}: ${localStorage.getItem(key)}`);
        anyArr.push({ key: localStorage.getItem(key) })
    }
}

// console.log(localStorage.getItem()



let val = localStorage.key(i)
// let key = Object.entries(localStorage[i])
keysVal.push({ key:  localStorage.getItem(val) })