import styled from "styled-components";
import Header from "./Header";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home=(props)=>{
    return (
        <>
        <Header/>
        <Container>
        
        <Section>
            <h5>
                <a>Hiring in a hurry?</a>
            </h5>
            <p>
                Find talented props in record time with and keep business moving.
            </p>
            <p>
                Find talented props in record time with and keep business moving.
            </p>
        </Section>
        <Layout>
            <Leftside/>
            <Main/>
            <Rightside/>


        </Layout>

    </Container>
        
        </>
    
    )



};   
export default Home;
const Container=styled.div`
padding-top: 52px;
max-width:100%

`;
const Content=styled.div`
max-width: 1128px;
margin: auto;
margin-right: auto;
`
const Section=styled.div`
min-height: 50px;
padding: 16px;

box-sizing: content-box;
text-align: center;
display: flex;
justify-content: center;
text-decoration: underline;
h5{
    color: #0a66c2;
    font-size: 14px;
    a{
        font-weight: 700;
    }
}
p{
    font-size: 14px;
    color:#434649;
    font-weight: 600;
}
@media (max-width:768px) {
    flex-direction: column;
    padding: 0 5px;
    
    
}
`
const Layout=styled.div`
display: grid;
grid-template-areas:"leftside main rightside";
grid-template-columns: minmax(0 ,5fr) minmax(0 ,12fr) minmax(300px,7fr);
column-gap: 25px;
row-gap: 25px;

margin:25px 0;
@media (max-width:768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
}
`