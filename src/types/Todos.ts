export interface Todos {
  [key: number]: number;
  id: number;
  title: string;
  description: string;
  status: '1' | '2' | '3';
}
