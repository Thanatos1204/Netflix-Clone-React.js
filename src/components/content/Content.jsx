import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';


export default function Content() { 

  return (
    <div className="content-wrapper">
      {
        RowData.map((el)=>{
          return <Row title={el.title} url ={el.url} />
        })
      }
    </div>
  )
}


// API KEY: 1a608a5f537fddc552b0fe31cffb263e