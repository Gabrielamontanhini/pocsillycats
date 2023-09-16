
import { db } from "../database/database-connection";


export async function postSillyCat(catName: string){
    const result = await db.query(`INSERT INTO sillycats ("catName", "iq") VALUES ($1, FLOOR(RANDOM() * 10) + 1);`, [catName])
    return result
}

export async function getCats(){
    const result = await db.query(`SELECT * FROM sillycats;`)
    return result
}
export async function deleteThisCat(id:number){
   
    const result = await db.query(`DELETE FROM sillycats WHERE id = $1;`, [id])
    return result
}

export async function editSilly(iq: number, id:number){
    const result = await db.query(`UPDATE sillycats
    SET iq = $1
    WHERE id = $2;`, [iq, id])
    return result
}
