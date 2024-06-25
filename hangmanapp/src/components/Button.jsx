import styled from 'styled-components';

styled.button`
    padding: 20px 40px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #f0f0f0;
`



function Button (props) {
    return (
        <button >
            {props.letter}
        </button>
    )
}

export default Button;