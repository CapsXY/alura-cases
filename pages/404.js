import Link from "next/link";

export default function Page404() {
	return (
		<div>
			<h1>Você se perdeu no caminho! :( </h1>
			<Link href="/">Volte para a Home.</Link>
		</div>
	);
}
