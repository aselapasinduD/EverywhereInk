import Menu from "./views/menu";
import Notebook from "./views/notebook";
import Preview from "./views/preview";

function layout() {

  return (
    <div className="layout flex">
      <Menu className={`w-[200px] min-w-[200px] h-full bg-menu-background text-menu-foreground`} />
      <Notebook className={`w-[250px] min-w-[250px] h-full bg-notebook-background text-foreground`} />
      <Preview className={`flex-grow bg-preview-background text-foreground`} />
    </div>
  );
}

export default layout;