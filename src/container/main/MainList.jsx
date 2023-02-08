import { useEffect, useState } from "react";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../container/main";
import {
	ErrorExceptionHandler,
	ExceptionHandler,
} from "../../container/globalException";
import { Default, Mobile } from "../../assets/mediaQuery";
import Pick from "../../container/main/pick";

const MainList = () => {
	// 전체 게시글 요청 hook
	const { data: mainPosts, isError, isLoading } = useFetchPosts();

	// 카냐's Pick state
	const [canyaPick, setCanyaPick] = useState(null);

	useEffect(() => {
		setCanyaPick(mainPosts?.coffeePick);
	}, [mainPosts]);

	if (isLoading) return <ExceptionHandler />;
	if (isError) return <ErrorExceptionHandler />;

	return (
		<>
			{mainPosts && (
				<>
					<Default>
						<MainCanyaPick
							picks={canyaPick}
							setCanyaPick={setCanyaPick}
							mainPosts={mainPosts}
						/>
						<MainBestList bestDto={mainPosts.bestDto} />
						<MainNewList newDto={mainPosts.newDto} />
						<MainAllList allDto={mainPosts.allDto} />
					</Default>
					<Mobile>
						<Pick />
					</Mobile>
				</>
			)}
		</>
	);
};

export default MainList;
