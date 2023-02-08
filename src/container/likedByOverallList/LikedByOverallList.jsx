import {
	Box,
	FirstHeading,
	Button,
	Margin,
	Flex,
	Image,
	Hidden,
	DataList,
	DataTerm,
	DataDesc,
	ThirdHeading,
	Text,
} from "../../components";
import { useFetchList } from "../../querys/list";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
// 로딩 스피너
import spinner from "../../assets/icons/spinner.gif";

const LikedByOverallList = () => {
	// React Router
	const navigate = useNavigate();
	// 리스트 카테고리 param
	const { category } = useParams();

	// 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage } = useFetchList(
		category,
		3,
	);

	// observe
	const { ref, inView } = useInView();
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);
	// 카냐's Pick 버튼 리스트
	const overallList = [
		["전체", "전체리뷰"],
		["최신", "최신리뷰"],
		["인기", "인기리뷰"],
	];
	// 카냐's Pick state
	const [canyaPick, setCanyaPick] = useState(null);

	useEffect(() => {
		setCanyaPick(category);
	}, [category]);

	// 카냐's Pick 버튼 클릭 state
	const [currentPick, setCurrentPick] = useState([false, false, false]);
	// 카냐's Pick 게시글 변경 이벤트 핸들러
	const handleChangeCanyaPick = (category, idx) => {
		return e => {
			// console.log("data[e.target.vaule] =>", data[e.target.value]);
			setCanyaPick(data[e.target.value]);
			setCurrentPick(prev => {
				const newCurrentPick = [...prev].map((_, index) =>
					index === idx ? true : false,
				);
				return newCurrentPick;
			});
			navigate(`/overalls/${e.target.value}`);
		};
	};

	if (status === "loading")
		return (
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);
	if (status === "error") return <Box>Error</Box>;

	return (
		<Margin margin="170px 0 200px 0 ">
			<Box variant="container">
				<Box variant="overalls-nav">
					<Flex jc="space-between" ai="center">
						<Margin margin="0 57px 0 0">
							<FirstHeading variant="title">REVIEW☕️</FirstHeading>
						</Margin>
						<Box>
							<Flex gap="40px" jc="center" ai="center">
								{overallList.map((pick, idx) => {
									return (
										<Button
											key={pick}
											value={pick[0]}
											onClick={handleChangeCanyaPick(pick[0], idx)}
											variant="main-canya-pick-nav"
											pick={currentPick[idx]}
										>
											{pick[1]}
										</Button>
									);
								})}
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Margin margin="45px 0 0 0">
					<Flex jc="center" fw="wrap" gap="24px">
						{data?.pages.map((page, idx) => {
							return (
								<Fragment key={idx}>
									{page.list?.map((item, index) => {
										return (
											<Box
												variant="list-item"
												key={item.boardId}
												onClick={() => navigate(`/detail/post/${item.boardId}`)}
											>
												<Image
													src={item.imageUrl}
													alt="카페 이미지"
													variant="list-item"
												/>
												<Box variant="main-cany-pick-content-wrap">
													<Box variant="list-user-info-wrap">
														<Flex ai="center">
															<Flex ai="center" gap="7px">
																<Image
																	src={item.memberProfileImage}
																	alt="프로필 이미지"
																	variant="small-profile"
																/>
																<DataList>
																	<Hidden>
																		<DataTerm>닉네임</DataTerm>
																	</Hidden>
																	<DataDesc variant="main-canya-pick-content-nickname">
																		{item.memberNickname}
																	</DataDesc>
																</DataList>
															</Flex>
															<DataList>
																<Hidden>
																	<DataTerm>평균 평점</DataTerm>
																</Hidden>
																<DataDesc variant="list-content-rate">
																	{item.totalRating}
																</DataDesc>
															</DataList>
														</Flex>
													</Box>
													<Margin margin="12px 0">
														<ThirdHeading
															variant="list-title"
															className="ellipsis-sm"
														>
															{item.boardTitle}
														</ThirdHeading>
													</Margin>
													<Box variant="list-content-desc">
														<Text
															variant="main-canya-pick-content"
															className="ellipsis"
														>
															{item.boardContent}
														</Text>
													</Box>
													<Margin margin="15px 0 0 0">
														<Text variant="list-item-date">{item.date}</Text>
													</Margin>
												</Box>
											</Box>
										);
									})}
								</Fragment>
							);
						})}
					</Flex>
				</Margin>
				<Box>{isFetchingNextPage ? <Box></Box> : <Box ref={ref} />}</Box>
			</Box>
		</Margin>
	);
};

export default LikedByOverallList;
