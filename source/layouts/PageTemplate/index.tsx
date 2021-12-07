import Main from '../Main';

interface PageTemplateProps {
  title?: string;
}
const PageTemplate: React.FC<PageTemplateProps> = ({ children, title }) => {
  return (
    <Main>
      {title && <h2>{title}</h2>}
      {children}
    </Main>
  );
};

export default PageTemplate;
