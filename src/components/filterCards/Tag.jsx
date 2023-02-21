import styled from "styled-components"

export const TagStyles = styled.p`
  border-radius: 20px;
  border: transparent;
  width: fit-content;
  padding: 3px 10px;
  color: black;
  font-size: 10px;
  font-weight: bold;
  background-color: transparent; //until I can figure out the filtering
  margin-right: 5px;
  margin-bottom: 12px;

   &[data-text="schema"] {
    background-color: rgb(102, 102, 102);
    color: white;
  }
  &[data-text="type"] {
    background-color: rgb(163, 198, 252);
  }
  &.operation, &[data-text="operation"] {
    background-color: rgb(250, 216, 122);
  }
  &.subscription, &[data-text="subscription"] {
    background-color: rgb(92, 197, 72);
  }
  &.real-time, &[data-text="real-time"] {
    background-color: rgb(81, 188, 251);
  }
  &.non-spec, &[data-text="non-spec"] {
    background-color: rgb(203, 243, 234);
  }
  &.scalars, &[data-text="scalars"] {
    background-color: rgb(202, 89, 49);
  }
  &.client, &[data-text="client"] {
    background-color: rgb(177, 121, 35);
  }
  .nonnull, &[data-text="nonnull"] {
    background-color: rgb(250, 220, 254);
  }

  .field-level, &[data-text="field-level"] {
    background-color: ${(props) => props.theme.colors.grey_10};
  }
  .implementation, &[data-text="implementation"] {
    background-color: ${(props) => props.theme.colors.grey_40};
  }
  .performance, &[data-text="performance"] {
    background-color: rgb(96, 213, 209);
  }
   &[data-text="N +1 problem"] {
    background-color: rgb(252, 235, 186);
  }

  &[data-text="inheritance"] {
    background-color: rgb(138, 217, 196);
  }
  &[data-text="caching"] {
    background-color: ${(props) => props.theme.colors.orange_60};
    color: white;
  }
  &[data-text="authorization"] {
    background-color: magenta;
  }
 &[data-text="spec"] {
    background-color: rgb(193, 171, 241);
  }

  &[data-text="execution-engine"] {
    background-color: rgb(224, 214, 245);
  }
 &[data-text="testing"] {
    background-color: rgb(165, 43, 66);
    color: white;
  }
  &[data-text="documentation"] {
    background-color: rgb(39, 98, 20);
    color: white;
  }
  &[data-text="query"] {
    background-color: rgb(46, 117, 179);
    color: white;
  }
  &[data-text="security"] {
    background-color: rgb(54, 114, 220);
    color: white;
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
color: black;

  &[data-text="schema"]:hover, &[data-text="schema"]&.active {
    background-color: rgb(102, 102, 102);
    color: white;
  }
  &[data-text="type"]:hover, &[data-text="type"]&.active {
    background-color: rgb(163, 198, 252);
  }
  &[data-text="operation"]:hover, &[data-text="operation"]&.active {
    background-color: rgb(250, 216, 122);

  }
  &[data-text="subscription"]:hover, &[data-text="subscription"]&.active {
    background-color: rgb(92, 197, 72);
  }
  &[data-text="real-time"]:hover, &[data-text="real-time"]&.active {
    background-color: rgb(81, 188, 251);
  }
  &[data-text="non-spec"]:hover, &[data-text="non-spec"]&.active {
    background-color: rgb(203, 243, 234); 
  }
  &[data-text="scalars"]:hover, &[data-text="scalars"]&.active {
    background-color: rgb(202, 89, 49);
  }
  &[data-text="client"]:hover, &[data-text="client"]&.active {
    background-color: rgb(177, 121, 35);
  }
  &[data-text="nonnull"]:hover, &[data-text="nonnull"]&.active {
    background-color: rgb(250, 220, 254);
  }

  &[data-text="field-level"]:hover,  &[data-text="field-level"]&.active{
    background-color: ${(props) => props.theme.colors.grey_20};
  }
  &[data-text="implementation"]:hover, &[data-text="implementation"]&.active {
    background-color: ${(props) => props.theme.colors.grey_40};
  }
  &[data-text="performance"]:hover,  &[data-text="performance"]&.active {
    background-color: rgb(96, 213, 209);
  }
   &[data-text="N +1 problem"]:hover, &[data-text="N +1 problem"]&.active {
    background-color: rgb(252, 235, 186);
  }

  &[data-text="inheritance"]:hover, &[data-text="inheritance"]&.active {
    background-color: rgb(138, 217, 196);
  }
  &[data-text="authorization"]:hover, &[data-text="Authorization"]&.active {
    background-color: magenta;
  }
  &[data-text="caching"]:hover, &[data-text="caching"]&.active {
    background-color: ${(props) => props.theme.colors.orange_50};
    color: white;
  }
  &[data-text="spec"]:hover, &[data-text="spec"]&.active {
    background-color: rgb(193, 171, 241);
  }
  &[data-text="execution-engine"]:hover, &[data-text="execution-engine"]&.active {
    background-color: rgb(224, 214, 245);
  }
 &[data-text="testing"]:hover, &[data-text="testing"]&.active {
    background-color: rgb(165, 43, 66);
    color: white;
  }
  &[data-text="documentation"]:hover, &[data-test="documentation"]&.active {
    background-color: rgb(39, 98, 20);
    color: white;
  }
  &[data-text="query"]:hover, &[data-type="query"]&.active {
    background-color: rgb(46, 117, 179);
    color: white;
  }
  &[data-text="security"]:hover, &[data-type="security"]&.active {
    background-color: rgb(54, 114, 220);
    color: white;
  }
  &[data-text="All"]:hover , &[data-text="All"]&.active {
  background-color: orange;
}
`
