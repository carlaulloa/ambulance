export interface UserEntity {
  id: number;
  nombre: string,
  correo: string,
  contrasena: string,
  activo: boolean
  roles: any[]
}