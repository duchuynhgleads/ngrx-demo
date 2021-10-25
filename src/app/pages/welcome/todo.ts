export interface Todo {
  id?: number,
  title?: string,
  status?: Status
}

export type Status = 'Done' | 'Pending' | 'Processing';
