import { useNavigate } from "react-router-dom";

export default function Appbar(){
    const navigate = useNavigate();
    return(
      <div>
        <div>
            <button onClick={()=>{
            navigate('/')
            }}>Landing
          </button>
          <button onClick={()=>{
            navigate('/dashboard')
            }}>Dashboard
          </button>
        </div>
      </div>
    )
  }
