interface ActionButtonProps {
    variant: "primary" | "outline" | "ghost";
    color: "primary" | "secondary";
    callback: (...args: any) => any;
    children: React.ReactNode;
  }
  
  const ActionButton = ({
    variant = "primary",
    color = "secondary",
    callback,
    children,
  }: ActionButtonProps) => {
    const variantClasses = {
      primary: {
        primary: "bg-primary-medium text-white hover:bg-primary-dark",
        secondary: "bg-secondary text-white",
      },
      outlined: {
        primary:
          "border-primary-medium border-2 text-primary-medium hover:bg-primary-dark hover:text-white",
        secondary:
          "border-secondary border-2 text-secondary hover:bg-secondary hover:text-white",
      },
      ghost: {
        primary:
          "bg-primary-medium/[0.15] text-primary-medium hover:bg-primary-medium/[0.25]",
        secondary: "bg-secondary/[0.15] text-secondary hover:bg-secondary/[0.25]",
      },
    };
  
    return (
      <button
        onClick={callback}
        className={`rounded-md 
            px-6 py-3 
            hover:scale-105 
            transition-transform 
            duration-100 
            ease-out 
            grid
            gap-2
            grid-flow-col
            justify-center
            items-center
            group
            ${variantClasses[variant][color]} `}>
        {children}
      </button>
    );
  };
  
  export default ActionButton;
  