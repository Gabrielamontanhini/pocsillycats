import { deleteThisCat, editSilly, getCats, postSillyCat } from "../repositories/sillycats-repository"

function create(catName: string) {
return postSillyCat(catName)
}
function get() {
return getCats()
}
async function deleteCat(id: number){
const result = await deleteThisCat(id)
return result 
}
function edit(iq: number, id: number) {
return editSilly(iq, id)
}
const sillyServices = { create, get, deleteCat, edit }

export default sillyServices