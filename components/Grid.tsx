import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <h1 className="heading"> 
        About <span className="dark:text-purple text-white-100">moi...</span>
      </h1>
      <BentoGrid className="w-full pt-20">
        {gridItems.map(({id, title,description,className,img,imgClassName,titleClassName,spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;