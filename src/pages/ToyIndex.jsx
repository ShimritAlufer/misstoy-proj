import { useSelector } from "react-redux";
import { useEffect } from "react"
import { loadToys } from '../store/toy/toy.actions.js'
import { ToyFilter } from "../cmps/ToyFilter";

export function ToyIndex(){
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy) 

    useEffect(() => {
        loadToys()
    }, [filterBy])


    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)
    }

    const { name, label, inStock } = filterBy
    return (
        <section>
            <h1>Welcome to our Toys App!</h1>
            <ToyFilter onSetFilterBy={onSetFilterBy} filterBy={{name, label, inStock}}/> 
            
            {/* // <RobotFilter onSetFilterBy={onSetFilterBy} filterBy={{ model, minBatteryStatus }} />
            // <RobotFilterType filterBy={{ type }} onSetFilterBy={onSetFilterBy} />
            // <section style={{ marginBlock: '10px', display: 'flex', gap: '10px' }}>
            //     <button onClick={onSpendBalance}>Spend Balance</button>
            //     <button onClick={onTogglePopo}>{popo ? 'Popo!' : 'Not Popo...'}</button>
            // </section>
            // <Link to='/robot/edit'>Add Robot</Link>
            // <RobotList robots={robots} onRemoveRobot={onRemoveRobot} />
            // <Outlet /> */}
        </section>
    )

}