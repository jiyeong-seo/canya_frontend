import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Image = styled.img`
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	border-radius: ${({ bd }) => (bd ? bd : "")};

	${({ variant }) => {
		switch (variant) {
			/* 상세 페이지 */
			case "detail-review-profile":
				return css`
					width: 50px;
					height: 50px;
					object-fit: cover;
					object-position: center;
				`;
			case "detail-review":
				return css`
					width: 300px;
					height: 300px;
					object-fit: cover;
					object-position: center;
				`;
			/* 메인 페이지 */
			case "main-canya-pick":
				return css`
					width: 100%;
					height: ${calcRem(247)};
					object-fit: cover;
					object-position: center;
				`;
			case "main-canya-pick-profile":
				return css`
					width: 37px;
					height: 37px;
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				`;
			case "main-category":
				return css`
					width: 100%;
					max-height: 90px;
					border-radius: 50%;
					border: 1px solid ${({ theme }) => theme.colors.line};
					padding: 22%;
					background-color: ${({ theme }) => theme.colors.white};
					transition: border 200ms;
					&:hover {
						border: 3px solid ${({ theme }) => theme.colors.main};
					}
				`;
			/* 글쓰기 페이지 */
			case "cafe-review-thumbnail":
				return css`
					display: block;
					width: 100%;
					max-width: ${calcRem(215)};
					height: ${calcRem(215)};
					border-radius: 5px;
				`;
			/* 마이 페이지 */
			case "mypage-profile":
				return css`
					width: 128px;
					height: 128px;
					border-radius: 50%;
					border: 5px solid #f6cd3c;
					object-fit: cover;
					object-position: center;
				`;
			case "mypage-post":
				return css`
					width: ${calcRem(266)};
					height: ${calcRem(266)};
					border-radius: 5%;
				`;
			case "mypage":
				return css`
					width: 100%;
					height: 429px;
					object-fit: cover;
					object-position: center;
				`;
			case "profile-edit":
				return css`
					&:hover {
						cursor: pointer;
						filter: invert(60%) sepia(41%) saturate(4200%) hue-rotate(240deg)
							brightness(150%) contrast(60%);
					}
				`;
			case "myboard-post":
				return css`
					width: ${calcRem(168)};
					height: ${calcRem(168)};
					border-radius: 5%;
				`;
			case "mini-edit":
				return css`
					&:hover {
						filter: invert(60%) sepia(41%) saturate(4200%) hue-rotate(240deg)
							brightness(150%) contrast(60%);
					}
				`;
			default:
				break;
		}
	}}
`;
