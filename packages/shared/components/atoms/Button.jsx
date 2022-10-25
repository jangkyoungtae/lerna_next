import styled from  'styled-components';


function Button(props){
    return (
        <ButtonContainer                    
            {...props}
        >
            <p>{props.children}</p>
        </ButtonContainer>
    )
}

export default Button;

const ButtonContainer = styled.button` 
    padding: 5px 15px;
    background-color: red;
`;