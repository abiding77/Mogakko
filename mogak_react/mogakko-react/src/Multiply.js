import React from "react";

const Multiply = ({number}) => {
    const mul = [1,2,3,4,5,6,7,8,9];
    return (
        <div>
            {mul.map((n) => (
                <p>
                    {number} * {n} = {number*n}
                </p>
            ))}
        </div>
    );
}

export default Multiply;

// import React from "react";


// const Dan = ({number}) => {
//     const num = [1,2,3,4,5,6,7,8,9];


//     return(
//         <div>
//             {num.map((n) => (
//                 <p>
//                     {number} * {n} = {number*n}
//                 </p>
//             ))}
//         </div>
//     );
// };


// export default Dan;