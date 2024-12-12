import { useForm } from "react-hook-form";

interface dataType {
	name: string;
	password: string;
	email: string;
}

export function Form1() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<dataType>();

	const onSubmit = (data: dataType) => {
		return console.log(data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flexdiv ">
					<label htmlFor="name">Nome</label>
					<input
						type="text"
						id="name"
						className="input"
						{...register("name", {
							required: "o nome é obrigatorio",
							minLength: {
								value: 3,
								message: "O nome deve ter pelo menos 3 caracteres",
							},
						})}
					/>
					{errors.name && <span className="error">{errors.name.message}</span>}
				</div>
				<div className="flexdiv margin">
					<label htmlFor="password">Senha</label>
					<input
						type="password"
						id="password"
						className="input"
						{...register("password", {
							required: "A senha é obrigatoria",
							minLength: {
								value: 5,
								message: "A senha deve ter pelo menos 5 Caracteres",
							},
						})}
					/>
					{errors.password && (
						<p className="error">{errors.password.message}</p>
					)}
				</div>

				<div className="flexdiv margin">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						className="input"
						{...register("email", {
							required: "o email é obrigatorio",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: "Digite um email válido",
							},
						})}
					/>
					{errors?.email?.type && (
						<p className="error">{errors?.email?.message}</p>
					)}
				</div>
				<button type="submit" className="margin">
					Enviar
				</button>
			</form>
		</>
	);
}
