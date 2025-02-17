import { Address } from "react-daum-postcode";

export interface AddressInputProps {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  readOnly?: boolean;
  isTextArea?: boolean;
  ref?: React.RefObject<HTMLInputElement | null>;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface PostcodeSearchProps {
  postcode: string;
  onComplete: (data: Address) => void;
}

export interface PostcodeData {
  postcode: string;
  address: string;
  extraAddress: string;
}
