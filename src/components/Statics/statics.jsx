import { ListItem } from "./statics.styled"
export const Statics = ({good, neutral, bad, total, positivePercentage}) =>{
    return (
    <ul>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      {total > 0 && <ListItem>Total: {total}</ListItem>}
      {good > 0 && <ListItem>Positive feedback: {positivePercentage}%</ListItem>}
    </ul>
    )
}