import { useNavigate } from 'react-router'

function CustomLink({ to, children }) {
  const navigateTo = useNavigate()
  const navigate = (to) => {
    document.startViewTransition(() => {
      navigateTo(to)
    })
  }
  return (
    <a href="#" className="custom-link" onClick={() => navigate(to)}>
      {children}
    </a>
  );
}

export default CustomLink