export interface Todos {
  readonly id: string;
  title: string;
  description: string;
  status: '0' | '1' | '2';
}
