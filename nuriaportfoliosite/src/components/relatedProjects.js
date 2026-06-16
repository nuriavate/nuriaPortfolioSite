import ButtonText from "./buttonText";
import ProjectList from "./projectList";
import Section from "./section";

export default function RelatedProjects({ items = [] }) {
  return (
    <>
      <Section
        titleh1="You may also like"
        rightContent={<ButtonText to="/projects" text="See all projects" />}
      />
      <div className="page-shell">
        <ProjectList items={items} />
      </div>
    </>
  );
}
