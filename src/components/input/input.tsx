import { forwardRef } from "react";
import "./input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, ...rest }, ref) => {
		return (
			<div className="input-wrapper">
				<label className="label" htmlFor={rest.id}>
					{label}
				</label>
				<input {...rest} ref={ref} className="input-teste" />
				<span className={`error ${error ? "" : "none"}`}>{error}</span>
			</div>
		);
	},
);

Input.displayName = "input";
