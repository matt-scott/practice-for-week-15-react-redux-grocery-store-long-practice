import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { getAllProduce } from '../../store/produce';

function ProduceList() {

  const produceArr = useSelector(getAllProduce);

  // replaced by the above line and the getAllProduce function in produce.js (see below line)
  // => export const getAllProduce = (state) => Object.values(state.produce);

  // const produce = useSelector(state => state.produce);
  // const produceArr = Object.values(produce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;