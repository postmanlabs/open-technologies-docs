import styled from 'styled-components';

export const TagStyles = styled.p`
border-radius: 20px;
border: transparent;
width: fit-content;
padding: 3px 10px;
color: white;
font-size: 10px;
font-weight: bold;
/* margin-right: 5px; */
&.graphql {
    background-color: rgb(45, 81, 170);
}
&.api {
    background-color: rgb(216, 245, 200);
    color: black;
}
&.schema {
    background-color: rgb(102, 102, 102);
}
&.type {
    background-color: rgb(163, 198, 252);
    color: black;
}
&.operation{
    background-color: rgb(250, 216, 122);
    color: black;
}
&.subscription {
    background-color: rgb(92, 197, 72);
}
&.real-time {
    background-color: rgb(81, 188,251);
}
&.non-spec {
    background-color: rgb(203, 243, 234);
    color: black;
}
&.scalars {
    background-color: rgb(202,89,49);
}
&.client {
    background-color: rgb(177, 121, 35);
}
`

export const TagButtonStyles = styled.button`
    border-radius: 20px;
    border: transparent;
    width: fit-content;
    padding: 3px 10px;
    color: white;
    font-size: 10px;
    font-weight: bold;
    margin-right: 5px;
    &.graphql[data-text=graphql] {
        background-color: rgb(45, 81, 170)!important;
    }
    &.api {
        background-color: rgb(216, 245, 200);
        color: black;
    }
    &.schema {
        background-color: rgb(102, 102, 102);
    }
    &.type {
        background-color: rgb(163, 198, 252);
        color: black;
    }
    &.operation{
        background-color: rgb(250, 216, 122);
        color: black;
    }
    &.subscription {
        background-color: rgb(92, 197, 72);
    }
    &.real-time {
        background-color: rgb(81, 188,251);
    }
    &.non-spec {
        background-color: rgb(203, 243, 234);
        color: black;
    }
    &.scalars {
        background-color: rgb(202,89,49);
    }
    &.client {
        background-color: rgb(177, 121, 35);
    }
    &.all {
      background-color: orange;
    }
`