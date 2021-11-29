import { GetStaticProps } from "next";
import FrequentQuestions from "@partials/index/_frequent-questions";
import Presentation from "@partials/index/_presentation";
import Advantages from "@partials/index/_advantages";
export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			title: 'Meu Titulo',
			
		},
	}
}

export default function Index() {
	return <div>
		<Presentation />
		<Advantages/>
		<FrequentQuestions/>
	</div>;
}


