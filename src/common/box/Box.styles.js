import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Box = styled.div`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "container":
					return css`
						max-width: 1136px !important;
						margin: 0 auto;
						background-color: antiquewhite;
					`;
				/* 리뷰 작성 페이지 */
				case "cafe-review-rating-box":
					return css`
						margin: 0 auto;
						& svg {
							color: #c4c4c4;
							cursor: pointer;
						}
						:hover svg {
							color: #fdd237;
						}
						& svg:hover ~ svg {
							color: #c4c4c4;
						}
						.active {
							color: #fdd237;
						}
					`;
				/* 상세 페이지 */
				case "detail-rating-box":
					return css`
						margin: 0 auto;
						& svg {
							color: #c4c4c4;
						}
						.active {
							color: #fdd237;
						}
					`;
				case "detail-heart-count":
					return css`
						margin: 0 auto;
						& svg {
							color: #ff7777;
						}
					`;
				case "detail-heart":
					return css`
						margin: 0 auto;
						& svg {
							color: #c4c4c4;
						}
						.liked {
							color: #ff7777;
						}
					`;
				/* 메인 페이지 */
				// navigation bar
				case "main-nav-wraper":
					return css`
						width: 92%;
						max-width: ${calcRem(1400)};
						height: 100%;
						margin: 0 auto;
					`;
				case "nav-container":
					return css`
						width: 100%;
						max-width: 1136px !important;
						margin: 0 10px;
					`;
				case "main-logo":
					return css`
						width: 10%;
						max-width: ${calcRem(120)};
						height: 50px;
					`;
				case "main-user-info":
					return css`
						width: 10%;
						max-width: ${calcRem(130)};
					`;
				case "main-search":
					return css`
						position: relative;
						width: 100%;
						max-width: ${calcRem(967)};
						margin: 0 auto;
					`;
				case "main-search-wraper":
					return css`
						position: absolute;
						left: 10px;
						width: 19%;
						max-width: ${calcRem(222)};
					`;
				case "main-selcet-wraper":
					return css`
						position: relative;
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 20px;
						background-color: ${({ theme }) => theme.colors.white};
					`;
				case "main-selcet-preview-wraper":
					return css`
						padding: 14px 0 14px 0;
					`;
				case "select-icon-wraper":
					return css`
						position: absolute;
						padding: 10px 10px 10px 71%;
						top: 0;
						right: 0;
						& svg {
						}
					`;
				// case "":
				// 	return css``;
				// case "":
				// 	return css``;

				/* 메인리스트, 카테고리별 리스트 */
				case "main-best-item":
					return css`
						width: 400px;
						height: 200px;
						background-image: url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
					`;
				case "main-new-item":
					return css`
						width: 200px;
						height: 200px;
						border-radius: 50%;
						background-image: url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
					`;
				case "main-all-item":
					return css`
						width: 300px;
						height: 200px;
						background-image: url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
					`;
				case "list-item":
					return css`
						width: 300px;
						height: 400px;
						background-color: blueviolet;
						margin: 10px;
					`;
				case "list-target":
					return css`
						width: 300px;
						height: 400px;
						background-color: pink;
						margin: 10px;
					`;
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						width: 557px;
						height: 700px;
						position: absolute;
						top: 163px;
						left: 1103px;
						background-color: ${({ theme }) => theme.colors.white};
						border-radius: 5px;
						align-items: center;
						/* margin: 163px 240px 217px 1103px;				 */
					`;
				case "join-info":
					return css`
						width: 557px;
						margin-bottom: 136px;
						display: flex;
					`;
				case "join-box":
					return css`
						width: 557px;
						height: 700px;
					`;
				default:
					break;
			}
		}}
	}
`;
