export interface Todos {
  // [key: number]: number;
  readonly id: string;
  title: string;
  description: string;
  status: '0' | '1' | '2';
}
