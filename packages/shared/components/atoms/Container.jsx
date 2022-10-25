import styled from  'styled-components';


function Container(props){
    return(<ContainerBox>
        {props.children}
    </ContainerBox>)
}

const ContainerBox =  styled.div`
    display: flex;
    flex-direction: column;
    width: 1230px;
    justify-content: center;
    align-items: center;
`
export default Container;