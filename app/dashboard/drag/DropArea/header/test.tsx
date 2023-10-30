import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type NavigationMenuProps = {
  className?: string,
  children: React.ReactNode,
} & React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>;

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  className,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Root
    className={cn("relative flex items-center justify-center", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
);

const NavigationMenuItem = NavigationMenuPrimitive.Item;
type NavigationMenuTriggerProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>;

const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  className,
  children,
  ...props
}) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(
      "inline-flex items-center px-4 py-2 rounded-md hover:bg-accent hover:text-white",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="ml-1 h-3 w-3" aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
);
type NavigationMenuContentProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>;

const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  className,
  ...props
}) => (
  <NavigationMenuPrimitive.Content
    className={cn("w-full md:w-auto", className)}
    {...props}
  />
);

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
};
