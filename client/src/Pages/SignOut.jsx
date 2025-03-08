import { ContextStore } from '../store/ContextStore';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {

  const navigate = useNavigate()
  const { deleteFromLocalStorage } = useContext(ContextStore)

  useEffect(() => {
    deleteFromLocalStorage()
    navigate("/")
  }, [])

  return (
    <div>
      Logged Out
    </div>
  )
}
