import './Prizes.css' ;
import OnePrize from './OnePrize/OnePrize';
import { Value } from '../../assets';
import { Telnet } from '../../assets';

function Prizes(){
    return <div>
        <OnePrize image={Value}  prize='3000Dt' />
        <OnePrize image={Telnet}  prize='5000Dt' />



    </div>
}



export default Prizes 