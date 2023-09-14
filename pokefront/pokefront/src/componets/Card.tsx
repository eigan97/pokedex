import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  rem,
} from "@mantine/core";
import { usePokemonStore } from "../store/use-pokemon";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
  button: {
    backgroundColor: "#27233A",
    color: 'white',
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '20px',
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage({
  image,
  avatar,
  name,
  job,
  stats,
}: UserCardImageProps) {
  const { classes, theme } = useStyles();
  const { addPokemon } = usePokemonStore()
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundColor: `${image}`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <button className={classes.button} onClick={() => addPokemon({name: name})}>
        Ver pokemon
      </button>
    </Card>
  );
}
