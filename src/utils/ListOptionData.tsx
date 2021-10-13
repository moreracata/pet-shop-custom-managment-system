
export default function ListOptionData(props: ListOptionDataProps){
    
    
    return (
        <>
           
                <tr>
                    <td>
                        <img src={props.listObject.picture } alt=""/>
                        <a href="#" className="user-link">{props.listObject.name }</a>
                        <span className="user-subhead">Age:{props.listObject.age } </span>
                    </td>
                    <td>
                        2013/08/08
                    </td>
                    <td className="text-center">
                        <span className="label label-default">Cat</span>
                    </td>
                    <td>
                    <span className="label label-default">Cata</span>
                    </td>
                    <td>
                        <a href="#" className="table-link">
                            <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a href="#" className="table-link">
                            <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a href="#" className="table-link danger">
                            <span className="fa-stack">
                                <i className="fa fa-square fa-stack-2x"></i>
                                <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </td>
				</tr>
                   
                  
        </>
    )

}

interface ListOptionDataProps {
    listObject: any;
}