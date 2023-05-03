import css from './Section.module.css'

const Section = ({title, children}) => (
    <div className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
    </div>
    
)

export default Section;