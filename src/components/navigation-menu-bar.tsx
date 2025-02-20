import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { nav } from "@/consts";

const NavigationMenuBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav.map(item => (
          <NavigationMenuItem>
            <NavigationMenuLink href={item.href}>{item.name}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuBar;
