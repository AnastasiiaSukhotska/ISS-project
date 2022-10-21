import crewMemberPhoto from '../assets/images/user.png';

export const CrewItem = ({ name }) => {
    
    return (
        <div className='crew-member-card'>
            <img src={crewMemberPhoto} />
            {name}
        </div>
    )
}