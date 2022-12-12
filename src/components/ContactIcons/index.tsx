import { ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import { IconPhone, IconInfoCircle, IconAt, IconBuildingBank } from '@tabler/icons';
import { useStyles } from './styles';

const contactData = [
  { title: 'Email', description: 'kontakt@klubmysliekologicznej.org', icon: IconAt },
  { title: 'Telefon', description: '501 477 213', icon: IconPhone },
  { title: 'KRS', description: '0000874997', icon: IconInfoCircle },
  { title: 'REGON', description: '387945491', icon: IconInfoCircle },
  { title: 'NIP', description: '6431774873', icon: IconInfoCircle },
  { title: 'Nest Bank', description: '08 1870 1045 2078 1069 3591 0001', icon: IconBuildingBank },
];

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
}

export default function ContactIcons({ data = contactData }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
