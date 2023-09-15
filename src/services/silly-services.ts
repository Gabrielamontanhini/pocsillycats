import { deleteThisCat, editSilly, getCats, postSillyCat } from "../repositories/sillycats-repository"

function create(catName: string) {
return postSillyCat(catName)
}
function get() {
return getCats()
}
function  deleteCat(id: number){
return deleteThisCat(id)
}
function edit(iq: number, id: number) {
return editSilly(iq, id)
}
const sillyServices = { create, get, deleteCat, edit }