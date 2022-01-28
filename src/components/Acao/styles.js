import styled from "styled-components/native";

export const Container = styled.View`
background-color:hsl(0,0%,90%);
margin-bottom: 15px;
flex: 1;
`;

export const AreaInput = styled.View`
margin: 10px;
margin-top: 2px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#131313'
})`

width: 100%;
font-size: 16px;
color: #131313;
padding-left: 15px;
font-weight: bold;
padding-bottom: 5px;
padding-top: 0%;

`;
export const ContainerTexto = styled.View`
flex-direction: row;
background-color:hsl(0,0%,90%);
align-items: flex-start;
margin-bottom: 3px;
justify-content: space-between;


`;
export const Text = styled.Text`
font-size:16px;
justify-content: space-between;
padding-left: 10px; 
font-weight: bold;
margin-left: 15px;
margin: 10px;
color: #131313;
`;

export const Linha = styled.View`
border-bottom-color: hsl(0,0%,70%);
border-bottom-width: 0.8px;
width: 90%;
margin-left: 15px;
`;

export const TextDados = styled.Text`
justify-content: space-between;
font-size:16px;
padding-right: 10px;
padding-left: 10px; 
font-weight: bold;
margin-left: 15px;
margin: 10px;
margin-right: 15px;
color: hsl(0,0%,40%);

`;

export const TextInput = styled.Text`
font-size:12px; 
font-weight: bold;
margin: 10px;
color: #0038a8;

`;
export const TextAviso = styled.Text`
margin-bottom: 10px;
margin-left: 15px;
padding-left: 10px;
font-size: 16px;
color: red;
font-weight: bold;
`;


