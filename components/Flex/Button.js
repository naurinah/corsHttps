import Button from "@material-ui/core/Button";

export const PriButton = ({ children }) => {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  );
};
