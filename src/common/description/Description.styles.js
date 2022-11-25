import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import canya_item_star from "../../assets/icons/canya_item_star.png";
import canya_item_comment from "../../assets/icons/canya_item_comment.png";
import canya_item_heart from "../../assets/icons/canya_item_heart.png";

export const DataList = styled.dl`
	${({ variant }) => {
		switch (variant) {
			case "main-canya-pick-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 600;
					color: ${({ theme }) => theme.colors.gray};
				`;
			case "main-new-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.regular};
					font-weight: 400;
				`;
			case "main-all-item-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 600;
					color: ${({ theme }) => theme.colors.dark_gray};
				`;
			default:
				break;
		}
	}}
`;

export const DataTerm = styled.dt`
	${({ variant }) => {
		switch (variant) {
			default:
				break;
		}
	}}
`;

export const DataDesc = styled.dd`
	${({ variant }) => {
		switch (variant) {
			case "main-canya-pick-content-nickname":
				return css`
					font-weight: 600;
				`;
			case "main-canya-pick-content-rate":
				return css`
					&::before {
						content: "";
						background-image: url(${canya_item_star});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(18)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 4px;
						left: -3px;
					}
				`;
			case "main-canya-pick-content-heart":
				return css`
					&::before {
						content: "";
						background-image: url(${canya_item_heart});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(20)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 20px;
						left: -25px;
					}
				`;
			case "main-canya-pick-content-comment":
				return css`
					&::before {
						content: "";
						background-image: url(${canya_item_comment});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(20)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 20px;
						left: -24px;
					}
				`;
			case "main-all-item-rate":
				return css`
					text-align: center;
					font-size: ${({ theme }) => theme.fontSizes.xxl};
					&::before {
						content: "";
						background-image: url(${canya_item_star});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(26)};
						height: ${calcRem(26)};
						display: inline-block;
						position: relative;
						top: 4px;
						left: -3px;
					}
				`;
			default:
				break;
		}
	}}
`;
