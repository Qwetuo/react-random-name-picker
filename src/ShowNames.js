import React from "react";

const ShowNames = props => {
  return (
    <div>
      <ul>
        {props.input.names.map((name, i) => {
          if (props.input.luckyWinnerIndex === i) {
            return <li id="winner">{name}</li>;
          } else {
            return <li>{name}</li>;
          }
        })}
      </ul>
    </div>
  );
};

// class ShowNames extends Component {
//     render(props) {
//         return (
//             <div>
//                 <ul>
//             {props.names.map((name,i) => {
//               if (this.state.luckyWinnerIndex === i) {
//                 return <li id="winner">{name}</li>
//               } else {
//                 return <li>{name}</li>
//               }
//             })}
//           </ul>
//             </div>
//         );
//     }
// }

export default ShowNames;
