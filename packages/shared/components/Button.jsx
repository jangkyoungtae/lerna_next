import styled from  'styled-components';
import theme from '../../admin/src/styles/theme';


function Button(props){
    console.log(props);
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
    font-size: ${theme => theme.theme.fontSize.md};
    background-color: ${theme => theme.theme.lightversion.primary};
`;