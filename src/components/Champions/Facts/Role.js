import './facts.css';
import resolveRole from './resolveRole';

export default function Role({role}){
    const roleURL = resolveRole(role)
    return(
        <article className="role-wrapper">
            <div className="role-img-wrapper">
                <img src={roleURL} alt={`${role} role icon`} />
            </div>
            <div className="role-text-wrapper">
                <p>Role</p>
                <p>{role}</p>
            </div>
        </article>
    )
}