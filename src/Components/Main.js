import styled from "styled-components";
import Post from "./PostCard";
const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <Profile>
          <img src="/images/my.jpg" alt="" />

          <input type="text" placeholder="Write somthing" />
        </Profile>
        <Second>

          <Postoption>
            <img src="/images/my.jpg" alt="" />
            <span>Media</span>
          </Postoption>

          <Postoption>
            <img src="/images/my.jpg" alt="" />
            <span>photo</span>
          </Postoption>

          <Postoption>
            <img src="/images/my.jpg" alt="" />
            <span>new artical</span>
          </Postoption>
        </Second>
      </ShareBox>
      <Post />
      <Post />
    </Container>
  );
};
export default Main;
const Container = styled.div``;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;

  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  @media screen and (max-width: 768px) {
    /* Media query styles for screens with a maximum width of 768px */

    justify-content: space-between;

    input {
      margin-top: 0; /* Remove top margin for input field */
    }
  }
`;
const Profile = styled.div`
  display: flex;

  img {
    margin-top: 10px;
    margin-left: 10px;
    width: 100%;
    height: 100%;

    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  input {
    border-radius: 25px;
    padding: 15px;
    margin-top: 10px;
    width: 80%;
    margin-left: 15px;
    box-shadow: none;

    font-weight: 400;
    font-size: 14px;

    border-color: #dce6f1;
  }
`;
const Second = styled.div`
  display: flex;

  padding-bottom: 10px;

  margin-left: 50px;
  @media screen and (max-width: 768px) {
    /* Media query styles for screens with a maximum width of 768px */
    margin-left: 0;
  }
`;
const Postoption = styled.div`
  cursor: pointer;
  margin-top: 8px;
  
  padding: 10px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 120px;
    margin-left: 0;
    padding: 0;
    img {
      margin-left: 0;
      border: dotted;
      justify-content: left;
      align-items: left;
      padding: 0;
    }

    /* Media query styles for screens with a maximum width of 768px */

    span {
      margin: 0;
      text-align: left;
      text-decoration: none; /* Remove top margin for input field */
    }
  }

  display: flex;
  &:hover {
    background-color: #dcdcdc;
  }

  img {
    width: 30px;
    margin-left: 0px;
  }
  span {
    margin-left: 25px;
    margin-right: 50px;
  }
`;
