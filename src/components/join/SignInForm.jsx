import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "../../common";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  __requestSignIn,
  resetError,
} from "../../redux/modules/join/joinSlice";
import { useEffect } from "react";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //아이디와 비밀번호가 일치하지 않을 때 redux
  const errorData = useSelector((state) => state.join.error);

  //아이디와 비밀번호 성공시 redux
  const { statusCode } = useSelector((state) => state.join);

  //React Hook Form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  //아이디와 비밀번호가 일치하지 않을 때
  useEffect(() => {
    if (errorData) {
      if (errorData?.status === 401) {
        alert("아이디와 비밀번호가 일치하지않습니다.");
      }
    }
    dispatch(resetError());
  }, [errorData, errorData?.status, dispatch]);

  //로그인 성공시
  useEffect(() => {
    if (statusCode === 200) {
      navigate("/");
    }
  });

  return (
    <>
      {/* <Form onSubmit={handleSubmit(value => {
      console.log('value =>', value)
      const { id, password } = value;
      dispatch(__requestSignIn({memberName: id, password}))
    })}>
     <Input {...register("id")}/>
     <Input {...register("password")}/>
     <Button>로그인</Button>
    </Form>   */}
      <Form
        onSubmit={handleSubmit((value) => {
          console.log("value =>", value);
          const { memberName, password } = value;
          dispatch(__requestSignIn({ memberName, password }));
        })}
      >
        <p>ID</p>
        <Input
          placeholder="아이디를 입력해주세요."
          {...register("memberName", { required: true })}
        />
        {errors.memberName && errors.memberName.type === "required" ? (
          <p>아이디를 입력해주세요.</p>
        ) : (
          ""
        )}
        <p>비밀번호</p>
        <Input
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && errors.password.type === "required" ? (
          <p>비밀번호를 입력해주세요.</p>
        ) : (
          ""
        )}
        <Button>로그인</Button>
      </Form>
      <span
        onClick={() => {
          navigate("/register");
        }}
      >
        회원가입
      </span>
    </>
  );
};

export default SigninForm;
