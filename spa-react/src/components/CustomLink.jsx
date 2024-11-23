import { useNavigate } from 'react-router'

function CustomLink({ to, children }) {
  const linkStyle = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
    border: 'none',
    background: 'none',
  }
  const navigateTo = useNavigate()
  const navigate = (to) => {
    document.startViewTransition(() => {
      navigateTo(to)
    })
  }
  return (
    <button className="custom-link" style={linkStyle} onClick={() => navigate(to)}>
      {children}
    </button>
  );
}

export default CustomLink