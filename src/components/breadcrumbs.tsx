import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbsItem {
  text: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
  className?: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Breadcrumb className={props.className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {props.items.map((item, index) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem key={index}>
              {index < props.items.length - 1 ? (
                <BreadcrumbLink href={item.href}>{item.text}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.text}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
