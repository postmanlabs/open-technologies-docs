import styled from "styled-components"

export const TagStyles = styled.p`
  border-radius: 20px;
  border: transparent;
  width: fit-content;
  padding: 3px 10px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  background-color: magenta; //until I can figure out the filtering
  margin-right: 5px;
  margin-bottom: 12px;
  
  &.graphql, &[data-text="graphql"] {
    background-color: rgb(45, 81, 170);
  }
  &.api, &[data-text="api"] {
    background-color: rgb(216, 245, 200);
    color: black;
  }
  &.schema, &[data-text="schema"] {
    background-color: rgb(102, 102, 102);
  }
  &.type, &[data-text="type"] {
    background-color: rgb(163, 198, 252);
    color: black;
  }
  &.operation, &[data-text="operation"] {
    background-color: rgb(250, 216, 122);
    color: black;
  }
  &.subscription, &[data-text="subscription"] {
    background-color: rgb(92, 197, 72);
  }
  &.real-time, &[data-text="real-time"] {
    background-color: rgb(81, 188, 251);
  }
  &.non-spec, &[data-text="non-spec"] {
    background-color: rgb(203, 243, 234);
    color: black;
  }
  &.scalars, &[data-text="scalars"] {
    background-color: rgb(202, 89, 49);
  }
  &.client, &[data-text="client"] {
    background-color: rgb(177, 121, 35);
  }
  &[data-text="All"] {
  background-color: orange!important;
}
`
