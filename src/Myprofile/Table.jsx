

const Table = ({setOrd,handledlt}) => {
    const {_id,Image,name,Price,Email,MadeBy}=setOrd||{}
    




    
    return (
        <tbody className="text-orange-800 font-bold md:text-xl">
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox bg-black" />
          </label>
        </th>
        <td>
          {name}
        </td>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle md:w-36 md:h-36 h-12 w-12 ">
                <img src={Image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
       
        <td>{Price}</td>
        <td>{Email}</td>
        <td>{MadeBy}</td>
        <th>
        <button onClick={()=>handledlt(_id)} className="btn btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
        </th>
      </tr>
      </tbody>
     
    );
};

export default Table;