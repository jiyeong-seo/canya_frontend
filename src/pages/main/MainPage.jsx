import { Box, Main } from "../../components";
import { MainCarousel, MainList, MainNavButtons } from "../../container/main";
import { Default, Mobile } from "../../assets/mediaQuery";

function MainPage() {
	return (
		<>
			<Default>
				<Main>
					<MainCarousel />
					<MainNavButtons />
					<Box variant="container">
						<MainList />
					</Box>
				</Main>
			</Default>
			<Mobile></Mobile>
		</>
	);
}

export default MainPage;
