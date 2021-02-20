import { MedicEntity } from "../domain/medic.entity"
import { MedicRequest } from "./medic-request"

export const mapping = (data: MedicRequest | MedicRequest[]): MedicEntity
  | MedicEntity[] => {
    if(Array.isArray(data)){
      const medics: MedicEntity[] = data.map((el: MedicRequest) => {
        return {
          id: el.id,
          name: el.nombre,
          lastname: el.segundo_nombre,
          surname: el.segundo_nombre,
          cmp: el.cmp,
          dni: el.dni,
          isActive: el.activo,
          email: el.correo,
          photo: el.foto
        } 
      });
      return medics;
    } else {
      const medicEntity: MedicEntity = {
        id: data.id,
        name: data.nombre,
        lastname: data.segundo_nombre,
        surname: data.segundo_nombre,
        cmp: data.cmp,
        dni: data.dni,
        isActive: data.activo,
        email: data.correo,
        photo: data.foto
      }
      return medicEntity; 
    }
}