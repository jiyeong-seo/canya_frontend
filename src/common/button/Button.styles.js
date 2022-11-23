import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import search from "../../assets/icons/search.png";
import { hot, all, recent } from "../../assets/icons/overalls";

export const Button = styled.button`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						width: ${calcRem(472)};
						height: 60px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 700;
						margin-top: 92px;
					`;
				case "join-duplicate":
					return css`
						width: 100%;
						max-width: ${calcRem(97)};
						height: 60px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						font-weight: 700;
						text-align: center;
					`;
				/* 메인페이지 */
				case "main-login":
					return css`
						width: 100%;
						max-width: ${calcRem(99)};
						height: 38px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 50px;
						font-size: ${({ theme }) => theme.fontSizes.base};
						border: 1px solid ${({ theme }) => theme.colors.line};
					`;
				case "main-search":
					return css`
						position: absolute;
						top: 11px;
						right: 42px;
						width: ${calcRem(21)};
						height: ${calcRem(21)};
						background-color: ${({ theme }) => theme.colors.white};
						background-image: url(${search});
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
					`;
				case "main-cateory":
					return css`
						width: ${calcRem(90)};
						height: ${calcRem(129)};
						font-size: ${({ theme }) => theme.fontSizes.base};
					`;
				default:
					break;
			}
		}}
	}
`;
