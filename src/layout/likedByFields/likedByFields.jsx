import { Box, FirstHeading } from "../../common";
import { Outlet } from "react-router-dom";

const likedByFields = () => {
	return (
		<Box>
			<FirstHeading>별점리스트</FirstHeading>
			<Outlet></Outlet>
		</Box>
	);
};

export default likedByFields;
