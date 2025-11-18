"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import * as React from "react";

// -------------------------
// Types
// -------------------------
export interface AccordionItemType {
  value: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemType[];
}

// -------------------------
// Accordion Component
// -------------------------
const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  return (
    <AccordionPrimitive.Root
      className="w-full max-w-md rounded-md border border-primary bg-mauve6"
      type="single"
      defaultValue={items[0]?.value}
      collapsible
    >
      {Array.isArray(items) &&
        items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
    </AccordionPrimitive.Root>
  );
};

// -------------------------
// Accordion Item
// -------------------------
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Item
    className={classNames(
      "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary",
      className,
    )}
    {...props}
    ref={ref}
  >
    {children}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = "AccordionItem";

// -------------------------
// Accordion Trigger
// -------------------------
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={classNames(
        "group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2 focus:border-primary focus:ring-2 focus:ring-primary",
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// -------------------------
// Accordion Content
// -------------------------
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    className={classNames(
      "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className,
    )}
    {...props}
    ref={ref}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export default Accordion;
