export interface IInput {
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  classN: string;
  min?: number;
  max?: number;
}