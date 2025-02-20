import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { nav } from "@/consts";

const NavigationMenus = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav.map(item => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink href={item.href}>{item.name}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenus;
