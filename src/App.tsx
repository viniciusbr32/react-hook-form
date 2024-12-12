import { Input } from "./components/input/input";
import "./form.css";
import { useForm } from "react-hook-form";

interface dataProps {
	name: string;
	email: string;
	password: string;
}

function App() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<dataProps>();

	const onSubmit = (data: dataProps) => {
		return console.log(data);
	};

	return (
		<>
			<div className="center">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						label="nome"
						id="name"
						placeholder="Digite seu nome"
						type="text"
						error={errors?.name?.message}
						{...register("name", {
							required: "Campo obrigatorio",
							minLength: {
								value: 5,
								message: "O nome precisa ter no minimo 5 caracteres",
							},
						})}
					/>

					<Input
						label="Senha"
						id="password"
						placeholder="Digite sua senha"
						type="password"
						error={errors?.password?.message}
						{...register("password", {
							required: "Campo obrigatorio",
							minLength: { value: 5, message: "minimo 5 caracteres" },
						})}
					/>

					<Input
						label="email"
						id="email"
						placeholder="Digite seu email"
						type="text"
						error={errors?.email?.message}
						{...register("email", {
							required: "Campo obrigatorio",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: "Digite um email válido",
							},
						})}
					/>

					<button type="submit">Enviar</button>
				</form>
			</div>
		</>
	);
}

export default App;
