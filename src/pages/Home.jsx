import Header from "../components/Header";
import Todo from "../components/Todo";

const Home = () => {
  return (
    <>
      <Header linkName="회원가입/로그인" url="/auth" />
      <Todo />
    </>
  );
};

export default Home;
