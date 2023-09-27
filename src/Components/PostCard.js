import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <PostContainer>
      <Detail>
        <img src="/images/my.jpg" alt="" />
        <Name>
          <span>Name</span>
          <p>details</p>
          <p>time</p>
        </Name>
      </Detail>
      <Description>Here goes the description about the post</Description>
      <SharedImage>
        <a>
          <img src="/images/miamido1.jpg" alt="" />
        </a>
      </SharedImage>


      <Reactioncount>
        <button>
          <img src="/images/Like.png"/>
          <img src="/images/down-icon.svg"/>
          <span>70</span>



        </button>
        <button><span>commnets</span></button>

      </Reactioncount>


      <ReactionButtons>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </ReactionButtons>
      <CommentSection>{/* Add comment components here */}</CommentSection>
    </PostContainer>
  );
}

export default Post;

const Name = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  span {
    color: black;
    font-size: 30px;
    font-style: italic;
  }
`;

const PostContainer = styled.div`
  display: flex;
  border-color: black;
  border: solid;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
  border: 12px;
  flex-direction: column;
  color: #958b7b;
  margin-top: 15px;
  margin-bottom: 15px;
  margin: 0 0 8px;
  background: white;
  img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin-top: 10px;
    margin-left: 10px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;
const Description = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  color: black;
  margin-bottom: 10px;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;

  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    max-height: 500px;
  }
`;

const ReactionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  padding-bottom: 15px;
  button {
    padding: 8px 16px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const CommentSection = styled.div`
  /* Style your comment section as needed */
`;
const Reactioncount=styled.div`
display:flex;
margin-left: 25px;
margin-bottom: 5px;

button{
  display:flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 10px;
  padding:15px;
  border: none;
  background:transparent;

  img{
    max-width: 45px;
    background:transparent;
    background-color: none;
  }
}

`