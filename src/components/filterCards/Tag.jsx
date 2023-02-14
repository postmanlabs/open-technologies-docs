import styled from "styled-components"

export const TagStyles = styled.p`
  border-radius: 20px;
  border: transparent;
  width: fit-content;
  padding: 3px 10px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  background-color: transparent; //until I can figure out the filtering
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
    color: white;
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
  .null, &[data-text="null"] {
    background-color: rgb(244, 164, 183);
    color: black;
  }
  .nonnull, &[data-text="nonnull"] {
    background-color: rgb(250, 220, 254);
    color: black;
  }
  .permissions, &[data-text="permissions"] {
    background-color: rgb(98, 40, 170);
  }
  .field-level, &[data-text="field-level"] {
    background-color: ${(props) => props.theme.colors.grey_10};
    color: black;
  }
  .implementation, &[data-text="implementation"] {
    background-color: ${(props) => props.theme.colors.grey_40};
    color: black;
  }
  .performance, &[data-text="performance"] {
    background-color: rgb(96, 213, 209);
  }
   &[data-text="N +1 problem"] {
    background-color: rgb(252, 235, 186);
    color: black;
  }
  &[data-text="directive"] {
    background-color: rgb(231, 72, 98);
  }
  .inheritance, &[data-text="inheritance"] {
    background-color: rgb(138, 217, 196);
    color: black;
  }
  &[data-text="caching"] {
    background-color: ${(props) => props.theme.colors.orange_60};
  }
  &[data-text="Authorization"] {
    background-color: magenta;
    color: black;
  }
  &[data-text="All"] {
  background-color: orange;
}
`
export const ButtonTag = styled.p`
margin: 4px;
font-weight: bold;
text-transform: uppercase;
border: 2px solid ${(props) => props.theme.colors.grey_20};

  &[data-text="graphql"]:hover, &[data-text="graphql"]&.active {
    background-color: rgb(45, 81, 170);
    color: white;
  }
  &[data-text="api"]:hover, &[data-text="api"]&.active {
    background-color: rgb(216, 245, 200);
  }
  &[data-text="schema"]:hover, &[data-text="schema"]&.active {
    background-color: rgb(102, 102, 102);
  }
  &[data-text="type"]:hover, &[data-text="type"]&.active {
    background-color: rgb(163, 198, 252);
  }
  &[data-text="operation"]:hover, &[data-text="operation"]&.active {
    background-color: rgb(250, 216, 122);
    color: black;
  }
  &[data-text="subscription"]:hover, &[data-text="subscription"]&.active {
    background-color: rgb(92, 197, 72);
  }
  &[data-text="real-time"]:hover, &[data-text="real-time"]&.active {
    background-color: rgb(81, 188, 251);
  }
  &[data-text="non-spec"]:hover, &[data-text="non-spec"]&.active {
    background-color: rgb(203, 243, 234);
    color: black;
  }
  &[data-text="scalars"]:hover, &[data-text="scalars"]&.active {
    background-color: rgb(202, 89, 49);
  }
  &[data-text="client"]:hover, &[data-text="client"]&.active {
    background-color: rgb(177, 121, 35);
  }
  &[data-text="null"]:hover, &[data-text="null"]&.active  {
    background-color: rgb(244, 164, 183);
    color: black;
  }
  &[data-text="nonnull"]:hover, &[data-text="nonnull"]&.active {
    background-color: rgb(250, 220, 254);
    color: black;
  }
  &[data-text="permissions"]:hover, &[data-text="permissions"]&.active {
    background-color: rgb(98, 40, 170);
    color: white;
  }
  &[data-text="field-level"]:hover,  &[data-text="field-level"]&.active{
    background-color: ${(props) => props.theme.colors.grey_20};
    color: black;
  }
  &[data-text="implementation"]:hover, &[data-text="implementation"]&.active {
    background-color: ${(props) => props.theme.colors.grey_40};
    color: black;
  }
  &[data-text="performance"]:hover,  &[data-text="performance"]&.active {
    background-color: rgb(96, 213, 209);
  }
   &[data-text="N +1 problem"]:hover, &[data-text="N +1 problem"]&.active {
    background-color: rgb(252, 235, 186);
    color: black;
  }
  &[data-text="directive"]:hover, &[data-text="directive"]&.active {
    background-color: rgb(231, 72, 98);
  }
  &[data-text="inheritance"]:hover, &[data-text="inheritance"]&.active {
    background-color: rgb(138, 217, 196);
    color: black;
  }
  &[data-text="Authorization"]:hover, &[data-text="Authorization"]&.active {
    background-color: magenta;
    color: black;
  }
  &[data-text="caching"]:hover, &[data-text="caching"]&.active {
    background-color: ${(props) => props.theme.colors.orange_50};
    color: white;
  }
  
  &[data-text="All"]:hover , &[data-text="All"]&.active {
  background-color: orange;
}
`
