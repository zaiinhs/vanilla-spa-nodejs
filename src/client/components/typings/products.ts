export interface DataState {
  inputValue: string;
  path: string;
  products?: [];
  limitItem?: number;
  skipItem?: number;
  total?: number;
  isLoading?: boolean;
  errorMessage?: string;
  inputProducts?: [];
  inputPrice?: string;
  inputName?: string;
  inputValueFavorite?: string;
  contacts?: [];
  favoriteContacts?: [];
}

export type LinkProps = {
  href: string;
  label: string;
};
