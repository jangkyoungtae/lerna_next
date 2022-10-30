import {Button,Container} from 'shared';
import {useAtom} from 'jotai';
import mainAtom from '../atom/mainAtom';
import styled from  'styled-components';
import theme from '../styles/theme';
import { useEffect } from 'react';

function MainPage(props) {
  const [count ,setCount] = useAtom(mainAtom);

  useEffect(()=>{
    setCount(props.data);
  },[]);

  return (    
      <Container>
        <CountText>{props.data+ " : " +count}</CountText>
        <CountBox>
          <Button theme={theme} onClick={()=>setCount(count+1)}>plus</Button>
          <Button theme={theme} onClick={()=>setCount(count-1)}>minus</Button>
        </CountBox>
      </Container>
    )
}
const CountBox = styled.div`
  background-color: ${theme => theme.theme.lightversion.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`
const CountText = styled.p`
  font-size: ${theme => theme.theme.fontSize.lg};
`

const 염점삼초뒤실행 = async()=>{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(30)
    }, 300);
  });
}
export async function  getServerSideProps () {
  const data = await  염점삼초뒤실행();
  return {
    props: {data:data}, // will be passed to the page component as props
  }
}

export default MainPage;