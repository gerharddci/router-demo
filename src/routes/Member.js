import { useParams, useNavigate } from 'react-router-dom';
// import { getMember, deleteMember } from "../data";


function Member({ members, setMembers }) {
    let params = useParams();
    let navigate = useNavigate();

    const getMember = function(id) {
        return members.find(member => member.id === id);
    };

    const deleteMember = function(id) {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleDelete = function(id) {
        deleteMember(id);
        navigate('/team');
    };

    const { id, name, username, email, address } = getMember(parseInt(params.memberId, 10));
    return (
        <main style={{ padding: "1rem", textAlign: "left" }}>
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>{address.street}</p>
            <button onClick={() => handleDelete(id)}>Delete Member</button>
        </main>
    )
}

export default Member;