import {Button,Container} from 'shared';
import {useAtom,Provider} from 'jotai';
import mainAtom from '../atom/mainAtom';
import styled from  'styled-components';

function MainPage() {
  const [count ,setCount] = useAtom(mainAtom)
  return (
    <Provider>
      <Container>
        <CountText>{count}</CountText>
        <CountBox>
          <Button onClick={()=>setCount(count+1)}>plus</Button>
          <Button onClick={()=>setCount(count-1)}>minus</Button>
        </CountBox>
      </Container>
    </Provider>
    )
}
const CountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CountText = styled.p`
  font-size: 50px;
`


export default MainPage;