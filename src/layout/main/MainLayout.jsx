import { Margin } from "../../components";
import { MainNav, MainFooter, MainSearchList } from "../../container/main";
import { useFetchSearchList } from "../../querys/list";
import { useState, useEffect } from "react";
import {
	ErrorExceptionHandler,
	ExceptionHandler,
} from "../../container/globalException";
import { useInView } from "react-intersection-observer";
import { Outlet } from "react-router-dom";
import { Default, Mobile } from "../../assets/mediaQuery";

const MainLayout = () => {
	// 검색 값 state
	const [submitValues, setSubmitValues] = useState({
		category: "",
		keyword: "",
	});
	// 메인 페이지 초기화 state (검색 전 메인 화면)
	const [resetMain, setResetMain] = useState(true);
	// 검색 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage, error, refetch } =
		useFetchSearchList(submitValues);

	useEffect(() => {
		if (submitValues.category) {
			refetch();
		}
	}, [submitValues, refetch]);
	// observe
	const { inView } = useInView();
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);

	if (status === "error")
		return (
			<>
				<Default>
					<MainNav
						setResetMain={setResetMain}
						setSubmitValues={setSubmitValues}
					/>
					<ErrorExceptionHandler />
					<MainFooter />
				</Default>
			</>
		);

	return (
		<>
			<Default>
				<MainNav
					setResetMain={setResetMain}
					setSubmitValues={setSubmitValues}
				/>
				<Margin margin="78px 0 0 0">
					{status === "loading" && !resetMain ? <ExceptionHandler /> : ""}
					{data && !resetMain ? (
						<MainSearchList data={data} setResetMain={setResetMain} />
					) : (
						<Outlet></Outlet>
					)}
					<MainFooter />
				</Margin>
			</Default>
			<Mobile>ff</Mobile>
		</>
	);
};

export default MainLayout;
