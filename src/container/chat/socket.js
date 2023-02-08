import sockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const BASE_URL = process.env.REACT_APP_SERVER;
const socket = new sockJS(`${BASE_URL}/canya`);
// stomp 프로토콜 위에서 sockJS가 작동되도록 클라이언트 생성
const stompClient = Stomp.over(socket);
// 채팅방 id
let roomId = "";

// – app: WebSocket으로의 앱으로 접속을 위한 포인트가 되며 메시지를 실제로 보낼 때 사용된다
// – topic: 일 대 다수의 커넥션에서 메시지를 전송한다
// – queue: 일 대 일의 커넥션에서 메시지를 전송한다
// – user: 메시지를 보내기 위한 사용자를 특정한다

// 방 id 받기
export const receiveRoomId = id => {
	roomId = id;
};

// 웹소켓 연결 요청 & 구독 요청
export const startSocketConnect = (
	roomComponentAddress,
	headers = {},
	callback,
	// 추후 순서 문의드리기
) => {
	let newMessage = "";
	// 서버에 연결하기 위해 서버에 Connect 프레임 전송
	stompClient.connect(headers, frame => {
		// 연결 완료시 실행될 콜백
		console.log("stompClient.connect 성공! frame ====>", frame);
		// 메세지를 보내거나 받을 특정 URL 구독 - roomComponentAddress: 구독할 URL
		stompClient.subscribe(roomComponentAddress, data => {
			newMessage = JSON.parse(data.body);
			console.log("stompClient subscribe 성공!!  data ===> ", data);
			// 연결 성공시 콜백 호출 -> 메세지를 받는 콜백
			callback(newMessage);
		});
	});
	return newMessage;
};

export const sendMessage = (messageObject, headers = {}) => {
	// 메세지 전송을 위한 SEND 프레임 전송
	// 1: 프레임 전송시 필요한 URI
	// 2: 헤더
	// 3: 프레임 전송시 전달될 Body 데이터 - 메세지 전송
	console.log("messageObject ===>", messageObject);

	stompClient.send(
		"/app/hello/352cf21",
		headers,
		JSON.stringify(messageObject),
	);
};

export const startSocketDisconnect = () => {
	stompClient.disconnect();
	console.log("startSocketDisconnect 성공!");
};
