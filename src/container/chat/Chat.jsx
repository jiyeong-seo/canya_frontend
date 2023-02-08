import { Box, Input, Button, Form, Text } from "../../components";
import { useEffect, useState } from "react";
import * as socket from "./socket";

const Chat = () => {
	// 채팅 Input value State
	const [inputValue, setInputValue] = useState("");
	// 채팅 메시지 State
	const [message, setMessage] = useState();
	console.log("message ==>", message);
	// 채팅 메시지 리스트 state
	const [chatList, setChatList] = useState([]);
	console.log("chatList ==>", chatList);
	// Token
	const Authorization = localStorage.getItem("Authorization");
	// Socket Header
	const header = {
		Authorization,
	};

	socket.startSocketConnect("/topic/greeatings/352cf21", header, newMessage => {
		console.log("newMessage =>", newMessage);
		setMessage(newMessage.content);
	});

	// 채팅 메시지 추가시 실행 Effect
	useEffect(() => {
		setChatList(prev => {
			return [...prev, message];
		});
	}, [message]);

	// CleanUp Function - 소켓 통신 종료
	useEffect(() => {
		return () => {
			socket.startSocketDisconnect();
		};
	}, []);

	return (
		<Box>
			<Box>
				{/* {chatList.map(item => {
					return <Text key={item}>{item}</Text>;
				})} */}
			</Box>
			<Form
				onSubmit={e => {
					e.preventDefault();
					socket.sendMessage({
						type: "MESSAGES",
						roomId: "352cf21",
						sender: "test",
						message: inputValue,
					});
					setInputValue("");
				}}
			>
				<Input
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					variant="cafe-review-title"
				/>
				<Button type="submit">챗팅전소옹</Button>
			</Form>
		</Box>
	);
};

export default Chat;
