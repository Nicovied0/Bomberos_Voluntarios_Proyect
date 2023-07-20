// publicacion.inteface.ts

export interface Publicacion {
  _id: string;
  actived: boolean;
  fechaCreacion: string;
  __v: number;
  iframeLink: string;
  iframeLink300?: string; // Agrega la propiedad opcional iframeLink300
  iframeLink400?: string; // Agrega la propiedad opcional iframeLink400
  iframeLink500?: string; // Agrega la propiedad opcional iframeLink500
}
