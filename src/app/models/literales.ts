export interface UrlTitle{
  title: string,
  url: string
}

export interface ImgGalery{
  id: number,
  title: string,
  url: string,
  descripcion: string,
  tipo: number
}

export interface TypeGalery{
  id: number,
  descripcion: string
}

export interface ContenidoCuerpo{
  title: string,
  descripcion: string,
  url?: string
}

export interface InfoPersonal{
  nombre: string,
  apellido: string,
  movil: string,
  url: string
}

