
//pour garder la flexibiliter des fonction je ne vais pas 
//implementer cette interface . 
//je la garde au cas ou je trouve une solution
interface score {
    date: Date,
    time: number
}


//je l ajoute ici pour silence le warning de non utilisation de score
function setLocal(key: string, params: any | score) {
    const tab = [params]
    localStorage.setItem(key, JSON.stringify(tab));
}

function addLocal(key: string, params: any[]) {
    if (!localStorage.getItem(key)) {
        setLocal(key, params)
        return
    }
    let tab = Array(...JSON.parse(localStorage.getItem(key)!))
    tab.push(params)
    localStorage.setItem(key, JSON.stringify(tab));
}

function getLocal(key: string): any[] {
    return JSON.parse(localStorage.getItem(key)!)
}

export { setLocal, addLocal, getLocal }