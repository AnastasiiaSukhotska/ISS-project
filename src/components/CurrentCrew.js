import { useEffect, useState } from "react"
import { ISS_API } from "../api/API"
import { CrewItem } from "./CrewItem"

export const CurrentCrewList = () => {
    const [crew, setCrew] = useState([])
    async function getCrewData() {
        let data = await ISS_API.getCrewInformation();
        setCrew(data.people.filter(p => p.craft === 'ISS'))
        setTimeout(getCrewData, 5000);
    }
    useEffect(() => {
        getCrewData()
    }, [])
    return (<div className='crew-information-container'>
        {crew.length ? crew.map(c => <CrewItem key={c.name} name={c.name} />) : ''}
        <div className='crew-information-footer'>{`Total amount: ${crew.length} people on ISS`}</div>
    </div>
    )
}