export interface Todos {
  [key: number]: number;
  id: string;
  title: string;
  description: string;
  status: '0' | '1' | '2';
}
