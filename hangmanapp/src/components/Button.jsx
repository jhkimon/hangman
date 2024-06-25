import styled from 'styled-components';

const Malatang = styled.button`
    padding: 20px 40px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #f0f0f0;
    cursor: pointer;
`;

function Button(props) {
    return <Malatang onClick={props.onClick}>{props.letter}</Malatang>;

}

export default Button;
