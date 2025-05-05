import React, { startTransition } from "react";
import Button from "@mui/material/Button";

const FormButton = ({
  variant = "contained",
  component = "button",
  size = "medium",
  color = "primary",
  onClick,
  disabled = false,
  node,
  startIcon,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      startIcon={startIcon}
    >
      {node}
    </Button>
  );
};

export default FormButton;