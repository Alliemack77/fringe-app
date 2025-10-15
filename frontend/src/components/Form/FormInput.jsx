export default function FormInput ({label, id, type}) {

    return (
        <div className="form-control">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type={type}
            />
        </div>
            
    )
    }