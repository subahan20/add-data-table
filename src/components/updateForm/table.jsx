



const CustomTable = ({rowData=[]}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>update</th>
                </tr>
            </thead>
            <tbody>
            {
                rowData.map(each=>{
                    return(
                        <tr key={each}>
                         <td>{each.data1}</td>
                         <td>{each.data2}</td>
                         <td>{each.data3}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

    )
}
export default CustomTable