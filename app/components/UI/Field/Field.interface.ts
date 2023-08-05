import { CSSProperties, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFieldProps {
  placeholder: string;
  title: string;
  error?: FieldError | undefined;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
export interface IField extends TypeInputPropsField {}

export interface ITextareaProps {
  placeholder: string;
  style?: CSSProperties;
  title: string;
  error?: FieldError | undefined;

}
type TypeTextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & ITextareaProps;
export interface ITextarea extends TypeTextareaProps {}
