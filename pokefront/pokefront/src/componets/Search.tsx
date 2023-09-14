import {
  TextInput,
  TextInputProps,
  createStyles,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export function Search(props: TextInputProps & {onClickButton: () => void}) {
  const useStyles = createStyles(() => ({
    button: {
      backgroundColor: "#27233A",
      color: "white",
      padding: "8px 20px",
      borderRadius: "20px",
    },
  }));
  const { classes } = useStyles();

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <button className={classes.button} onClick={() => props.onClickButton()}>
          Buscar
        </button>
      }
      placeholder="Busca a tu pokemon"
      rightSectionWidth={42}
      {...props}
    />
  );
}
