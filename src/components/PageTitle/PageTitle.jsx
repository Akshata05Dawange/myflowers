import "./PageTitle.css";

function PageTitle({ title,subtitle }) {
  return (
    <div className="page-title">{title}
    <p className="subtitle">{subtitle}</p>
    </div>
  )
}

export default PageTitle;